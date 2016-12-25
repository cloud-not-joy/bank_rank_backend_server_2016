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
  alert(err);
}

function tipsAlert(tips) {
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

var paseJson = function(response, callback) {
  if (typeof response === 'string') {
    response = JSON.parse(response);
  }
  if (response.code != 1) {
    return errorAlert(response.msg);
  }
  callback(response.data);
}


// API 定义

var apiForLogin = makePost('/login/toLogin');
var apiUserInfo = makeGet('/user/info');
var apiGoodsList = makeGet('/goods/list');
var apiStaffList = makeGet('/staff/getStaffList');
var apiStaffExchangeHistory = makeGet('/exchange/history');
var apiStaffExchange = makePost('/exchange/do');


var apiForMemeberIndex = makeGet('/memeber');