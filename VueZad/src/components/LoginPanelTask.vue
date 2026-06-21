<template>
  <section class="task">
    <h2>5.5 Panel logowania użytkownika</h2>
    <div v-if="!isLoggedIn" class="form login-form">
      <input v-model="login" placeholder="Login" />
      <input v-model="password" type="password" placeholder="Hasło" />
      <button @click="logIn">Zaloguj</button>
    </div>
    <div v-else class="profile card">
      <h3>{{ userName }}</h3>
      <p>Miło Cię widzieć w aplikacji Vue.</p>
      <button @click="logOut">Wyloguj</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LoginPanelTask',
  data() {
    return {
      isLoggedIn: false,
      login: '',
      password: '',
      userName: ''
    };
  },
  methods: {
    logIn() {
      if (this.login.trim()) {
        this.userName = this.login;
        this.isLoggedIn = true;
      }
    },
    logOut() {
      this.isLoggedIn = false;
      this.login = '';
      this.password = '';
      this.userName = '';
    }
  }
};
</script>
