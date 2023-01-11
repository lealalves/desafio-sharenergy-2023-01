<template>
	<main>
    <div id="container-clientes">
      <Header />
      <Button @click="this.$router.push({name: 'clientes'})" text="Voltar"/>
      <div id="card-clientes">
        <h1>{{ nome }}</h1>
        <h3>{{ email }}</h3>
        <div id="info-cliente">
          <span><h4 class="info-name">CPF: </h4><h4>{{ cpf }}</h4></span>
          <span><h4 class="info-name">Telefone: </h4><h4>{{ telefone }}</h4></span>
          <span><h4 class="info-name">Endereço: </h4><h4>{{ endereco }}</h4></span>        
        </div>
        <RouterLink :to="`/clientes/editar/${id}`"><Button text="Editar"/></RouterLink>
      </div>
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
#card-clientes{
  border: 1px solid whitesmoke;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  width: min(600px,95vw);
}
#card-clientes button{
  width: 100%;
  margin-top: 10px;
}
#card-clientes span{
  display: flex;
  flex-wrap: wrap;
  max-width: 50%;
}
#card-clientes h1{
  color: #fff;
}
#info-cliente{
  margin-top: 20px;
}
.info-name{
  color: #fff;
  margin-right: 5px;
}
</style>
<script>
import Header from '../../components/Header/Header.vue'
import Button from '../../components/Button.vue'

export default {
  name: 'Informações',
  components:{
    Header,
    Button
  },
  data(){
    return {
      id: '',
      email: '',
      nome: '',
      endereco: '',
      cpf: '',
      telefone: ''
    }
  },
  methods: {
    async getClient(id){
      const req = fetch(`http://localhost:3000/client/${id}`)
      const res = await (await req).json()
      
      if(res.error){
        return console.log(res);
      }

      this.email = res.result.email
      this.nome = res.result.nome
      this.endereco = res.result.endereco
      this.cpf = res.result.cpf
      this.telefone = res.result.telefone
      this.id = res.result._id
    },
  },
  mounted(){
    this.getClient(this.$router.currentRoute.value.params.id);
  }
}
</script>