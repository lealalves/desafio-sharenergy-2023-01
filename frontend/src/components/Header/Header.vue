<template>
  <header>
        <nav>
          <img id="img-logo" src="../../assets/logo.jpg" alt="Logo"/>
          <ul id="desktop-menu">
            <Router-link to="/home"><li>Home</li></Router-link>
            <Router-link to="/httpcat"><li>HTTP Cat</li></Router-link>
            <Router-link to="/dogs"><li>Dogs</li></Router-link>
            <Router-link to="/home"><li>Clientes</li></Router-link>
          </ul>  
          <Dropdown id="mobile-menu" :items="header"/>
        </nav>
      </header>
</template>
<style scoped>
#mobile-menu{
  display: none;
}
#img-logo{
  width: min(70px, 12vw);
  border-radius: 10px;
}
header{
  display: flex;
  padding: 15px;
  width: 100%;
  background-color: #111;
  margin-bottom: 30px;
}
nav{
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start
}
ul{
  display: flex;
}
li{
  cursor: pointer;
  padding: 10px 15px 10px 15px;
}


@media (max-width: 768px) {
  nav{
    justify-content: space-between;
  }
  #desktop-menu{
    display: none;
  }
  #mobile-menu{
    display: initial;
  }
}
</style>
<script>
import Dropdown from './Dropdown.vue';

export default {
  name: 'Header',
  components:{
    Dropdown
  },
  data(){
    return {
      header: [
				{
					title: 'Home',
					url: '/home',
					is: 'router-link',
				},
				{
					title: 'HTTP Cat',
					url: '/httpcat',
					is: 'router-link',
				},
				{
					title: 'Dogs',
					url: '/dogs',
					is: 'router-link',
				},
				{
					title: 'Clientes',
					url: '/clientes',
					is: 'router-link',
				},
			]
    }
  }
}
</script>