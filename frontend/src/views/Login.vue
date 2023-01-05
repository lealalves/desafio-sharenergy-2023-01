<script setup>


const login = async () => {
  const data = {
    username: this.username,
    password: this.password,
    keepLogin: true
  }

  const req = fetch('http://localhost:3000/auth/login', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })

  const res = await (await req).json()

}

// const test = async () => {
//   const test = await (await fetch('http://localhost:3000', {credentials: 'include'})).json()
//   console.log(test);
// }

</script>

<template>
  <main>
    <div id="container-login">
      <h1 class="login-title">Login</h1>
      <Input @custom-change="this.username = $event" type="email" placeholder="Usuário" />
      <Input @custom-change="this.password = $event" type="password" placeholder="Senha" />
      <div class="div-keeplogin">
        Remember me? <input type="checkbox" name="keeplogin" id="keeplogin">
      </div>
      <Button text="Sign in" />
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
  align-items: center;
  /* background-color: red; */
  width: min(350px, 65vw);
  height: min(350px, 65vh);
}

.div-keeplogin{
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 15px;
}
.div-keeplogin input{
  margin-left: 5px;
}
</style>
<script>
import Button from '../components/Button.vue';
import Input from '../components/Input.vue'

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  components: {
    Input,
    Button
  },
  methods: {
    test() {
      console.log(this.username);
    }
  }
}
</script>