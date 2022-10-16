import { createRouter, createWebHistory } from 'vue-router'


const routes = [
 
  
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../components/Signup.vue'),
    meta: {
      guest: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue'),
    meta: {
      guest: true
    }
  },
  {
    path: '/books',
    name: 'Librarie',
    component: () => import('../components/Librarie.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/addbook',
    name: 'AddBooks',
    component: () => import('../components/AddBooks.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/editbook/:bookid',
    name: 'EditBook',

    component: () => import('../components/Edit.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/users',
    name: 'Users',

    component: () => import('../components/Users.vue'),
    meta: {
      requiresAuth: true,
     
    }
    
  },
  {
    path: '/allbooks',
    name: 'Gallery',

    component: () => import('../components/Gallery.vue'),
    meta: {
      requiresAuth: true,
     
    },},
    {
      path: '/mybooks',
      name: 'Mybooks',
  
      component: () => import('../components/Mybooks.vue'),
      meta: {
        requiresAuth: true,
       
      },},

  {
    path: '/assigns',
    name: 'assigns',

    component: () => import('../components/Assigns.vue'),
    meta: {
      requiresAuth: true,
        is_admin : true
    }
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
  
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      let user = JSON.parse(localStorage.getItem('user'))
      if (to.matched.some(record => record.meta.is_admin)) {
        if (user.role =='admin') {
          next()
        } else {
          next({ name: 'users' })
        }
      } else {
        next()
      }
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem('jwt') == null) {
      next()
    } else {
      next({ name: 'users' })
    }
  } else {
    next()
  }
})



export default router