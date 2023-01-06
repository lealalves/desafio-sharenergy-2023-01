<template>
  <header>
        <nav>
          <img id="img-logo" src="../../assets/logo.jpg" alt="Logo"/>
          <ul id="desktop-menu">
            <li>Home</li>
            <li>HTTP Cat</li>
            <li>Dogs</li>
            <li>Clientes</li>
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
  border: 1px solid #000;
  width: min(70px, 12vw);
  border-radius: 10px;
}
header{
  display: flex;
  padding: 15px;
  width: 100%;
  background-color: tomato;
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
					url: '/home/httpcat',
					is: 'router-link',
				},
				{
					title: 'Dogs',
					url: '/home',
					is: 'router-link',
				},
				{
					title: 'Clientes',
					url: '/home',
					is: 'router-link',
				},
			]
    }
  }
}
</script>