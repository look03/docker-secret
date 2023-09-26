<template>
  <div>
    <new-text-form
        @create="createText"
        :postData="postData"
    />
  </div>
</template>

<script>
import NewTextForm from "../components/NewTextForm.vue";
import webserverInstance from "../app/instances/webserver.instance";

export default {
  components: {NewTextForm},
  data() {
    return {
      postData: {
        id: '',
        value: ''
      }
    }
  },
  methods: {
    async createText(post) {
      this.postData.id = post.id
      this.postData.value = post.value
      await webserverInstance.post('/text/add', {
        id: this.postData.id,
        value: this.postData.value
      });
      this.$router.push('/' + this.postData.id)
    }
  },
}
</script>

<style scoped>

</style>