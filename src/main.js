import './firebase'
import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import { firestorePlugin } from 'vuefire'


Vue.use(Vuetify) 
Vue.use(firestorePlugin)
 
new Vue({
  el: '#app',
  render: h => h(App),
})
