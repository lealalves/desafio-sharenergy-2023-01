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
.button:active{
  color: #222;
  background-color: #f5f5f5;
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