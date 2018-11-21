//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2529389608.jpg',
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2531291468.jpg',
      'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529571873.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    list:null,
    subjects:null
  },
  click: function (e) {
    console.log('jkmiii');
    wx.navigateTo({
      url: '../../pages/details/index?str=' + JSON.stringify(this.data.subjects)
    })
  },
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters', //仅为示例，并非真实的接口地址
      data: {
      },
      header: {
        'content-type': 'json' // 默认值
      },
      success: function (res) {
        console.log(res,'res')
        that.setData({
          list:res.data,
          subjects: res.data.subjects
        })  
      }
    }) 
  },
  click:function (e) {
    let thisId = e.currentTarget.id;
    var app = getApp();
    //设置全局的请求访问传递的参数 
    app.requestId = e.currentTarget.id;
    wx.navigateTo({
      url: "/pages/details/index"
    })
  }
 
})   
