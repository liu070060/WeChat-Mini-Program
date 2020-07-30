// pages/home/home.js
var log = require('../../utils/log.js') // 引用上面的log.js文件

Page({

  /**
   * 页面的初始数据
   */
  data: {
    workList: [
      {
        id: 1,
        name: 'Android',
        icon: '/images/android.png',
      },
      {
        id: 2,
        name: '前端',
        icon: '/images/work_1.png',
      },
      {
        id: 3,
        name: '小程序',
        icon: '/images/link.png',
      },
    
    ],

    userInfo: {
      name: '刘必成',
      work: '小程序开发工程师',
      photo: '/images/photo.png',
      city: '云南省曲靖市',
      major: '信息管理与信息系统',
      school: '辽宁工程技术大学',
      myTalk: '完整参与过多项互联网项目开发，接触过的技术有Android开发，web前端开发，小程序开发。本人性格细心，开朗，具有良好的学习习惯，擅长在实作中吸收新技术，并且在实践中善于发现，解决实际问题。踏实肯干，喜欢良好的工作氛围',
      workExp: [
        {
          id: 0,
          time: '2018.11-至今',
          companyLogo: '/images/logo1.jpg',
          companyName: '众鑫学创（北京）科技有限公司',
          des: [
            '负责产品移动端的页面代码编写，跟进并协助开发团队按照设计稿实现界面效果。',
            '负责app的日常更新与维护工作。',
            '配合推广团队负责APP线上线下活动的推广任务，分析市场调研反馈问题，帮助更好的推广app。',
            '与项目经理实时分析客户需求并改善用户体验。'
          ],
          project: [
            {
              title: '虹观App',
              type: '开发与维护',
              content: [
                '项目描述：虹观App是一款检测人体身体器官是否健康的app软件，他根据拍摄人的虹膜，通过大数据的对比，给出一系列身体健康小提示，为使用者提供直观的身体分析报告。',
                '职责描述: 1、在此项目中，负责登录注册界面的代码编写; 2、负责数据库的增删改查操作;3、负责某几个页面的代码编写',
              
              ]
            },
            {
              title: 'V电影',
              type: '软件开发',
              content: [
                '项目描述:这是一款分享来自全世界的优秀短片的app。里面收集了各种有趣、高品质的电影短片。',
                '职责描述: 1.我的页面的编写; 2、json解析数据以及视频加载；3、首页图片实现轮播特效',
              ]
            },
            
          ]
        },
      /*  {
          id: 1,
          time: '2016.3-2018.4',
          companyLogo: '/images/aqi_1.png',
          companyName: '北京爱奇艺科技有限公司',
          des: [
            '爱奇艺首页焦点图、站内物料设计与维护。',
            '爱奇艺自制综艺、独播综艺的web专题页设计，协助web前端开发实现页面并上线。',
            '电视剧频道、动漫频道、自制综艺的奇首焦点、频道焦点、暂停屏、传播图、等物料的设计与维护。',
            '配合运营人员的需求，设计京东、淘宝电商首页、详情页等物料。'
          ],
        }
        */
      ]
      ,
      
      phone: '17812271092',
      email: '2660324655@qq.com',
      evm: '/images/evm.jpg',
      isShowWorkExp: false,
      showWorkExpId: 0,
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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


    log.info('hello test hahaha') // 日志会和当前打开的页面关联，建议在页面的onHide、onShow等生命周期里面打
    log.warn('warn')
    log.error('error')
    log.setFilterMsg('filterkeyword')
    log.setFilterMsg('addfilterkeyword')
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
   * 打电话
   */
  call: function () {
    wx.makePhoneCall({
      phoneNumber: this.data.userInfo.phone
    })
  },

  showWorkExp: function (e) {
    let id = e.currentTarget.dataset.info.id;

    console.log(id, )
    this.setData({ isShowWorkExp: true, showWorkExpId: id })
  },

  /**
   * 
   */
  myWorkClick(e) {
    let type = e.currentTarget.dataset.info;

    wx.navigateTo({
      url: '/pages/myWorkDetail/myWorkDetail?type=' + type,
    })
  },

  /**
   * 
   */
  closeWorkExp() {
    this.setData({ isShowWorkExp: false })
  },

})