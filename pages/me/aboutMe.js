// pages/me/aboutMe.js
const app = getApp();
var iconPath = '../../images/icon/';
var tabs = [
    {
        'icon':iconPath + 'mark.png',
        'iconActive':iconPath + 'markHL.png',
        'title':'日记',
        'extraStyle':''
    },
    {
        'icon':iconPath + 'collect.png',
        'iconActive':iconPath + 'collectHL.png',
        'title':'收藏',
        'extraStyle':''
    },
    {
        'icon':iconPath + 'like.png',
        'iconActive':iconPath + 'likeHL.png',
        'title':'喜欢',
        'extraStyle':''
    },
    {
        'icon': iconPath + 'more.png',
        'iconActive': iconPath + 'moreHL.png',
        'title': '更多',
        'extraStyle': ''
    }
]


Page({

  /**
   * 页面的初始数据
   */
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        diaryNum:0,
        tabs: tabs,
        currentIndex:0
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (!this.data.hasUserInfo){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
        // 在没有 open-type=getUserInfo 版本的兼容处理
        wx.getUserInfo({
            success: res => {
            app.globalData.userInfo = res.userInfo
            this.setData({
                userInfo: res.userInfo,
                hasUserInfo: true
            })
            }
        })
    }
    //
    var diaryData = app.data;
    this.setData({
        diaryNum: diaryData.length
    })
  },
  touchTab:function(event){
      var idx = parseInt(event.currentTarget.id);
      this.setData({
          currentIndex: idx
      })
      
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})