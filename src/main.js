import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import {firestorePlugin} from 'vuefire'
import VueRouter from 'vue-router'

// import components
import AddUser from './components/AddUser.vue'
import EditUser from './components/EditUser.vue'
import ListUser from './components/ListUser.vue'
import Home from './components/Home.vue'


Vue.use(Vuetify)
Vue.use(firestorePlugin)
Vue.use(VueRouter)
Vue.config.productionTip = false


const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Add',
    path: '/add',
    component: AddUser
  },
  {
    name: 'Edit',
    path: '/edit/:id',
    component: EditUser
  },
  {
    name: 'List',
    path: '/index',
    component: ListUser
  },
];

const router = new VueRouter({ mode: 'history', routes: routes });

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
