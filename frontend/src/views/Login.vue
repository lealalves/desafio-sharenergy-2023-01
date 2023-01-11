<template>
  <main>
    <Message v-for="msg in displayMsg" :msg="msg.message"/><br>
    <div id="container-login">
      <h1 class="login-title">Login</h1>
      <Input @custom-change="this.username = $event" type="email" placeholder="Usuário" />
      <Input @custom-change="this.password = $event" type="password" placeholder="Senha" />
      <div class="div-keeplogin">
        Remember me? <input v-model="keepLogin" type="checkbox" name="keeplogin" id="keeplogin">
      </div>
      <Button @click="login()" text="Sign in" />
    </div>
  </main>
</template>

<style scoped>
#container-login {
  border: 1px solid whitesmoke;
  border-radius: 10px;
  display: flex;
  padding: 30px;
  flex-direction: column;
  justify-content: center;
  width: min(350px, 65vw);
  height: min(350px, 65vh);
}

.div-keeplogin{
  display: flex;
  width: 11.5em;
  align-items: center;
  margin-bottom: 15px;
}
.div-keeplogin input{
  margin-left: 5px;
  border: none;
}
</style>
<script>
import Button from '../components/Button.vue';
import Input from '../components/Input.vue'
import Message from '../components/Message.vue'

export default {
  data() {
    return {
      displayMsg: [],
      username: '', 
      password: '',
      keepLogin: false
    }
  },
  components: {
    Input,
    Button,
    Message
  },
  methods: {
   async login() {
      const data = {
        username: this.username,
        password: this.password,
        keepLogin: this.keepLogin
      }

      const req = fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      const res = await (await req).json()

      if(res.error){
        return this.displayMsg = res.errors;
      }

      this.$router.push({name: 'home'})

    }
  }
}
</script>