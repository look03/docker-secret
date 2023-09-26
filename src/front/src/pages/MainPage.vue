<template>
  <div class="text">
    <h1>Добро пожаловать на домашнюю страницу.</h1>
    <h3>Чтобы создать секретный текст, нажмите<router-link class="router-link" to="/text/add">сюда</router-link>.</h3>
    <form>
      <h3>Чтобы перейти к созданному тексту, вставьте ID в поле: </h3>
      <input v-model="id" class="input">
      <button
          class="btn"
          @click="getText"
      >Поиск</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: ''
    }
  },
  methods: {
    getText() {
      this.$router.push('/' + this.id)
    }
  }
}
</script>

<style scoped>
.text {
  text-align: center;
}
.router-link {
  color: blue;
}
.input {
  border-color: darkgreen;
  border-width: 5px;
  padding: 10px 15px;
  margin-top: 15px;
  margin-right: 10px;
}
.btn {
  margin-top: 15px;
  align-self: flex-end;
  padding: 15px 10px;
  background: none;
  color: darkgreen;
  border-color: darkgreen;
  border-radius: 20px;
}
</style>