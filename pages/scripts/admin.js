var adminView = Vue.extend({
  template: $("#admin-template").html(),
  beforeRouteEnter: function (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当钩子执行前，组件实例还没被创建
    next(function(vm) {
      vm.username = window.localStorage.getItem('rank_name');
    });
  },
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
      isActive: '',
      username: ''
    }
  },
  methods: {
    isActiveName: function(name) {
      this.isActive = name;
    },
    logoff: function() {
      apiForLogoff({}, function() {
        window.localStorage.setItem('rank_role', '');
        appState.router.push('/login');
      });
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
        standard: 0,
        previous_deposit: 0,
        current_deposit: 0,
        accumulate: 0,
        consume: 0,
        current_integral: 0,
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
      },
      appState: appState,
      searchKey: "",
      deledStaff: {}
    }
  },
  components:{
    'vue-nav': Vnav
  },
  methods: {
    uploadStaffData: function(e) {
      var self = this;
      var file = e.target.files[0];
      var supportedTypes = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
      if (file && supportedTypes.indexOf(file.type) >= 0) {
        var formData = new FormData();
        formData.append('image', file);
        apiStaffImport(formData, function(response) {
          alert("导入成功");
          window.location.reload();
          // self.newGoods.gift_img = response;
        });
      } else {
        alert('文件格式只支持：xlsx');
      }
    },
    search: function() {
      this.pageData = {
        cur: 1,
        all: 1
      }
      if (!this.searchKey) {
        return this.getStaffs(1, 10);
      }
      apiStaffSeach({
        key: this.searchKey
      }, (function(response) {
        this.staffs = response.staffs;
      }).bind(this))
    },
    listenPage: function(page){
      this.pageData.cur = page;
      this.getStaffs(page, 10);
      console.log('你点击了' + page + '页');
    },
    showAddStaff: function() {
      this.isShowAddStaff = true;
      this.isAddStaff = true;
    },
    checkNewStaff: function(_key) {
      var self = this;
      for (var item in self.newStaff) {
        if (self.newStaff[item] === ''
          && item !== 'staff_id'
          && item !== _key) {
          return false;
        }
      }
      return true;
    },
    addStaff: function() {
      if (!this.checkNewStaff()) {
        return alert("请填写完整的用户信息");
      }
      apiStaffAdd(this.newStaff, (function(reponse) {
        var newArray = [].concat(this.staffs);
        newArray.push($.extend({}, this.newStaff));
        this.staffs = newArray;

        this.isShowAddStaff = false;
        this.isAddStaff = false;

        for (var _key in this.newStaff) {
          this.newStaff[_key] = '';
        }
      }).bind(this));
    },
    // 显示员工兑换记录
    showOneStaffExchange: function(itemStaff) {

      apiStaffRecord({
        number: itemStaff.staff_number
      }, (function(response) {
        $(".staff-exchange-history").modal('show');

        // TODO 这里需要请求数据
        this.currentStaffExchangeRecard = response;
      }).bind(this));
    },
    // 确认兑换
    confirmExchange: function(item) {
      // var code = window.prompt("输入兑换码");
      // if (String(item.ver_code) === code) {
        apiTradeConfirm({
          trade_id: item.trade_id
        }, (function(response){
          item.is_confirm = true;
        }).bind(this))
      // }
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
      if (!this.checkNewStaff('password')) {
        return alert("有空白的字段未填写");
      }
      // if (!this.newStaff.password) {
      //   this.newStaff.password = '';
      // }
      var _staff = $.extend({}, this.newStaff);
      delete _staff.can;
      delete _staff.goods;
      delete _staff.current_integral;
      apiStaffUpdate(_staff, function(response) {

      });
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
        standard: 0,
        previous_deposit: 0,
        current_deposit: 0,
        accumulate: 0,
        consume: 0,
        current_integral: 0,
        password: ''
      }
    },
    delStaff: function(staff) {
      this.deledStaff = staff;
      $(".del-confirm").modal('show');
    },
    cancleDel: function() {
      $(".del-confirm").modal('hide');
    },
    confirmDel: function() {
      var vm = this;
      apiStaffDel({
        staff_id: this.deledStaff.staff_id
      }, (function() {
        var _array = [].concat(this.staffs);
        _array.forEach(function(item, index) {
          if (item.staff_id === vm.deledStaff.staff_id) {
            _array.splice(index, 1);
          }
        });
        this.staffs = _array;
        $(".del-confirm").modal('hide');
      }).bind(this))
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
    },
    downloadTrade: function() {
      var startTime = '';
      var endTime = '';
      startTime = $(".start-time").val();
      endTime = $(".end-time").val();
      if (!startTime || !endTime) {
        return alert("开始时间和结束时间不能为空");
      }
      if (startTime > endTime) {
        return alert("开始时间不能大于结束时间");
      }
      window.open('../index.php/staff/getTradeByTime?startTime=' + startTime + '&endTime=' + endTime, '_parent');
    }
  },
  beforeRouteEnter: function (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当钩子执行前，组件实例还没被创建
    next(function(vm) {

      //vm.staffs = defaultDatas.staffs;
      vm.getStaffs(vm.pageData.cur, 10);

      setTimeout(function() {
        $(".timepicker").datetimepicker({
          format: 'YYYY-MM-DD HH:mm:ss',
          // dayViewHeaderFormat: 'YYYY MMMM'
        });
      }, 200);
    });
  },
});

var adminGoodsView = Vue.extend({
  template: $("#admin-goods-template").html(),
  data: function() {
    return {
      newGoods: {
        g_id: '',
        gift_name: '',
        integral: '',
        gift_img: ''
      },
      goodsArray: [],
      isShowAddGoods: false,
      isAddGoods: false,
      isEditGoods: false,
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
    closeEditGoods: function() {
      this.isAddGoods = false;
      this.isEditGoods = false;
      this.isShowAddGoods = false;
    },
    preview: function (e) {
      var self = this;
      var file = e.target.files[0];
      var supportedTypes = ['image/jpg', 'image/jpeg', 'image/png'];
      if (file && supportedTypes.indexOf(file.type) >= 0) {
        var formData = new FormData();
        formData.append('image', file);
        apiUploadFile(formData, function(response) {
          self.newGoods.gift_img = response;
        });
      } else {
        alert('文件格式只支持：jpg、jpeg 和 png');
      }
    },
    getGifts: function(page, pageSize) {
      var self = this;
      apiGiftList({
        page: page,
        page_size: pageSize
      }, function(response) {
        self.goodsArray = response.data;
        self.pageData.all = Math.floor(response.count / 10) + 1;
      });
    },
    listenPage: function(page) {
      this.pageData.cur = page;
      this.getGifts(page, 10);
      console.log('你点击了' + page + '页');
    },
    showAddGoods: function() {
      this.isShowAddGoods = true;
      this.isAddGoods = true;
    },
    checkNewGoods: function() {
      var self = this;
      for (var item in this.newGoods) {
        if (self.newGoods[item] === '' && item != 'g_id') {
          return false;
        }
      }
      return true;
    },
    addGoods: function() {
      if (!this.checkNewGoods()) {
        return alert("请填写完整的礼品信息");
      }
      apiGiftAdd(
        this.newGoods,
        (function() {
          var newArray = [].concat(this.goodsArray);
          newArray.push($.extend({}, this.newGoods, true));
          this.goodsArray = newArray;
          this.isShowAddGoods = false;
          this.isAddGoods = false;

          for (var _key in this.newGoods) {
            this.newGoods[_key] = '';
          }
        }).bind(this)
      )
    },
    showEditGoods: function(goodsItem) {
      this.isShowAddGoods = true;
      this.isEditGoods = true;
      this.newGoods = goodsItem;
    },
    editGoods: function() {
      if (!this.checkNewGoods()) {
        return alert("请填写完整的礼品信息");
      }
      apiGiftUpdate(this.newGoods, (function() {
        this.newGoods = {
          id: '',
          name: '',
          rank: '',
          image: ''
        },

        this.isShowAddGoods = false;
        this.isEditGoods = false;
      }).bind(this));
    },
    delGoods: function(goodsItem) {
      apiGiftDel({
        g_id: goodsItem.g_id
      }, (function(){
        var newArray = [].concat(this.goodsArray);
        newArray.forEach(function(item, index) {
          if (item.id == goodsItem.id) {
            newArray.splice(index, 1);
          }
        });
        this.goodsArray = newArray;
      }).bind(this));
    }
  },
  beforeRouteEnter: function (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当钩子执行前，组件实例还没被创建
    next(function(vm) {
      vm.getGifts(vm.pageData.cur, 10);
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
      oldPassword: '',
      newPassword: '',
      username: '',
      password: ''
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
    },
    editPassword: function() {
      if (!this.newPassword || !this.oldPassword){
        return alert("密码不能为空");
      }
      apiUserChangePassword({
        new_password: this.newPassword,
        old_password: this.oldPassword
      }, (function(response){
        alert("修改成功");
        this.showSystem();
      }).bind(this))
    },
    addUser: function() {
      if (!this.username || !this.password){
        return alert("用户名和密码不难为空");
      }
      apiNewAdmin({
        username: this.username,
        password: this.password
      }, (function(response){
        alert("添加成功");
        this.showSystem();
      }).bind(this));
    },
    cancelAddUser: function() {
      this.showSystem();
    },
    cancelEditPassword: function() {
      this.showSystem();
    }
  }
});

// 2.注册组件，并指定组件的标签，组件的HTML标签为<my-component>
Vue.component('admin-view', adminView);
Vue.component('admin-staff', adminStaffView);
Vue.component('admin-goods', adminGoodsView);
Vue.component('admin-system', adminStaffView);