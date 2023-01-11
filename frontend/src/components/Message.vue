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
  align-items: right;
  height: 15px;
  color: #999;
  margin-bottom: 5px;
}
</style>
<script>
export default {
  name: 'Message',
  props: ['msg'],
}
</script>