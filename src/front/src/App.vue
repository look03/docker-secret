<template>
  <div class="app">
    <div class="navbar">
      <h1>Secret</h1>
      <router-link class="router-link" to="/">Домашняя страница</router-link>
      <router-link class="router-link" to="/text/add">Создать скрытый текст</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.app {
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 60em
}
.navbar {
  width: 100%;
  height: 50px;
  background-color: bisque;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.router-link {
  padding: 15px 10px;
  color: black;
  font-size: 18px;
}
</style>
