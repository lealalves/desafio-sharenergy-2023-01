<template>
	<main>
    <div id="container-dog">
      <Header />
      <h1>Random DOG</h1>
      <p>Aperte o botão para que apareça um cachorro aleatório!</p>
      <Button @click="searchDog()" text="Refresh"/>
      <Message :msg="dogMsg" />
      <img @load="dogMsg = ''" v-show="dogImg" :src="dogImg" alt="Dog" id="dog_img">
    </div>
	</main>
</template>
<style scoped>
#container-dog{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
#container-dog p{
  display: flex;
  height: 20px;
  margin-bottom: 5px;
  text-align: center;
}
#container-dog img{
  width: min(600px, 90vw);
  margin-top: 10px;
  border-radius: 10px;
}
#container-dog button{
  margin-bottom: 30px;
  margin-top: 30px;
}
</style>
<script>
import Header from '../components/Header/Header.vue'
import Button from '../components/Button.vue'
import Message from '../components/Message.vue'

export default {
  name: 'Dog',
  components:{
    Header,
    Button,
    Message
  },
  data(){
    return {
      dogImg: '',
      dogMsg: ''
    }
  },
  methods: {
    async searchDog(){
      this.dogMsg = 'Carregando a foto do doguinho, calma!!'
      const req = fetch('http://localhost:3000/services/randomdog')
      const res = await (await req).json()

      if(res.url.split('.')[2] == 'mp4' || res.url.split('.')[2] == 'gif'){
        return this.searchDog()
      }
      this.dogImg = res.url
    }
  }
}
</script>