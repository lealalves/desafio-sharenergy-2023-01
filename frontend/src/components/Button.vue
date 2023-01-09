<template>
  <button class="button">{{text}}</button>
</template>

<style scoped>
.button {
  background-color: transparent;
  border-radius: 10px;
  color: white;
  padding: 10px;
  border: 1px solid whitesmoke;
  cursor: pointer;
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