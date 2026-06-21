const http = require('http');
const path = require('path');
const fs = require('fs');
const querystring = require('querystring');
const { mimeTypes } = require('./utility/mime');
const { staticFile } = require('./utility/static_file');

const PORT = 3500;

function getCookies(req) {
  const cookies = {};
  const header = req.headers.cookie;

  if (!header) {
    return cookies;
  }

  header.split(';').forEach(function (part) {
    const pair = part.trim().split('=');
    cookies[pair[0]] = pair[1];
  });

  return cookies;
}

function isAuthenticated(req) {
  const cookies = getCookies(req);
  return cookies.auth === 'true';
}

function redirect(res, location) {
  res.statusCode = 302;
  res.setHeader('Location', location);
  res.end();
}

function handleLoginPost(req, res) {
  let body = '';

  req.on('data', function (chunk) {
    body += chunk;
  });

  req.on('end', function () {
    const formData = querystring.parse(body);
    const usersPath = path.join(__dirname, 'data', 'users.json');

    fs.readFile(usersPath, 'utf8', function (err, content) {
      if (err) {
        res.statusCode = 500;
        res.end('Server error');
        return;
      }

      const users = JSON.parse(content);
      const user = users.find(function (item) {
        return item.login === formData.login && item.password === formData.password;
      });

      if (user) {
        res.setHeader('Set-Cookie', 'auth=true; Path=/');
        redirect(res, '/admin');
        return;
      }

      res.statusCode = 401;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end('<h1>Błąd logowania</h1><p>Nieprawidłowy login lub hasło.</p><p><a href="/login">Spróbuj ponownie</a></p>');
    });
  });
}

http.createServer(function (req, res) {
  const url = req.url.split('?')[0];
  const method = req.method;

  if (method === 'GET' && url === '/') {
    staticFile(res, '/html/main_page.html', '.html');
    return;
  }

  if (method === 'GET' && url === '/contact') {
    staticFile(res, '/html/contact.html', '.html');
    return;
  }

  if (method === 'GET' && url === '/login') {
    staticFile(res, '/html/login.html', '.html');
    return;
  }

  if (method === 'POST' && url === '/login') {
    handleLoginPost(req, res);
    return;
  }

  if (method === 'GET' && url === '/admin') {
    if (isAuthenticated(req)) {
      staticFile(res, '/html/admin.html', '.html');
    } else {
      redirect(res, '/login');
    }
    return;
  }

  if (method === 'GET' && url === '/logout') {
    res.setHeader('Set-Cookie', 'auth=; Path=/; Max-Age=0');
    redirect(res, '/login');
    return;
  }

  const ext = path.extname(url).toLowerCase();

  if (mimeTypes[ext]) {
    staticFile(res, url, ext);
    return;
  }

  const notFoundPath = path.join(__dirname, 'public', 'html', 'not_found.html');

  fs.readFile(notFoundPath, function (err, data) {
    res.statusCode = 404;
    res.setHeader('Content-Type', mimeTypes['.html']);
    res.end(data);
  });
}).listen(PORT);
