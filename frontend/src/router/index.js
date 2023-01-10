import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Cat from '../views/Cat.vue'
import Dog from '../views/Dog.vue'
import Clientes from '../views/Clientes/Clientes.vue'
import Cadastro from '../views/Clientes/Cadastro.vue'
import Editar from '../views/Clientes/Editar.vue'
import Informacao from '../views/Clientes/Informacao.vue'

let keepLogin = false

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      beforeEnter: (to, from) => {
        if(keepLogin){
          return {name: 'home'}
        };
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/httpcat',
      name: 'httpcat',
      component: Cat
    },
    {
      path: '/dogs',
      name: 'dogs',
      component: Dog
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: Clientes,
    },
    {
      path: '/clientes/cadastro',
      name: 'clientesCadastro',
      component: Cadastro
    },
    {
      path: '/clientes/editar/:id',
      name: 'clientesEditar',
      component: Editar,
    },
    {
      path: '/clientes/:id',
      name: 'clienteInformacao',
      component: Informacao,
    }
  ]
})

router.beforeEach(async (to, from) => {
  const req = fetch('http://localhost:3000', {
    credentials: 'include'
  })  
  const res = await (await req).json()

  if(res.error && to.path !== '/'){
    return {path: '/'}
  }

  keepLogin = res.keepLogin

})

export default router
