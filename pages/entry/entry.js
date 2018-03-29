// pages/mudol/mudol.js

const toolbar = [
    '../../images/nav/download.png', '../../images/nav/fav.png',
    '../../images/nav/share.png', '../../images/nav/comment.png'
];
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 日志
    diary:undefined,
    // 顶部工具条
    toolbar:toolbar,
    // 图片预览模式
    previewMode:false,
    // 当前预览索引
    previewIndex:0,
    //多媒体内容列表
    mediaList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (param) {
      this.getDiares(param);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  getDiares(param){
    var diaryData = app.data;
    var id = param['id'];
    console.log(diaryData[id]);
    if (id == undefined){
        id = 0;
    }
    this.setData({
        diary: diaryData[id]
    })
  },


})