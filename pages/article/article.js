//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls:[    'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,

    dataContent: [],
    testData: {name: '萧十一郎', arms: '割鹿刀'},
    userInfo: {}
  },


  //事件处理函数
  selectedCell:function(param) {
    var menuItem = this.data.dataContent[parseInt(param.currentTarget.id)]
    console.log("click item " + param.currentTarget.id + " " + menuItem.author + " title: " + menuItem.title );

    wx.navigateTo({
      url: '../detail/detail?title=' + menuItem.title + '&author=' + menuItem.author + '&publisher=' + menuItem.publisher + '&price=' + menuItem.price + '&image=' + menuItem.images.large + '&id=' + menuItem.id,
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },


  
  bindViewTap: function() {
    wx.navigateTo({
      url: '../mine/mine'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //网络请求
    wx.request({
      url: 'https://api.douban.com/v2/book/search',
      header: {"Content-Type": "application/json"},
      data: {q: 'Android',
      count:30},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        var response = res.data;
        console.log(response);
        that.setData({dataContent: response.books})
        that.update()
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    });


    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
