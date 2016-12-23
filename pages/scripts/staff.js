var staffView = Vue.extend({
  template: $("#staff-template").html(),
  data: function() {
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
        remainRank: '',
      },
      currentGoods: {

      },
      goodsArray: [],
      exchangeHistoryList: [],
      pageData: {
        cur: 1,
        all: 1
      },
      currentPage: 1
    }
  },
  mounted: function() {
    var vm = this;
    this.getGoodsLists();
    apiUserInfo({}, function(response) {
      vm.currentMonth = response.currentMonth;
      vm.staffInfo = response.userInfo;
    });
    // this.goodsArray = defaultDatas.goodsArray;
  },
  components:{
    'vue-nav': Vnav
  },
  methods: {
    getGoodsLists: function() {
      var vm = this;
      apiGoodsList({page: vm.currentPage}, function(response) {
        vm.pageData.all = response.totalPages;
        vm.goodsArray = response.lists;
      });
    },
    listenStaffPage: function(page) {
      this.currentPage = page;
      this.getGoodsLists();
    },
    exchange: function() {
      // TODO 获取当前选中的商品信息
      $(".exchange-confirm").modal('show');
    },
    sureConfirm: function() {
      $(".exchange-ok").modal('show');
    },
    closeConfirm: function() {
      $(".exchange-modal").modal('hide');
    },
    showExchangeHistory: function() {
      $(".exchange-history").modal('show');
      this.exchangeHistoryList = defaultDatas.exchangeHistoryList;
    },
    logoff: function() {
      appState.router.push('/login');
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