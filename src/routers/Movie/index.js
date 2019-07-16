export default {
  path: '/movie',
  name: 'index',
  component: () => import('@/views/Film/index.vue'),
  children: [
    {
      path: 'city',
      name: 'city',
      component: () => import('@/components/Index/City/City.vue')
    },
    {
      path: 'comingsoon',
      name: 'comingsoon',
      component: () => import('@/components/Index/ComingSoon/ComingSoon.vue')
    },
    {
      path: 'cilist',
      name: 'cilist',
      component: () => import('@/components/Index/Cilist/CiList.vue')
    },
    {
      path: 'nowplaying',
      name: 'nowPlaying',
      component: () => import('@/components/Index/NowPlaying/NowPlaying.vue')
    },
    {
      path: '/movie',
      redirect: '/movie/comingsoon'
    }
  ]
}
