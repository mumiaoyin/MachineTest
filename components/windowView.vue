<template>
  <view class="uni-popup-dialog">

    <view v-if="mode === 'base'" class="uni-dialog-content">
      <slot>
        <text class="uni-dialog-content-text">{{content}}</text>
      </slot>
    </view>
    <view v-else class="uni-dialog-content">
      <view class="allbox tab_title_view">
		 <view class="tab_row" v-for="(item,index) in listImg" :key="index">
		 	<view class="tab_item tab1" v-for="(item1,index1) in item" :key="index1" @click="toggleMessage(item1.title)" >
		 		<image :src="item1.icon" mode="" class="imgicon"></image>
		 		<p>{{item1.title}}</p>
		 	</view>	
		 </view>
      </view>
    </view>
   

  </view>
</template>

<script>
// import { etCarModelNoInfo } from "@/pages/api/add-car"
// import popup from '../../uni-popup/popup.js'
/**
 * PopUp 弹出层-对话框样式
 * @description 弹出层-对话框样式
 * @tutorial https://ext.dcloud.net.cn/plugin?id=329
 * @property {String} value input 模式下的默认值
 * @property {String} placeholder input 模式下输入提示
 * @property {String} type = [success|warning|info|error] 主题样式
 *  @value success 成功
 * 	@value warning 提示
 * 	@value info 消息
 * 	@value error 错误
 * @property {String} mode = [base|input] 模式、
 * 	@value base 基础对话框
 * 	@value input 可输入对话框
 * @property {String} content 对话框内容
 * @property {Boolean} beforeClose 是否拦截取消事件
 * @event {Function} confirm 点击确认按钮触发
 * @event {Function} close 点击取消按钮触发
 */

export default {
  name: "uniPopupDialog",
  // mixins: [popup],
  props: {
    car_model_no: {
      type: [String, Number],
      default: ''
    },
    frame_no: {
      type: [String, Number],
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: [String, Number],
      default: '请输入内容'
    },
    type: {
      type: String,
      default: 'error'
    },
    mode: {
      type: String,
      default: 'base'
    },
    title: {
      type: String,
      default: '提示'
    },
    point: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    beforeClose: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      searchval: '',
      searchval2: '',
      dialogType: 'error',
      focus: false,
      val: "",
      indexNum: 1,
      placeholder1: '输入车架号',
      infObj: {},
      listArr: [
      ],
	  listImg:[
	  	[
	  		{icon:'../../../static/img/tabbar/guanzhu.png',title:'功能A'},
	  		{icon:'../../../static/img/tabbar/guanzhu.png',title:'功能B'},
	  		{icon:'../../../static/img/tabbar/guanzhu.png',title:'功能C'},
	  		{icon:'../../../static/img/tabbar/guanzhu.png',title:'功能D'}
	  	],
	  	[
	  		{icon:'../../../static/img/tabbar/guanzhu.png',title:'功能E'},
	  		{icon:'../../../static/img/tabbar/guanzhu.png',title:'功能F'},
	  		{icon:'../../../static/img/tabbar/guanzhu.png',title:'功能G'},
	  		{icon:'../../../static/img/tabbar/guanzhu.png',title:'功能H'}
	  	]
	  ]
    }
  },
  watch: {
    // frame_no(val) {
    //   console.log('车架号码frame_no ', val);
    // },
    type(val) {
      this.dialogType = val
    },
    mode(val) {
      if (val === 'input') {
        this.dialogType = 'info'
      }
    },
    value(val) {
      this.val = val
    }
  },
  onLoad() {
    console.log('弹框的onloaa');
    uni.$on('eventfirst', this.first())

    // // 对话框遮罩不可点击
    // this.popup.disableMask()
    // // this.popup.closeMask()
    // if (this.mode === 'input') {
    //   this.dialogType = 'info'
    //   this.val = this.value
    // } else {
    //   this.dialogType = this.type
    // }
    // if (this.indexNum == 1) {
    //   this.searchval = this.frame_no || ''
    // } else if (this.indexNum == 2) {
    //   this.searchval2 = this.car_model_no || ''
    // }
    // this.getlist()
  },
  created() {
    console.log('弹框的created');

    // // 对话框遮罩不可点击
    // this.popup.disableMask()
    // // this.popup.closeMask()
    // if (this.mode === 'input') {
    //   this.dialogType = 'info'
    //   this.val = this.value
    // } else {
    //   this.dialogType = this.type
    // }
    // if (this.indexNum == 1) {
    //   this.searchval = this.frame_no || ''
    // } else if (this.indexNum == 2) {
    //   this.searchval2 = this.car_model_no || ''
    // }
    // this.getlist()
  },
  mounted() {
    this.focus = true
  },
  methods: {
    first() {
      console.log('父组件触发子组件的first方法');
      // 对话框遮罩不可点击
      this.popup.disableMask()
      // this.popup.closeMask()
      if (this.mode === 'input') {
        this.dialogType = 'info'
        this.val = this.value
      } else {
        this.dialogType = this.type
      }
      // if (this.indexNum == 1) {
      this.searchval = this.frame_no || ''
      // } else if (this.indexNum == 2) {
      this.searchval2 = this.car_model_no || ''
      // }

      this.getlist()
    },
    confirm(e) {
      console.log(e.detail.value);
    },
    iconClick(type) {
      uni.showToast({
        title: `点击了${type === 'prefix' ? '左侧' : '右侧'}的图标`,
        icon: 'none'
      })
    },
    selectInfo(item) {
      console.log(item);
      this.infObj = item
      this.onOk()
    },
    /**
     * 点击确认按钮
     */
    onOk() {
      if (this.mode === 'input') {
        this.$emit('confirm', this.infObj)
      } else {
        this.$emit('confirm')
      }
      // 这个是真正的关闭弹框操作
      // if (this.beforeClose) return
      // this.popup.close()
    },
    /**
     * 点击取消按钮
     */
    closeDialog() {
      this.$emit('close')
      if (this.beforeClose) return
      this.popup.close()
    },
    close() {
      this.popup.close()
    }
  }
}
</script>

<style lang="scss" scoped>
.bgblue {
  height: 86rpx;
  color: #108ee9 !important;
  border-bottom: 2px solid #108ee9 !important;
  box-sizing: border-box !important;
}
.uni-popup-dialog {
  width: 300px;
  border-radius: 15px;
  background-color: #fff;
}

.uni-dialog-title{
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 5px;
  width: 100%;
  background: #ccc !important;
  padding-bottom: 15px !important;
}

.uni-dialog-title-text {
  font-weight: 700;
  font-family: PingFangSC-Regular;
  font-size: 36rpx;
  color: #000 !important;
  letter-spacing: 0;
  text-align: center;
  line-height: 36rpx;
}

.uni-dialog-content {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 15px 15px 15px;
}
.tab1 > image{
	display: block;
	margin: 0 auto;
}

.tab1 > p {
	text-align: center;
	color: #F8F8F8;
}
.uni-dialog-content-text {
  font-size: 14px;
  color: #6e6e6e;
}
.uni-dialog-content-point {
  color: #f86e21;
  padding: 0 15px 15px 15px;
  view {
    font-family: PingFangSC-Regular;
    font-size: 24rpx;
    color: #f86e21;
    letter-spacing: -0.58px;
  }
}

/deep/.uni-dialog-button-group {
  /* #ifndef APP-NVUE */
  display: flex;

  /* #endif */
  flex-direction: row;
  border-top-color: #f5f5f5;
  border-top-style: solid;
  border-top-width: 1px;
  border-top: none !important;
  position: relative !important;
}
// 自定义样式
.delbtn {
  position: absolute !important;
  top: 50rpx !important;
  transform: translate(-50%, 0) !important;
  margin-left: 50% !important;
}
// 自定义样式
.uni-border-left {
  border-left: none !important;
}

.uni-dialog-button {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 45px;
}

.uni-border-left {
  border-left-color: #f0f0f0;
  border-left-style: solid;
  border-left-width: 1px;
}

.uni-dialog-button-text {
  font-family: PingFangSC-Regular;
  font-size: 36rpx;
  color: #108ee9;
  letter-spacing: 0;
  text-align: center;
  line-height: 36rpx;
}

.uni-button-color {
  color: #007aff;
}

.uni-dialog-input {
  flex: 1;
  font-size: 14px;
  border-top: 1px #eee solid;
  height: 40px;
  padding: 0 10px;
  color: #555;
}

.uni-popup__success {
  color: #4cd964;
}

.uni-popup__warn {
  color: #f0ad4e;
}

.uni-popup__error {
  color: #dd524d;
}

.uni-popup__info {
  color: #909399;
}
//
.uni-dialog-content {
  width: 100% !important;
  padding: 0 !important;
}
.allbox {
  width: 100% !important;
  height: 750rpx;
  // border: 1px solid red;
  .top {
    height: 84rpx;
    line-height: 84rpx;
    overflow: hidden;
    .l,
    .r {
      text-align: center;
      float: left;
      width: 50%;
      border-bottom: 1px solid #ddd;
      font-family: PingFangSC-Regular;
      font-size: 30rpx;
      color: #303030;
    }
  }
  .bot {
    padding: 30rpx;
    display: flex;
    .all {
      width: 100%;

      // /deep/.uni-navbar__header-btns-left {
      //   display: none !important;
      // }
      /deep/.myinput {
        // flex: 1;
        width: 80%;
        display: inline-block;
        border-radius: 20px !important;
      }
      .sreachbtn {
        width: 15%;
        padding-left: 5%;
        display: inline-block;
        color: #108ee9;
      }
    }
    /deep/.uni-easyinput__content {
      border-radius: 20px !important;
    }
    .searbox {
      width: 70rpx;
      line-height: 70rpx;
      text-align: center;
      font-family: PingFangSC-Regular;
      font-size: 28rpx;
      color: #108ee9;
    }
  }
  .listbox {
    width: 100%;
    // padding: 0 30rpx!important;
    height: 500rpx;
    overflow: scroll;
    .li {
      font-family: PingFangSC-Regular;
      font-size: 28rpx;
      color: #212121;
      letter-spacing: 0;
      line-height: 40rpx;
      padding: 30rpx 30rpx;
      border-bottom: 1px solid #ccc;
    }
  }

  .input-view {
    /* #ifndef APP-PLUS-NVUE */
    display: flex;
    /* #endif */
    flex-direction: row;
    flex: 1;
    background-color: #f8f8f8;
    height: 30px;
    border-radius: 15px;
    padding: 0 15px;
    flex-wrap: nowrap;
    margin: 7px 0;
    line-height: 30px;
  }

  .input-uni-icon {
    line-height: 30px;
  }

  .nav-bar-input {
    height: 30px;
    line-height: 30px;
    /* #ifdef APP-PLUS-NVUE */
    width: 370rpx;
    /* #endif */
    padding: 0 5px;
    font-size: 14px;
    background-color: #f8f8f8;
  }

  .example-body {
    /* #ifndef APP-NVUE */
    display: block;
    /* #endif */
    padding: 0;
  }
}
.uni-dialog-title[data-v-6f54520a] {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 25px;
    width: 100% !important;
    height: 50px !important;
    // border: 1px solid red;
    background-color: #ccc !important;
}
.tab1{
	width: 18%;
	height: 170rpx;
	/* border: 1rpx solid red; */
	/* margin: 0 auto; */
	/* align-items: center; */
}
.tab1 > image{
	display: block;
	margin: 0 auto;
}

.tab1 > p {
	text-align: center;
	color: #F8F8F8;
}
.imgicon{
	margin-top: 10rpx;
	height: 158rpx;
	width: 20%;
}
.tab_list{
	width: 100%;
	height: 253px;
	/* border: 1rpx solid red; */
}
.tab_row{
	width: 100%;
	height: 33%;
	display: flex;
	/* border: 1rpx solid red; */
}
.tab_item{
	width: 25%;
		height: 100%;
		/* border: 1rpx solid red; */
		/* margin: 1rpx; */
		// border-right: 1rpx solid #C0C0C0;
		// border-bottom: 1rpx solid #C0C0C0;
}
.tab_item > p{
	color:#C0C0C0;
}
.tab_item .tab1{
	margin: 0;
	padding: 0;
}
</style>

