<template>
	<main>
    <div id="container-home">
      <Header />
      <h1>Home</h1>
      <div id="container-usuarios">
				<div id="search-inputs">
					<Input :value="searchInput" @custom-change="this.searchInput = $event" type="text" placeholder="Pesquisar usuário" />
					<Button @click="search()" text="Pesquisar" />
					<Button @click="clearSearch()" text="Limpar" />
				</div>
        <div id="card" v-for="user in displayedUsers" >
          <img :src="user.picture.large" alt="Profile photo">
          <ul>
            <li>Nome completo: {{ `${user.name.first}  ${user.name.last}` }}</li>
            <li>E-mail: {{ user.email }}</li>
            <li>Username: {{ user.login.username }}</li>
            <li>Idade: {{ user.dob.age }}</li>
          </ul>
        </div>
        <div id="contador-paginas">
          <pagination v-model="page" :records="searchUserList.length > 0 ? searchUserList.length : userList.length" :per-page="5" :options="{texts:{count: 'Mostrando {page} de {pages} páginas'}}"/>
        </div>
      </div>
    </div>
	</main>
</template>

<style scoped>
#container-home{
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
}
#container-usuarios{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 50%;
  color: #f5f5f5;
}
#card{
  display: flex;
  flex-direction: column;
  border: 1px solid #f5f5f5;
  border-radius: 10px;
  width: 70vw;
  padding: 10px;
  margin-bottom: 30px;
}
#card img{
  border: 2px solid #000;
  width: 20vw;
  border-radius: 10px;
}
#search-inputs{
	display: flex;
  width: min(300px, 60vw);
	flex-direction: column;
	margin-bottom: 30px;
}
#search-inputs button{
	margin-bottom: 10px;
}

@media (min-width: 768px){
  #card{
    flex-direction: initial;
  }
  #card img{
    width: 10vw;
  }
  #card ul{
    margin-left: 10px;
  }
}
</style>
<script>
import Header from '../components/Header/Header.vue'
import Input from '../components/Input.vue'
import Button from '../components/Button.vue';

export default {
  components:{
    Input,
		Button,
    Header
  },
  data(){
    return{
      searchInput: '',
      page: 1,
      perPage: 5,
      userList: [],
			searchUserList: []
    }
  },
  computed: {
    displayedUsers(){
      const startIndex = this.perPage * (this.page - 1);
      const endIndex = startIndex + this.perPage;

			if(this.searchUserList.length > 0){
				return this.searchUserList.slice(startIndex, endIndex);
			}

      return this.userList.slice(startIndex, endIndex);
    }
  },
  methods: {
		clearSearch(){
			this.searchInput = ''
			this.search()
		},
		search(){
			let search = this.userList.filter(({email, login, name}) => 
        email.toUpperCase().indexOf(this.searchInput.toUpperCase()) > -1 || 
        login.username.toUpperCase().indexOf(this.searchInput.toUpperCase()) > -1 || 
        name.first.toUpperCase().indexOf(this.searchInput.toUpperCase()) > -1 || 
        name.last.toUpperCase().indexOf(this.searchInput.toUpperCase()) > -1)
			
      this.page = 1
			this.searchUserList = search
		},
    async getUsers(){
      const req = fetch('http://localhost:3000/services/randomuser')
      const res = await (await req).json()

      if(res.error){
        console.log(res);
      }
      
      this.userList = res.results
    }
  },
  mounted(){
    this.getUsers()
  }
}

</script>