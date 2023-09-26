<template>
  <div>
    <h1 hidden>Текст с ID = {{ $route.params.id }} </h1>
    <text-form/>
  </div>
</template>

<script>
import TextForm from "../components/TextForm.vue";
export default {
  components: {TextForm},
}
</script>

<style scoped>

</style>