console.log('\'Allo \'Allo!');

var routes = [
  { path: '/login', component: loginView },
  { path: '/staff', component: staffView },
  {
    path: '/admin', component: adminView,
    children: [
      {
        path: 'staff', component: adminStaffView
      },
      {
        path: 'goods', component: adminGoodsView
      },
      {
        path: 'system', component: adminSystemView
      }
    ]

  }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
var router = new VueRouter({
  routes: routes // （缩写）相当于 routes: routes
});


router.beforeEach(function(to, from, next) {
  if (from.path === '/login') {
    $("body").removeClass('login-bg');
  }
  if (to.path === '/login') {
    $("body").addClass('login-bg');
  }
  next();
})

appState.router = router;

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
var app = new Vue({
  router: router
}).$mount('#app-start');



// TODO 这里需要判断用户是否是登陆 如果是登陆了 就不显示登陆页面

if (!window.location.hash.replace('#/', '')) {
  router.push('/login');

}

// if (!appState.isLogin) {
//   router.push('/admin');
// } else {
//   // debug 用
//   router.push('/staff');
// }
