import { createRouter, createWebHashHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('../views/main/main.vue')
  },
]

// 创建 router 对象
const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to)=>{
  页面跳转shi
  if(to.path !== '/login'){

  }
})

export default router
