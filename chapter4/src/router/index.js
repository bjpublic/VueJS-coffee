import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Foo from '@/components/Foo'
import Bar from '@/components/Bar'
import { AuthRouters } from '@/router/auth'
import { UserRouters } from '@/router/user'
import PostDetailPage from '@/components/PostDetailPage'
import Post from '@/components/Post'

import AppHeader from '@/components/AppHeader'
import AppAside from '@/components/AppAside'
import AppFooter from '@/components/AppFooter'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    ...AuthRouters,
    ...UserRouters,
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        header: AppHeader,
        aside: AppAside,
        default: HelloWorld,
        footer: AppFooter
      },
    },
    {
      path: '/foo',
      name: 'Foo',
      component: Foo
    },
    {
      path: '/bar',
      name: 'Bar',
      component: Bar
    },
    {
      path: '/posts',
      component: Post,
      children: [
        {
          path: '',
        },
        {
          path: 'foo',
          component: Foo
        },
        {
          path: 'bar',
          component: Bar
        }
      ]
    },
    {
      path: '/posts/:postId',
      name: 'PostDetailPage',
      component: PostDetailPage,
      props: true
    },
  ]
});

router.beforeEach((to, from, next) => {
  console.log('라우터의 beforeEach에서 실행되는 to와 from의 값입니다. =>', { to, from });
  next();
});
router.afterEach((to, from) => {
  console.log('라우터의 afterEach에서 실행되는 to와 from의 값입니다. =>', { to, from });
})

export default router
