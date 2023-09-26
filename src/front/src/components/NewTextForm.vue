<template>
  <form class="form" @submit.prevent>
    <h2><strong>Создание секретного текста:</strong></h2>
    <h4 hidden>ID: {{postData.id}}</h4>
    <textarea
        v-model="postData.value"
        class="input"
        placeholder="Введите текст тут..."
    ></textarea>
    <button
        class="btn"
        @click="createText"
    >Создать</button>
  </form>
</template>

<script>
import * as uuid from "uuid";

export default {
  data() {
    return {
     postData: {
       id: uuid.v4(),
       value: ''
     }
    }
  },
  methods: {
    createText() {
      this.$emit('create', this.postData)
    }
  }
}
</script>

<style scoped>
.input {
  resize: vertical;
  height: 100px;
  width: 100%;
  border-color: darkgreen;
  border-width: 5px;
  padding: 10px 15px;
  margin-top: 15px;
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
.form {
  display: flex;
  flex-direction: column;
}
</style>