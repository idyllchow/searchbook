var app = getApp()
Page({
    data:{books: [],
    id:"",
    title:"",
    image: "",
    author:"",
    publisher:"",
    price:"",
    rating:"",
    summary: "",
    bookinfo: {}},
    
    onLoad:function(options){
      var that = this

    wx.setNavigationBarTitle({
        title: options.title,
        success: function(res) {
          // success
        }
      })
      this.setData({id: options.id})
      this.setData({title: options.title})
      // 页面初始化 options为页面跳转所带来的参数
      // this.data.books = JSON.stringify(options.extra)
      // this.setData({books: JSON.stringify(options.extra)})
      this.setData({image: options.image})
      this.setData({title: options.title})
      this.setData({author: options.author})
      this.setData({publisher: options.publisher})
      this.setData({price: options.price})
      
  

      wx.request({
        url: 'https://api.douban.com/v2/book/' +  this.data.id,
        // data: {},
        method: 'GET',
        header: {"Content-Type": "application/json"},
        success: function(res){
          // success
          var response = res.data;
          
          that.setData({
            bookinfo: response,
            rating: response.rating,
            summary:response.summary
      })
       console.log("detail info that " + that.data.rating)
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })

  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})