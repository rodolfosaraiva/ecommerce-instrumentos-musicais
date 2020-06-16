import Vue from 'vue'
import Router from 'vue-router'
import { scrollBehavior } from '~/utils'

Vue.use(Router)

const Home = () => import('~/pages/home').then(m => m.default || m)
const Produto = () => import('~/pages/produto').then(m => m.default || m)
const Carrinho = () => import('~/pages/cart').then(m => m.default || m)
const CheckoutConcluido = () => import('~/pages/checkout/concluido').then(m => m.default || m)

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/produto', name: 'produto', component: Produto },
  { path: '/carrinho', name: 'carrinho', component: Carrinho },
  { path: '/pedido/1254/concluido', name: 'checkoutConcluido', component: CheckoutConcluido }
]

export function createRouter () {
  return new Router({
    routes,
    scrollBehavior,
    mode: 'history'
  })
}
