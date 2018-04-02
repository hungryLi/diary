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
    mediaList:[],
    indicatordots:true,
    autoplay:false,
    interval:5000,
    duration:500,
    imgUrl:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (param) {
      this.getDiares(param);
      this.swiperImgs();
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
    var imgs = [];
    var lists = diaryData[id].list;
    for (var index in lists){
        var img = lists[index];
        if(img.type == 'IMAGE'){
            imgs.push(img.content);
        }
    }
    this.setData({
        imgUrl:imgs
    })
    // console.log(this.imgUrl.size);
  },
  // 点击图片进入图片切换模式
  enterPreviewMode: function (event){
    let url =  event.target.dataset.src;
    let index = this.data.imgUrl.indexOf(url);
    console.log(url,index);
    this.setData({
        previewMode:true,
        previewIndex: index
    })
  },
  leavePreviewMode:function(){
    this.setData({
        previewMode:false,
        previewIndex: 0
    })  
  },
  // 图片滑动
  swiperImgs(){
    
  }

})