var staffView = Vue.extend({
  template: $("#staff-template").html(),
  data: function() {
    return {
      currentMonth: '',
      staffInfo: {
        staff_name: '',
        staff_id: '',
        staff_number: '',
        department: '',
        staff_role: '',
        standard: '',
        previous_deposit: '',
        current_deposit: '',
        accumulate: 0,
        consume: 0,
        current_integral: 0
      },
      currentGoods: {

      },
      goodsArray: [],
      exchangeHistoryList: [],
      pageData: {
        cur: 1,
        all: 1
      },
      currentPage: 1,
      exchangeGift: {},
      currentVerCode: '',
      tradeRecord: []
    }
  },
  beforeRouteEnter: function (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当钩子执行前，组件实例还没被创建
    next(function(vm) {
      if (!window.localStorage.getItem('rank_role')) {
        appState.router.push('/login');
      }
      vm.getGoodsLists();
      apiUserInfo({}, function(response) {
        // vm.currentMonth = response.currentMonth;
        vm.staffInfo = response;
      });
    });
  },
  mounted: function() {

    // this.goodsArray = defaultDatas.goodsArray;
  },
  components:{
    'vue-nav': Vnav
  },
  methods: {
    getGoodsLists: function() {
      var vm = this;
      apiGoodsList({page: vm.currentPage}, function(response) {
        vm.pageData.all = Math.floor(response.count / 10) + 1;
        vm.goodsArray = response.data;
      });
    },
    listenStaffPage: function(page) {
      this.currentPage = page;
      this.pageData.cur = page;
      this.getGoodsLists();
    },
    exchange: function(gift) {
      // TODO 获取当前选中的商品信息
      this.exchangeGift = gift;
      $(".exchange-confirm").modal('show');
    },
    sureConfirm: function() {
      apiTradeGift({
        gid: this.exchangeGift.g_id
      }, (function(response) {
        if (response) {
          this.currentVerCode = response;
          $(".exchange-ok").modal('show');
        }
      }).bind(this));
    },
    closeConfirm: function() {
      $(".exchange-modal").modal('hide');
    },
    showExchangeHistory: function() {
      apiUserTradeRecord({
        staff_number: this.staffInfo.staff_number
      }, (function(response){
        this.exchangeHistoryList = response;
        $(".exchange-history").modal('show');
      }).bind(this));
      
      // this.exchangeHistoryList = defaultDatas.exchangeHistoryList;
    },
    logoff: function() {
      apiForLogoff({}, function() {
        window.localStorage.setItem('rank_role', '');
        appState.router.push('/login');
      });
    }
  }
})

// 2.注册组件，并指定组件的标签，组件的HTML标签为<my-component>
Vue.component('staff-view', loginView)

// var loginView = new Vue({
//
//   data: {
//
//   }
// })