<template>
	<view class="content">
		<view class="title_swiper">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item>
					<view class="swiper-item">
						<image src="../../../static/img/qa.png" mode=""></image>
					</view>
				</swiper-item>
				<swiper-item >
					<view class="swiper-item">
						<image src="../../../static/img/release.png" mode=""></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="../../../static/img/qa.png" mode=""></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="../../../static/img/release.png" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
	<view class="tab_title_view" >
		<view class="tab1"v-for="(item,index) in tablist" :key="index">
			<image :src="item.icon" mode="" class="imgicon"></image>
			<p>{{item.title}}</p>
		</view>
	</view>
	<view class="tab_list">
		<view class="tab_row">
			<view class="tab_item tab1">
				<image src="../../../static/img/qa.png" mode="" class="imgicon"></image>
				<p>公司介绍s</p>
			</view>
			<view class="tab_item tab1"  @click="open">
				<!-- <button @click="open">打开弹窗</button> -->
				<image src="../../../static/img/qa.png" mode="" class="imgicon"></image>
				<p>公司介绍1</p>
			</view>
			<view class="tab_item tab1">
				<image src="../../../static/img/qa.png" mode="" class="imgicon"></image>
				<p>公司介绍2</p>
			</view>
			<view class="tab_item tab1">
				<image src="../../../static/img/qa.png" mode="" class="imgicon"></image>
				<p>公司介绍3</p>
			</view>
		</view>
		<view class="tab_row" v-for="(item,index) in listImg" :key="index">
			<view class="tab_item tab1" v-for="(item1,index1) in item" :key="index1" @click="toggleMessage(item1.title)" >
				<image :src="item1.icon" mode="" class="imgicon"></image>
				<p>{{item1.title}}</p>
			</view>	
		</view>
	
		<view class="tab_row" v-for="(item) of listImg1">
			<view class="tab_item tab1" v-for="(item1,index1) in item" :key="index1">
				<image :src="item1.icon" mode="" class="imgicon"></image>
				<p>{{item1.title}}</p>
			</view>
		</view>
		<!-- <windowView :direction="direction" :uptag="uptag" :bodyBtn="true"  style="border: 1px solid green;" v-show="uptag"/> -->
		<!-- 消息提示 -->
				<!-- <uni-popup ref="popupMessage" type="message">
					<uni-popup-message :type="msgType" :message="message" :duration="700" />
				</uni-popup>
				<uni-popup ref="popupMessage" type="message">
							<uni-popup-message :type="msgType" :message="message" :duration="700" />
				</uni-popup>
				<!-- 对话框-->
				<!-- <uni-popup ref="popupDialog" type="dialog">
					<uni-popup-dialog :type="msgType" title="通知" content="欢迎使用 uni-popup!" :before-close="true" @confirm="dialogConfirm" @close="dialogClose" />
				</uni-popup> -->
				<!-- <button @click="open">打开弹窗</button> -->
				<uni-popup ref="popup" type="center" safe-area="false">
					<uni-popup-dialog mode="input" message="成功消息" :duration="2000" :before-close="false" @close="close" style="color: #18BC37;">
						<windowView ref="dialogSonName" mode="input" @close="dialogCloseCarnum" @confirm="dialogInputConfirmCarnum"></windowView>
	
					</uni-popup-dialog>
				</uni-popup>
	</view>
	</view>
</template>

<script>
	import windowView from '../../../components/windowView.vue'
export default {
	data() {
		return {
			tablist:[
				{icon:'../../../static/img/tabbar/guanzhu.png',title:'功能1'},
				{icon:'../../../static/img/tabbar/guanzhu.png',title:'功能2'},
				{icon:'../../../static/img/tabbar/guanzhu.png',title:'功能3'},
				{icon:'../../../static/img/tabbar/guanzhu.png',title:'功能4'},
				{icon:'../../../static/img/tabbar/guanzhu.png',title:'功能5'}
			],
			listImg:[
				[
					{icon:'../../../static/img/tabbar/guanzhu.png',title:'功能A'},
					{icon:'../../../static/img/tabbar/guanzhu.png',title:'功能B'},
					{icon:'../../../static/img/tabbar/guanzhu.png',title:'功能C'},
					{icon:'../../../static/img/tabbar/guanzhu.png',title:'功能D'}
				]
			],
			listImg1:[
				[
					{icon:'../../../static/img/tabbar/guanzhu.png',title:'功能I'},
					{icon:'../../../static/img/tabbar/guanzhu.png',title:'功能J'}
				]
			],
		update:false,
		direction:'bottom',
		uptag:false,
		popup:'',
		message:'',
		msgType:''
		};
	},
	onLoad() {},
	methods: {
		dialogConfirm() {
					this.$refs.popupMessage.open();
					
					this.$refs['popupDialog'].close();
				},
		toggleMessage(title){
			if(title === '功能B'){
				open();
			}
		},
		open(){
			console.log(this.$refs.popup)
		        // 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
		        this.$refs.popup.open('center')
		      },
		close(data) {
					this.Uptag = data
				},
				
						dialogClose() {
									this.msgType = 'info';
									this.message = '点击了对话框的取消按钮';
									this.$refs.popupMessage.open();
									
									this.$refs.popupDialog.close();
								}
	},
	components:{
		windowView
	}
};
</script>

<style>
.content {
	width: 100%;
	height: 100%;
}
.title_swiper{
	width: 100%;
	height: 200px;
	/* border: 1px solid red; */
}
/deep/ .uni-swiper-dot-active{
	background: #4CD964 !important;
}
.tab_title_view{
	height: 170rpx;
	width: 100%;
	/* border: 1rpx solid red; */
	background: #333333;
	display: flex;
	padding-top: 30rpx;
	padding-bottom: 30rpx;
	/* padding-x: 20rpx; */
	justify-content: space-around;
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
	height: 110rpx;
	width: 20%;
}
.tab_list{
	width: 100%;
	/* height: 253px; */
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
		border-right: 1rpx solid #C0C0C0;
		border-bottom: 1rpx solid #C0C0C0;
}
.tab_item > p{
	color:#C0C0C0;
}
.tab_item .tab1{
	margin: 0;
	padding: 0;
}
</style>
