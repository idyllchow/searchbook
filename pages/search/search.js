Page({
  data: {
    animationData: {},
    initTop: '40%',
    focus: false,
    inputValue: '',
    books: []
    
  },
  
  onShow: function() {
    var animation = wx.createAnimation({
        transformOrigin: "10% 50%",
        duration: 2000,
        timingFunction: "ease",
        delay: 0
})
    this.animation = animation

    animation.scale(2,2).rotate(45).step()

    this.setData({
      animationData:animation.export()
    })

setTimeout(function() {
      animation.translate(30).step()
      this.setData({
        animationData:animation.export()
      })
    }.bind(this), 1000)
  },
  rotateAndScale: function () {
    // 旋转同时放大
    this.animation.rotate(45).scale(2, 2).step()
    this.setData({
      animationData: this.animation.export()
    })
  },
  rotateThenScale: function () {
    // 先旋转后放大
    this.animation.rotate(45).step()
    this.animation.scale(2, 2).step()
    this.setData({
      animationData: this.animation.export()
    })
  },
  rotateAndScaleThenTranslate: function () {
    // 先旋转同时放大，然后平移
    this.animation.rotate(45).scale(2, 2).step()
    this.animation.translate(100, 100).step({ duration: 1000 })
    this.setData({
      animationData: this.animation.export()
    })
  
  
  },

  bindKeyInput: function(e) {
    this.setData({inputValue: e.detail.value})
    console.log("input action input value: " + this.data.inputValue)
  },

  searchBook:function(event){
    var that = this
    console.log("====inputValue===" +               this.data.inputValue)
    
    wx.request({
      url: 'https://api.douban.com/v2/book/search',
      header: {"Content-Type": "application/json"},
      data: {q: this.data.inputValue,
      count:30},
      method: 'GET',
      success: function(res){
        var response = res.data;
        that.setData({books: response.books})
        console.log("this books " + that.data.books)
        that.setData({initTop: 0})   
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },

onLoad: function(){
    console.log('onLoad')
    var that = this
},

selectedBook: function(param) {
  var menuItem = this.data.books[parseInt (param.currentTarget.id)]
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


}


})