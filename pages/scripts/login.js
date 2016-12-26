var loginView = Vue.extend({
  template: $("#login-template").html(),
  mounted: function() {
    $('body').addClass('login-bg');
  },
  destoryed: function() {
    $('body').removeClass('login-bg');
  },
  data: function() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login: function() {
      if (!this.username) {
        return tipsAlert("用户名不能为空");
      }
      if (!this.password) {
        return tipsAlert("密码不能为空");
      }
      // if (this.username === 'admin') {
      //   return appState.router.push('/admin/staff');
      // }
      // appState.router.push('/staff');
      apiForLogin({
        username: this.username,
        password: this.password
      }, function(data) {
        // TODO 这里登陆角色跳转到不同到view
        appState.isLogin = true;
        appState.role = data.role;
        if (data.role === '员工') {
          appState.router.push('/staff');
        } else {
          appState.router.push('/admin/staff');
        }
      });
    }
  }
})

// 2.注册组件，并指定组件的标签，组件的HTML标签为<my-component>
Vue.component('login-view', loginView)

// var loginView = new Vue({
//
//   data: {
//
//   }
// })