import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import AlbumInfo from '@/components/infos/AlbumInfo'
import Artist from '@/views/Artist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/artist/:artistName',
      name: 'artist',
      component: Artist,
      meta: {
        title: 'Artist'
      },
      children: [
        {
          path: ':albumName',
          component: AlbumInfo
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  mode: 'history'
})
