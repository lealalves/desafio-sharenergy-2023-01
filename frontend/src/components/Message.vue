<template>
	<main>
    <div id="container-mensagem">
      <p>{{ msg }}</p>
    </div>
	</main>
</template>
<style scoped>
#container-mensagem{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 7vw;
  margin-bottom: 10px;
  color: #adff2f;
}
</style>
<script>
export default {
  name: 'Message',
  props: ['msg'],
  data(){
    return {
    }
  }
}
</script>