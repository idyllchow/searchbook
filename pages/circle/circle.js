//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    imgUrls:[
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    logs: []
  },
  changeIndicatorDots:function(e) {
    console.log(e.detail.current)
    this.setData({indicatorDots: !this.data.indicatorDots})
  },
  changeAutoPlay: function(e) {
    this.setData({autoplay: !this.data.autoplay})
  },
  intervalChange: function(e) {
    this.setData({interval: e.detail.value})
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('circle') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
