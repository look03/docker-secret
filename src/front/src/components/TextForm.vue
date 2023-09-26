<template>
  <div v-if="post.id !== ''">
    <textarea disabled class="input" v-model="post.value"></textarea>
    <br/>
    <h3>Ссылка: http://localhost:8081/{{ post.id }}</h3>
    <h3>ID: {{ post.id }}</h3>
  </div>
  <div v-else>
    <h2 class="errorMessage">Сообщение с ID: '{{ $route.params.id }}' отустствует!</h2>
  </div>
</template>

<script>
import webserverInstance from "../app/instances/webserver.instance";

export default {
  data() {
    return {
      post: {
        id: '',
        value: ''
      }
    }
  },
  methods: {
    async getText() {
      const text = await webserverInstance.get(this.$route.params.id);
      if (text.data != null) {
        this.post.id = text.data.id
        this.post.value = text.data.text
      }
    }
  },
  mounted() {
    this.getText()
  }
}
</script>

<style scoped>
.errorMessage {
  color: red;
}
.input {
  resize: none;
  height: 500px;
  width: 100%;
  border-color: darkgreen;
  border-width: 5px;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>