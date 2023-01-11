<template>
	<main>
    <div id="container-clientes">
      <Header />
      <h1>Clientes</h1>
      <Message :msg="displayMsg"/>
      <RouterLink to="/clientes/cadastro"><Button text="Cadastrar cliente"/></RouterLink>
      <p>Clientes já cadastrados:</p>
      <div v-if="clientList.length > 0" v-for="client in clientList" id="card-clientes">
        <RouterLink :to="`/clientes/${client._id}`"><h2>{{ client.nome }}</h2></RouterLink>
        <h4>{{ client.email }}</h4>
        <Button @click="deleteClient(client._id)" text="Excluir"/>
        <RouterLink :to="`/clientes/editar/${client._id}`"><Button text="Editar"/></RouterLink>
      </div>
      <p v-else>Nenhum cliente cadastrado.</p>
    </div>
	</main>
</template>
<style scoped>
#container-clientes{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
#container-clientes p{
  margin-top: 40px
}
#container-clientes button{
  margin-top: 10px;
}
#card-clientes{
  border: 1px solid whitesmoke;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  width: min(400px,85vw);
}
#card-clientes button{
  margin: 20px 20px 10px 0px;
}

</style>
<script>
import Header from '../../components/Header/Header.vue'
import Button from '../../components/Button.vue'
import Message from '../../components/Message.vue'

export default {
  name: 'Clientes',
  components:{
    Header,
    Button,
    Message
  },
  data(){
    return {
      clientList: [],
      displayMsg: this.$router.currentRoute.value?.query.mensagem
    }
  },
  methods: {
    async deleteClient(id){
      const req = fetch(`http://localhost:3000/client/${id}`, {
        method: 'DELETE'
      })
      const res = await (await req).json()

      if(res.error){
        return this.displayMsg.push({error: res.message});
      }

      this.displayMsg = res.message;
        setTimeout(() => {
          this.displayMsg = ''
        }, 2000)
      
      this.getClients()
    },
    async getClients(){
      const req = fetch('http://localhost:3000/client')
      const res = await (await req).json()

      if(res.error){
        return this.displayMsg.push({error: res.message});
      }

      this.clientList = res.result
    }
  },
  mounted(){
    this.getClients()
  }
}
</script>