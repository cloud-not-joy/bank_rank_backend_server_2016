var adminView = Vue.extend({
  template: $("#admin-template").html(),
  mounted: function() {
    $(".admin-left-menu").on('click', function(event) {
      $('.admin-left-menu li').removeClass('active');
      $(event.target).addClass('active');
    });
  },
  destoryed: function() {

  },
  data: function() {
    return {
      isActive: ''
    }
  },
  methods: {
    isActiveName: function(name) {
      this.isActive = name;
    },
    logoff: function() {
      appState.router.push('/login');
    }
  }
});


var adminStaffView = Vue.extend({
  template: $("#admin-staff-template").html(),
  data: function() {
    return {
      test: 'staff',
      newStaff: {
        staff_name: '',
        staff_id: '',
        staff_number: '',
        department: '',
        staff_role: '',
        standard: '',
        previous_deposit: '',
        current_deposit: '',
        accumulate: '',
        consume: '',
        current_integral: '',
        password: ''
      },
      staffs: [],
      isShowAddStaff: false,
      isAddStaff: false,
      isEditStaff: false,
      currentStaffExchangeRecard: [],
      pageData: {
        cur: 1,
        all: 1
      }
    }
  },
  components:{
    'vue-nav': Vnav
  },
  methods: {
    listenPage:function(page){
      this.pageData.cur = page;
      this.getStaffs(page, 10);
      console.log('你点击了' + page + '页');
    },
    showAddStaff: function() {
      this.isShowAddStaff = true;
      this.isAddStaff = true;
    },
    addStaff: function() {

      apiStaffAdd(this.newStaff, function(reponse) {
        var newArray = [].concat(this.staffs);
        newArray.push($.extend({}, this.newStaff));
        this.staffs = newArray;

        this.isShowAddStaff = false;
        this.isAddStaff = false;

        for (var _key in this.newStaff) {
          this.newStaff[_key] = '';
        }
      });
    },
    // 显示员工兑换记录
    showOneStaffExchange: function(itemStaff) {
      $(".staff-exchange-history").modal('show');
      
      // TODO 这里需要请求数据
      this.currentStaffExchangeRecard = defaultDatas.staffExchangeRecards;
    },
    // 确认兑换
    confirmExchange: function(item) {
      item.isConfirm = true;
    },
    closeConfirm: function() {
      $(".staff-exchange-history").modal('hide');
    },
    showEditStaff: function(staff) {
      this.isShowAddStaff = true;
      this.isEditStaff = true;
      this.newStaff = staff;
    },
    editStaff: function() {
      this.clearStaff();
      // TODO 发送请求到服务器 才保存成功
      this.isShowAddStaff = false;
      this.isEditStaff = false;
    },
    clearStaff: function() {
      this.newStaff = {
        staff_name: '',
        staff_id: '',
        staff_number: '',
        department: '',
        staff_role: '',
        standard: '',
        previous_deposit: '',
        current_deposit: '',
        accumulate: '',
        consume: '',
        current_integral: '',
        password: ''
      }
    },
    delStaff: function(staff) {
      var _array = [].concat(this.staffs);
      _array.forEach(function(item, index) {
        if (item.id === staff.id) {
          _array.splice(index, 1);
        }
      });
      this.staffs = _array;
    },
    getStaffs: function(page, pageSize) {
      var self = this;
      apiStaffList({
        page: page,
        page_size: pageSize
      }, function(response) {
        self.staffs = response.staffs;
        self.pageData.all = Math.floor(response.count / 10) + 1;
      });
    },
    closeEditStaff: function() {
      this.isShowAddStaff = false;
      this.isAddStaff = false;
      this.isEditStaff = false;
      this.clearStaff();
    }
  },
  beforeRouteEnter: function (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当钩子执行前，组件实例还没被创建
    next(function(vm) {

      //vm.staffs = defaultDatas.staffs;
      vm.getStaffs(vm.pageData.cur, 10);
    });
  },
});

var adminGoodsView = Vue.extend({
  template: $("#admin-goods-template").html(),
  data: function() {
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
    }
  },
  methods: {
    showAddGoods: function() {
      this.isShowAddGoods = true;
      this.isAddGoods = true;
    },
    addGoods: function() {
      var newArray = [].concat(this.goodsArray);
      newArray.push($.extend({}, this.newGoods, true));
      this.goodsArray = newArray;
      this.isShowAddGoods = false;
      this.isAddGoods = false;

      for (var _key in this.newGoods) {
        this.newGoods[_key] = '';
      }
    },
    showEditGoods: function(goodsItem) {
      this.isShowAddGoods = true;
      this.isEditGoods = true;
      this.newGoods = goodsItem;
    },
    editGoods: function() {
      this.newGoods = {
          id: '',
          name: '',
          rank: '',
          image: 'http://imgsize.ph.126.net/?imgurl=http://img0.ph.126.net/90nkdAyVBSoD9qRxzsvBrg==/6631984758396348885.jpg_188x188x1.jpg'
      },

      this.isShowAddGoods = false;
      this.isEditGoods = false;
    },
    delGoods: function(goodsItem) {
      var newArray = [].concat(this.goodsArray);
      newArray.forEach(function(item, index) {
        if (item.id == goodsItem.id) {
          newArray.splice(index, 1);
        }
      });
      this.goodsArray = newArray;
    }
  },
  beforeRouteEnter: function (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当钩子执行前，组件实例还没被创建
    next(function(vm) {
      vm.goodsArray = defaultDatas.goodsArray;
    });
  }
});

var adminSystemView = Vue.extend({
  template: $("#admin-system-template").html(),
  data: function() {
    return {
      isShowSystem: true,
      isShowAddAdmin: false,
      isShowEditPassword: false,
    }
  },
  methods: {
    showEditPassword: function() {
      this.isShowSystem = false;
      this.isShowEditPassword = true;
    },
    showAddAdmin: function() {
      this.isShowSystem = false;
      this.isShowAddAdmin = true;
    },
    showSystem: function() {
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