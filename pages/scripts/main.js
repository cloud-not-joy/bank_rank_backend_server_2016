"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultDatas = _defineProperty({
  '/login': {
    "user_id": 3,
    "username": "admin",
    "role": "员工",
    "accumulate": null,
    "consume": null
  },
  '/user/info': {
    currentMonth: '十月',
    userInfo: {
      name: '张三',
      id: 123,
      department: '市场部',
      role: '员工',
      quota: 100,
      previousDeposit: 200,
      currentDeposit: 1000,
      cumulativeRank: 230,
      exchangedRank: 100,
      remainRank: 130
    }
  },
  '/goods/list': {
    totalPages: 6,
    lists: [{
      id: 0,
      imgUrl: 'http://imgsize.ph.126.net/?imgurl=http://img1.ph.126.net/pKa8Kttj0AsOd7TijP9CRA==/6632036435442880504.jpg_188x188x1.jpg',
      name: '吹风机一台',
      rank: 400
    }, {
      id: 1,
      imgUrl: 'http://imgsize.ph.126.net/?imgurl=http://img1.ph.126.net/pKa8Kttj0AsOd7TijP9CRA==/6632036435442880504.jpg_188x188x1.jpg',
      name: '榨汁机',
      rank: 1000
    }, {
      id: 2,
      imgUrl: 'http://imgsize.ph.126.net/?imgurl=http://img1.ph.126.net/pKa8Kttj0AsOd7TijP9CRA==/6632036435442880504.jpg_188x188x1.jpg',
      name: '电视机',
      rank: 2000
    }, {
      id: 3,
      imgUrl: 'http://imgsize.ph.126.net/?imgurl=http://img1.ph.126.net/pKa8Kttj0AsOd7TijP9CRA==/6632036435442880504.jpg_188x188x1.jpg',
      name: '空调',
      rank: 4000
    }, {
      id: 3,
      imgUrl: 'http://imgsize.ph.126.net/?imgurl=http://img1.ph.126.net/pKa8Kttj0AsOd7TijP9CRA==/6632036435442880504.jpg_188x188x1.jpg',
      name: '空调',
      rank: 4000
    }, {
      id: 3,
      imgUrl: 'http://imgsize.ph.126.net/?imgurl=http://img1.ph.126.net/pKa8Kttj0AsOd7TijP9CRA==/6632036435442880504.jpg_188x188x1.jpg',
      name: '空调',
      rank: 4000
    }, {
      id: 3,
      imgUrl: 'http://imgsize.ph.126.net/?imgurl=http://img1.ph.126.net/H-G1WkheNeZAPgQtCW9EVw==/6631783547771508070.jpg_188x188x1.jpg',
      name: '空调',
      rank: 4000
    }, {
      id: 3,
      imgUrl: 'http://imgsize.ph.126.net/?imgurl=http://img1.ph.126.net/YO-FLITAd7LOJ9xc561hUA==/6631867110652867849.jpg_230x230x1x95.jpg',
      name: '空调',
      rank: 4000
    }, {
      id: 3,
      imgUrl: 'http://imgsize.ph.126.net/?imgurl=http://img1.ph.126.net/ANBTGBiBCvJrZBuBdI9WVg==/6631902295024986172.jpg_230x230x1x95.jpg',
      name: '空调',
      rank: 4000
    }, {
      id: 3,
      imgUrl: 'http://imgsize.ph.126.net/?imgurl=http://img0.ph.126.net/QilZpaHhnNhRo_yIy8OsSQ==/6631820931167577129.jpg_230x230x1x95.jpg',
      name: '空调',
      rank: 4000
    }]
  },
  'goodsArray': [{
    id: 0,
    imgUrl: 'http://imgsize.ph.126.net/?imgurl=http://img1.ph.126.net/pKa8Kttj0AsOd7TijP9CRA==/6632036435442880504.jpg_188x188x1.jpg',
    title: '吹风机一台',
    rank: 400
  }, {
    id: 1,
    imgUrl: 'http://imgsize.ph.126.net/?imgurl=http://img1.ph.126.net/pKa8Kttj0AsOd7TijP9CRA==/6632036435442880504.jpg_188x188x1.jpg',
    title: '榨汁机',
    rank: 1000
  }, {
    id: 2,
    imgUrl: 'http://imgsize.ph.126.net/?imgurl=http://img1.ph.126.net/pKa8Kttj0AsOd7TijP9CRA==/6632036435442880504.jpg_188x188x1.jpg',
    title: '电视机',
    rank: 2000
  }, {
    id: 3,
    imgUrl: 'http://imgsize.ph.126.net/?imgurl=http://img1.ph.126.net/pKa8Kttj0AsOd7TijP9CRA==/6632036435442880504.jpg_188x188x1.jpg',
    title: '空调',
    rank: 4000
  }, {
    id: 3,
    imgUrl: 'http://imgsize.ph.126.net/?imgurl=http://img1.ph.126.net/pKa8Kttj0AsOd7TijP9CRA==/6632036435442880504.jpg_188x188x1.jpg',
    title: '空调',
    rank: 4000
  }, {
    id: 3,
    imgUrl: 'http://imgsize.ph.126.net/?imgurl=http://img1.ph.126.net/pKa8Kttj0AsOd7TijP9CRA==/6632036435442880504.jpg_188x188x1.jpg',
    title: '空调',
    rank: 4000
  }],
  staffExchangeRecards: [{
    name: '洗衣机',
    id: 1234,
    rank: 2000,
    isConfirm: true
  }, {
    name: '电视机',
    id: 1234,
    rank: 1000,
    isConfirm: false
  }, {
    name: '手机',
    id: 1234,
    rank: 400,
    isConfirm: true
  }],
  staffs: [{
    name: '张三',
    id: 123,
    department: '市场部',
    role: '员工',
    quota: 100,
    previousDeposit: 200,
    currentDeposit: 1000,
    cumulativeRank: 230,
    exchangedRank: 100,
    remainRank: 130,
    convertibleGoods: '冰箱 洗发露'
  }, {
    name: '美国队长',
    id: 1234,
    department: '市场部',
    role: '员工',
    quota: 100,
    previousDeposit: 200,
    currentDeposit: 1000,
    cumulativeRank: 2130,
    exchangedRank: 100,
    remainRank: 2030,
    convertibleGoods: '冰箱 洗发露'
  }],
  exchangeHistoryList: [{
    name: '微波炉',
    rank: 1000
  }, {
    name: '榨汁机',
    rank: 2000
  }, {
    name: '冰箱',
    rank: 3000
  }]
}, "goodsArray", [{
  id: 12313,
  name: '菜籽油',
  rank: '100',
  image: 'http://imgsize.ph.126.net/?imgurl=http://img0.ph.126.net/90nkdAyVBSoD9qRxzsvBrg==/6631984758396348885.jpg_188x188x1.jpg'
}, {
  id: 12314,
  name: '电视机',
  rank: '2000',
  image: 'http://imgsize.ph.126.net/?imgurl=http://img0.ph.126.net/90nkdAyVBSoD9qRxzsvBrg==/6631984758396348885.jpg_188x188x1.jpg'
}, {
  id: 12315,
  name: '笔记本',
  rank: '2000',
  image: 'http://imgsize.ph.126.net/?imgurl=http://img0.ph.126.net/90nkdAyVBSoD9qRxzsvBrg==/6631984758396348885.jpg_188x188x1.jpg'
}]);
//# sourceMappingURL=default.js.map

'use strict';

var appState = {
  router: null,
  isLogin: true,
  role: ''
};
//# sourceMappingURL=state.js.map

"use strict";

var domain = '../index.php';

if (window.location.href.indexOf("local-rank") !== -1) {
  domain = 'http://' + window.location.hostname + ':7999';
}

var isDemo = false;
var queryArray = window.location.href.split('?');
if (queryArray.length > 1) {
  if (queryArray[1].indexOf('isDemo') !== -1) {
    isDemo = true;
  }
}

$(document).on("ajaxSend", function () {
  $("#loading-div").show();
}).on("ajaxComplete", function () {
  $("#loading-div").hide();
});

function errorAlert(err) {
  alert(err);
}

function tipsAlert(tips) {
  alert(tips);
}

var makeGet = function makeGet(url) {
  return function (data, callback) {
    if (isDemo) {
      return callback(defaultDatas[url]);
    }
    $.get(domain + url, data).done(function (data) {
      paseJson(data, callback);
    }).fail(function (err) {
      errorAlert(err);
    });
  };
};

var makePost = function makePost(url) {
  return function (data, callback) {
    if (isDemo) {
      return callback(defaultDatas[url]);
    }
    $.post(domain + url, data).done(function (data) {
      paseJson(data, callback);
    }).fail(function (err) {
      errorAlert(err);
    });
  };
};

var paseJson = function paseJson(response, callback) {
  if (typeof response === 'string') {
    response = JSON.parse(response);
  }
  if (response.code != 1) {
    return errorAlert('服务器出错' + response.msg);
  }
  callback(response.data);
};

// API 定义

var apiForLogin = makePost('/login/tologin');
var apiUserInfo = makeGet('/user/info');
var apiGoodsList = makeGet('/goods/list');
var apiForMemeberIndex = makeGet('/memeber');
//# sourceMappingURL=data.js.map

'use strict';

var loginView = Vue.extend({
  template: $("#login-template").html(),
  mounted: function mounted() {
    $('body').addClass('login-bg');
  },
  destoryed: function destoryed() {
    $('body').removeClass('login-bg');
  },
  data: function data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login: function login() {
      if (!this.username) {
        return tipsAlert("用户名不能为空");
      }
      if (!this.password) {
        return tipsAlert("密码不能为空");
      }
      if (this.username === 'admin') {
        return appState.router.push('/admin/staff');
      }
      // appState.router.push('/staff');
      apiForLogin({
        username: this.username,
        password: this.password
      }, function (data) {
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
});

// 2.注册组件，并指定组件的标签，组件的HTML标签为<my-component>
Vue.component('login-view', loginView);

// var loginView = new Vue({
//
//   data: {
//
//   }
// })
//# sourceMappingURL=login.js.map

'use strict';

var staffView = Vue.extend({
  template: $("#staff-template").html(),
  data: function data() {
    return {
      currentMonth: '',
      staffInfo: {
        name: '',
        id: '',
        department: '',
        role: '',
        quota: '',
        previousDeposit: '',
        currentDeposit: '',
        cumulativeRank: '',
        exchangedRank: '',
        remainRank: ''
      },
      currentGoods: {},
      goodsArray: [],
      exchangeHistoryList: [],
      pageData: {
        cur: 1,
        all: 1
      },
      currentPage: 1
    };
  },
  mounted: function mounted() {
    var vm = this;
    this.getGoodsLists();
    apiUserInfo({}, function (response) {
      vm.currentMonth = response.currentMonth;
      vm.staffInfo = response.userInfo;
    });
    // this.goodsArray = defaultDatas.goodsArray;
  },
  components: {
    'vue-nav': Vnav
  },
  methods: {
    getGoodsLists: function getGoodsLists() {
      var vm = this;
      apiGoodsList({ page: vm.currentPage }, function (response) {
        vm.pageData.all = response.totalPages;
        vm.goodsArray = response.lists;
      });
    },
    listenStaffPage: function listenStaffPage(page) {
      this.currentPage = page;
      this.getGoodsLists();
    },
    exchange: function exchange() {
      // TODO 获取当前选中的商品信息
      $(".exchange-confirm").modal('show');
    },
    sureConfirm: function sureConfirm() {
      $(".exchange-ok").modal('show');
    },
    closeConfirm: function closeConfirm() {
      $(".exchange-modal").modal('hide');
    },
    showExchangeHistory: function showExchangeHistory() {
      $(".exchange-history").modal('show');
      this.exchangeHistoryList = defaultDatas.exchangeHistoryList;
    },
    logoff: function logoff() {
      appState.router.push('/login');
    }
  }
});

// 2.注册组件，并指定组件的标签，组件的HTML标签为<my-component>
Vue.component('staff-view', loginView);

// var loginView = new Vue({
//
//   data: {
//
//   }
// })
//# sourceMappingURL=staff.js.map

"use strict";

var adminView = Vue.extend({
  template: $("#admin-template").html(),
  mounted: function mounted() {
    $(".admin-left-menu").on('click', function (event) {
      $('.admin-left-menu li').removeClass('active');
      $(event.target).addClass('active');
    });
  },
  destoryed: function destoryed() {},
  data: function data() {
    return {
      isActive: ''
    };
  },
  methods: {
    isActiveName: function isActiveName(name) {
      this.isActive = name;
    },
    logoff: function logoff() {
      appState.router.push('/login');
    }
  }
});

var adminStaffView = Vue.extend({
  template: $("#admin-staff-template").html(),
  data: function data() {
    return {
      test: 'staff',
      newStaff: {
        name: '',
        id: '',
        department: '',
        role: '',
        quota: '',
        previousDeposit: '',
        currentDeposit: '',
        // cumulativeRank: '',
        // exchangedRank: '',
        // remainRank: '',
        password: ''
      },
      staffs: [],
      isShowAddStaff: false,
      isAddStaff: false,
      isEditStaff: false,
      currentStaffExchangeRecard: [],
      pageData: {
        cur: 1,
        all: 8
      }
    };
  },
  components: {
    'vue-nav': Vnav
  },
  methods: {
    listenPage: function listenPage(page) {
      console.log('你点击了' + page + '页');
    },
    showAddStaff: function showAddStaff() {
      this.isShowAddStaff = true;
      this.isAddStaff = true;
    },
    addStaff: function addStaff() {
      var newArray = [].concat(this.staffs);
      newArray.push($.extend({}, this.newStaff));
      this.staffs = newArray;

      this.isShowAddStaff = false;
      this.isAddStaff = false;

      for (var _key in this.newStaff) {
        this.newStaff[_key] = '';
      }
    },
    // 显示员工兑换记录
    showOneStaffExchange: function showOneStaffExchange(itemStaff) {
      $(".staff-exchange-history").modal('show');

      // TODO 这里需要请求数据
      this.currentStaffExchangeRecard = defaultDatas.staffExchangeRecards;
    },
    // 确认兑换
    confirmExchange: function confirmExchange(item) {
      item.isConfirm = true;
    },
    closeConfirm: function closeConfirm() {
      $(".staff-exchange-history").modal('hide');
    },
    showEditStaff: function showEditStaff(staff) {
      this.isShowAddStaff = true;
      this.isEditStaff = true;
      this.newStaff = staff;
    },
    editStaff: function editStaff() {
      this.newStaff = {
        name: '',
        id: '',
        department: '',
        role: '',
        quota: '',
        previousDeposit: '',
        currentDeposit: '',
        // cumulativeRank: '',
        // exchangedRank: '',
        // remainRank: '',
        password: ''
      };
      // TODO 发送请求到服务器 才保存成功
      this.isShowAddStaff = false;
      this.isEditStaff = false;
    },
    delStaff: function delStaff(staff) {
      var _array = [].concat(this.staffs);
      _array.forEach(function (item, index) {
        if (item.id === staff.id) {
          _array.splice(index, 1);
        }
      });
      this.staffs = _array;
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当钩子执行前，组件实例还没被创建
    next(function (vm) {
      vm.staffs = defaultDatas.staffs;
    });
  }
});

var adminGoodsView = Vue.extend({
  template: $("#admin-goods-template").html(),
  data: function data() {
    return {
      newGoods: {
        id: '',
        name: '',
        rank: '',
        image: 'http://imgsize.ph.126.net/?imgurl=http://img0.ph.126.net/90nkdAyVBSoD9qRxzsvBrg==/6631984758396348885.jpg_188x188x1.jpg'
      },
      goodsArray: [],
      isShowAddGoods: false,
      isAddGoods: false,
      isEditGoods: false,
      pageData: {
        cur: 1,
        all: 8
      }
    };
  },
  methods: {
    showAddGoods: function showAddGoods() {
      this.isShowAddGoods = true;
      this.isAddGoods = true;
    },
    addGoods: function addGoods() {
      var newArray = [].concat(this.goodsArray);
      newArray.push($.extend({}, this.newGoods, true));
      this.goodsArray = newArray;
      this.isShowAddGoods = false;
      this.isAddGoods = false;

      for (var _key in this.newGoods) {
        this.newGoods[_key] = '';
      }
    },
    showEditGoods: function showEditGoods(goodsItem) {
      this.isShowAddGoods = true;
      this.isEditGoods = true;
      this.newGoods = goodsItem;
    },
    editGoods: function editGoods() {
      this.newGoods = {
        id: '',
        name: '',
        rank: '',
        image: 'http://imgsize.ph.126.net/?imgurl=http://img0.ph.126.net/90nkdAyVBSoD9qRxzsvBrg==/6631984758396348885.jpg_188x188x1.jpg'
      }, this.isShowAddGoods = false;
      this.isEditGoods = false;
    },
    delGoods: function delGoods(goodsItem) {
      var newArray = [].concat(this.goodsArray);
      newArray.forEach(function (item, index) {
        if (item.id == goodsItem.id) {
          newArray.splice(index, 1);
        }
      });
      this.goodsArray = newArray;
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当钩子执行前，组件实例还没被创建
    next(function (vm) {
      vm.goodsArray = defaultDatas.goodsArray;
    });
  }
});

var adminSystemView = Vue.extend({
  template: $("#admin-system-template").html(),
  data: function data() {
    return {
      isShowSystem: true,
      isShowAddAdmin: false,
      isShowEditPassword: false
    };
  },
  methods: {
    showEditPassword: function showEditPassword() {
      this.isShowSystem = false;
      this.isShowEditPassword = true;
    },
    showAddAdmin: function showAddAdmin() {
      this.isShowSystem = false;
      this.isShowAddAdmin = true;
    },
    showSystem: function showSystem() {
      this.isShowSystem = true;
      this.isShowAddAdmin = false;
      this.isShowEditPassword = false;
    }
  }
});

// 2.注册组件，并指定组件的标签，组件的HTML标签为<my-component>
Vue.component('admin-view', adminView);
Vue.component('admin-staff', adminStaffView);
Vue.component('admin-goods', adminGoodsView);
Vue.component('admin-system', adminStaffView);
//# sourceMappingURL=admin.js.map

'use strict';

console.log('\'Allo \'Allo!');

var routes = [{ path: '/login', component: loginView }, { path: '/staff', component: staffView }, {
  path: '/admin', component: adminView,
  children: [{
    path: 'staff', component: adminStaffView
  }, {
    path: 'goods', component: adminGoodsView
  }, {
    path: 'system', component: adminSystemView
  }]

}];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
var router = new VueRouter({
  routes: routes // （缩写）相当于 routes: routes
});

router.beforeEach(function (to, from, next) {
  if (from.path === '/login') {
    $("body").removeClass('login-bg');
  }
  if (to.path === '/login') {
    $("body").addClass('login-bg');
  }
  next();
});

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
//# sourceMappingURL=main.js.map
