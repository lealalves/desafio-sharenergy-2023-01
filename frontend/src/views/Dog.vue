<template>
	<main>
    <div id="container-dog">
      <Header />
      <h1>Random DOG</h1>
      <p>Aperte o botão para que apareça um cachorro!</p>
      <Button @click="searchDog()" text="Refresh"/> 
      <p v-show="!dogLoaded && dogImg !== ''">Carregando a foto do doguinho, calma!!</p>
      <img @load="dogLoaded = true" v-show="dogImg" :src="dogImg" alt="Dog" id="dog_img">
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
#container-dog img{
  width: min(600px, 90vw);
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

export default {
  name: 'Dog',
  components:{
    Header,
    Button
  },
  data(){
    return {
      dogImg: '',
      dogLoaded: false
    }
  },
  methods: {
    teste(){
      console.log('carrego');
    },
    async searchDog(){
      this.dogLoaded = false
      const req = fetch('http://localhost:3000/services/randomdog')
      const res = (await (await req).json()).url

      if(res.split('.')[2] == 'mp4' || res.split('.')[2] == 'gif'){
        return this.searchDog()
      }
      this.dogImg = res
    }
  }
}
</script>