<template>
  <section class="events-page">
    <h2>Events</h2>

    <div class="events-section card">
      <h3>Button</h3>
      <button @click="handleClick">click</button>
      <p v-if="clickCount > 0">Kliknięto przycisk: {{ clickCount }}</p>
    </div>

    <div class="events-section card">
      <h3>Double click + mouse move</h3>
      <div
        class="orange-box"
        :class="{ clicked: doubleClicked }"
        @dblclick="handleDoubleClick"
        @mousemove="handleMouseMove"
      >
        {{ boxMessage }}
      </div>
      <p v-show="mouseX !== null">Pozycja myszy: X={{ mouseX }}, Y={{ mouseY }}</p>
    </div>

    <div class="events-section card">
      <h3>Input</h3>
      <input v-model="inputText" />
      <p>{{ inputText }}</p>
      <p class="bold-text">{{ inputText }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EventsLayout',
  data() {
    return {
      clickCount: 0,
      mouseX: null,
      mouseY: null,
      doubleClicked: false,
      boxMessage: 'Kliknij dwukrotnie',
      inputText: 'HelloGoodbye'
    };
  },
  methods: {
    handleClick() {
      this.clickCount++;
    },
    handleDoubleClick() {
      this.doubleClicked = true;
      this.boxMessage = 'Double click wykonany';
    },
    handleMouseMove(event) {
      this.mouseX = event.offsetX;
      this.mouseY = event.offsetY;
    }
  }
};
</script>

<style scoped>
.events-page {
  background: #d9d9d9;
  padding: 20px;
  border-radius: 10px;
}

.events-section {
  margin-bottom: 20px;
  background: #fff;
}

.orange-box {
  width: 200px;
  height: 120px;
  background: orange;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;
}

.orange-box.clicked {
  background: #ff9800;
  color: #fff;
  font-weight: bold;
}

.bold-text {
  font-weight: bold;
}
</style>
