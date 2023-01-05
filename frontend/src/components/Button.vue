<template>
  <button class="button">{{text}}</button>
</template>

<style scoped>
.button {
  background-color: transparent;
  color: white;
  padding: 10px;
  border: 1px solid whitesmoke;
}
</style>

<script>
  export default {
    name: 'Button',
    props: {
      text: String
    }
  }
</script>