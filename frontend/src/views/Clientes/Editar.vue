<template>
	<main>
    <div id="container-clientes">
      <Header />
      <Button @click="this.$router.push({name: 'clientes'})" text="Voltar"/>
      <Message v-for="msg in displayMsg" :msg="msg.message"/>
      <div id="container-inputs">
        <Input class="cadastro-input" @custom-change="this.nome = $event" type="text" placeholder="Nome" :value="nome" />
        <Input class="cadastro-input" @custom-change="this.email = $event" type="email" placeholder="Email" :value="email" />
        <Input class="cadastro-input" @custom-change="this.telefone = $event" type="tel" placeholder="Telefone" :value="telefone" />
        <Input class="cadastro-input" @custom-change="this.endereco = $event" type="text" placeholder="Endereço" :value="endereco" />
        <Input class="cadastro-input" @custom-change="this.cpf = $event" type="number" placeholder="CPF" :value="cpf" />
        <Button @click="editClient(this.$router.currentRoute.value.params.id)" text="Editar"/>
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
#container-clientes button{
  margin-bottom: 10px;
}
#card-clientes{
  border: 1px solid whitesmoke;
  border-radius: 10px;
  padding: 10px;
  margin-top: 20px;
  width: min(400px,70vw);
}
#container-inputs{
  display: flex;
  width: min(600px, 70vw);
  flex-direction: column;
}
.cadastro-input{
  margin: 30px 0px 30px 0px;
}
</style>
<script>
import Header from '../../components/Header/Header.vue'
import Button from '../../components/Button.vue'
import Input from '../../components/Input.vue'
import Message from '../../components/Message.vue'


export default {
  name: 'Editar',
  components:{
    Header,
    Button,
    Input,
    Message
  },
  data(){
    return {
      displayMsg: [],
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
      console.log(res);

    },
    async editClient(id){
      const data = {
        nome: this.nome,
        email: this.email,
        endereco: this.endereco,
        telefone: this.telefone,
        cpf: this.cpf
      }

      const req = fetch(`http://localhost:3000/client/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      const res = await (await req).json()

      if(res.error){
        return this.displayMsg = res.errors;
      }

      this.$router.push({name: 'clientes', query: {mensagem: res.message}})


    }
  },
  mounted(){
    this.getClient(this.$router.currentRoute.value.params.id);
  }
}
</script>