import Vue from 'vue'
import App from './App.vue'
import router from './router'
import storageHelper from 'storage-helper';


Vue.config.productionTip = false
 
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!storageHelper.getItem('user-password')) next('/login')
    else next()
  } else next()
})
new Vue({ el: '#app', router, render: h => h(App) })
