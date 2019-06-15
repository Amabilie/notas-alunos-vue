import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Alunos from '@/components/Alunos'
import Provas from '@/components/Provas'
import Materias from '@/components/Materias'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/alunos',
      name: 'Alunos',
      component: Alunos
    },
    {
      path: '/provas',
      name: 'Provas',
      component: Provas
    },
    {
      path: '/materias',
      name: 'Materias',
      component: Materias
    }
  ]
})
