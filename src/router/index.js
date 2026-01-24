import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFound from '@/views/NotFoundView.vue'

import AdminLayout from '@/views/admin/AdminLayout.vue'
import AdminHome from '@/views/admin/AdminHome.vue'
import AdminUsers from '@/views/admin/AdminUsers.vue'
import AdminUserDetail from '@/views/admin/AdminUserDetail.vue'
import AdminSettings from '@/views/admin/AdminSettings.vue'

import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminLayout,
      children: [
        {
          path: '',
          name: 'AdminHome',
          component: AdminHome,
        },
        {
          path: 'users',
          name: 'AdminUsers',
          component: AdminUsers,
        },
        {
          path: 'settings',
          name: 'AdminSettings',
          component: AdminSettings,
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/CartView.vue'),
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('@/views/ProductView.vue'),
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/UserView.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/qa',
      name: 'q&a',
      component: () => import('@/views/QAView.vue'),
    },
    {
      path: '/shop/:id',
      name: 'shopDetail',
      component: () => import('@/views/ShopDetailView.vue'),
      props: true,
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/LoginView.vue'),
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFound,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // 始終滾到最上面
    return { top: 0 }
  },
})

// 路由守衛：沒登入就導去 login
router.beforeEach((to) => {
  const userStore = useUserStore()
  if (to.meta.requiresAuth && !userStore.isLogin) {
    return { path: '/login', query: { redirect: to.fullPath } }
  }
})

export default router
