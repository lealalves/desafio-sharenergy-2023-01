<template>
	<main>
    <div id="container-clientes">
      <Header />
      <Button @click="this.$router.push({name: 'clientes'})" text="Voltar"/>
      <p>Cadastre um cliente.</p>
      <Message v-for="msg in displayMsg" :msg="msg.message"/>
      <div id="container-inputs">
      <Input class="cadastro-input" @custom-change="this.nome = $event" type="text" placeholder="Nome" />
      <Input class="cadastro-input" @custom-change="this.email = $event" type="email" placeholder="Email" />
      <Input class="cadastro-input" @custom-change="this.telefone = $event" type="tel" placeholder="Telefone" />
      <Input class="cadastro-input" @custom-change="this.endereco = $event" type="text" placeholder="Endereço" />
      <Input class="cadastro-input" @custom-change="this.cpf = $event" type="number" placeholder="CPF" />
      <Button @click="cadastrar()" text="Cadastrar"/>
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
  name: 'Clientes',
  components:{
    Header,
    Button,
    Input,
    Message
  },
  data() {
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
    async cadastrar(){
      const data = {
        nome: this.nome,
        email: this.email,
        endereco: this.endereco,
        cpf: this.cpf,
        telefone: this.telefone
      }

      const req = fetch('http://localhost:3000/client/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      
      const res = await (await req).json()

      if(res.error){
        return this.displayMsg = res.errors;
      }

      this.$router.push({name: 'clientes', query: {mensagem: res.message}})

    }
  }
}
</script>