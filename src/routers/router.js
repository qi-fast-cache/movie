import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Film/Home.vue'
// import TargetH from './views/Film/targetH.vue'
import MovieRouter from '@/routers/Movie/index.js'
import CinemaRouter from '@/routers/Cinema/cinema.js'
import MyMsgRouter from '@/routers/MyMsg/mymsg.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    MovieRouter,
    CinemaRouter,
    MyMsgRouter,
    {
      path: '/*',
      redirect: '/movie'
    }
  ]
})
