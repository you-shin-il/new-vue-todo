<template>
  <div id="app">
      <TodoHeader></TodoHeader>
      <TodoInput></TodoInput>
      <TodoList></TodoList>
      <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}</script>

<style>
body {
  text-align: center; background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: calc(100% - 48px);
  height: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 20px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
}
</style>
