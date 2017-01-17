var domain = '../index.php';


var isDemo = false;
var queryArray = window.location.href.split('?');
if (queryArray.length > 1) {
  if (queryArray[1].indexOf('isDemo') !== -1) {
    isDemo = true;
  }
}

$(document).on("ajaxSend", function(){
  $("#loading-div").show();
}).on("ajaxComplete", function(){
  $("#loading-div").hide();
});

function errorAlert(err) {
  if (err && err.readyState === 0) {
    return;
  }
  if (typeof err !== 'string') {
    err = JSON.stringify(err);
  }
  alert(err);
 // window.location.reload();
}

function tipsAlert(tips) {
  if (typeof tips !== 'string') {
    tips = JSON.stringify(tips);
  }
  alert(tips)
}

var makeGet = function(url) {
  return function(data, callback) {
    if (isDemo) {
      return callback(defaultDatas[url]);
    }
    $.get(domain + url, data)
      .done(function(data) {
        paseJson(data, callback);
      })
      .fail(function(err) {
        errorAlert(err);
      });
  };
}

var makePost = function(url) {
  return function(data, callback) {
    if (isDemo) {
      return callback(defaultDatas[url]);
    }
    $.post(domain + url, data)
      .done(function(data) {
        paseJson(data, callback);
      })
      .fail(function(err) {
        errorAlert(err);
      });
  };
}

var makeFile = function(url) {
  return function(data, callback) {
    $.ajax({
      url: domain + url ,
      type: 'POST',
      data: data,
      async: false,
      cache: false,
      contentType: false,
      processData: false
    }).done(function(data) {
        paseJson(data, callback);
    }).fail(function(err) {
        errorAlert(err);
    });;
  }
}

var paseJson = function(response, callback) {
  if (typeof response === 'string') {
    try {
      response = JSON.parse(response);
    } catch (e) {
      console.log(e);
    }
  }
  if (typeof response === 'string') {
    return errorAlert(response);
  }
  if (response.code != 1) {
    return errorAlert(response.msg);
  }
  callback(response.data);
}


// API 定义
var apiForLogoff = makeGet('/user/logout');
var apiForLogin = makePost('/login/toLogin');
var apiUserInfo = makeGet('/user/getOneInfo');
var apiGoodsList = makeGet('/gift/giftList');
var apiTradeGift = makeGet('/trade/getCode');
var apiUserTradeRecord = makeGet('/user/getRecordSelf');

var apiStaffList = makeGet('/staff/getStaffList');
var apiStaffAdd = makePost('/staff/addStaff');
var apiStaffUpdate = makePost('/staff/updateStaff');
var apiStaffDel = makePost('/staff/delStaff');
var apiStaffSeach = makeGet('/staff/search');
var apiStaffRecord = makeGet('/staff/getRecord');
var apiStaffImport = makeFile('/staff/import');
var apiStaffExport = makePost('/staff/export');

var apiTradeConfirm = makePost('/trade/check');

var apiGiftList = makeGet('/gift/giftList');
var apiGiftUpdate = makePost('/gift/updateGift');
var apiGiftDel = makePost('/gift/delGift');
var apiGiftAdd = makePost('/gift/addGift');

var apiUploadFile = makeFile('/index/upload');

var apiUserChangePassword = makePost('/user/changePsw');
var apiNewAdmin = makePost('/user/addUser');