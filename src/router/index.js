import Vue from 'vue'
import VueRouter from 'vue-router'
import Alipay from '../pages/alipay.vue'
import Cart from '../pages/cart.vue'
import Detail from '../pages/detail.vue'
import Home from '../pages/home.vue'
import Index from '../pages/index.vue'
import Login from '../pages/login.vue'
import Order from '../pages/order.vue'
import OrderConfirm from '../pages/orderConfirm.vue'
import OrderList from '../pages/orderList.vue'
import OrderPay from '../pages/orderPay.vue'
import Product from '../pages/product.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: 'index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: Index,
      },
      {
        path: '/product/:id',
        name: 'product',
        component: Product,
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: Detail,
      },
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
    children: [
      {
        path: 'list',
        name: 'order-list',
        component: OrderList
      },
      {
        path: 'confirm',
        name: 'order-confirm',
        component: OrderConfirm
      },
      {
        path: 'pay',
        name: 'order-pay',
        component: OrderPay
      },
      {
        path: 'alipay',
        name: 'order-alipay',
        component: Alipay
      }
    ]
  },
]


const router = new VueRouter({
  routes
})

export default router