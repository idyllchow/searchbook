Page({
  data: {
    focus: false,
    inputValue: ''
  },
  // bindButtonTap: function() {
  //   this.setData({
  //     focus: true
  //   })
  // },
  bindKeyInput: function(e) {
    this.setData({inputValue: e.detail.value})
    console.log("input value: " + e.detail.value )
  },

  searchBook:function(event){
    console.log("====inputValue===" + this.inputValue)
  }

  })