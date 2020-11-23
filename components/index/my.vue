<template>
	<view class="my">
		<!-- // 这是上面的一部分 -->
		<view class="my_top" :style="{'padding-top':Custom+'px'}">
			<heightstatusbar title="我的" jiancolor="#fff" textcolor="#fff"></heightstatusbar>
			<view class="small_bg">
				<view class="bg-plice bg_left"></view>
				<view class="bg_portrait"></view>
				<view class="bg-plice bg_right"></view>
			</view>
			<view class="mynickname">
				我的昵称
			</view>
			<view class="vipbox">
				<!--这个是装内容的 -->
				<view class="vipmidden">
					<view class="vip_title">
						<text class="vipEnglish_title">GOLD MEMBER</text>
						<text class="vip_time">有效期至2019-12-30</text>
					</view>
					<view class="viplevel">黄金会员</view>
				</view>
			</view>
		</view>
		<!-- // 这是下面的一部分 -->
		<view class="my-bot">
			<view class="Oblique_material">
				<view class="Oblique_plice Oblique_left"></view>
				<view class="Oblique_plice Oblique_right"></view>
			</view>
			<view class="my_select_title">
				<view class="titleicon"></view>
				<text class="text-title">我的权益</text>
			</view>
			<view class="myselect">
				<view class="cu-list grid indexselect" :class="['col-' + gridCol,gridBorder?'':'no-border']">
					<view class="cu-item" v-for="(item,index) in cuIconList" :key="index" v-if="index<gridCol*2">
						<!-- <view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]">
						</view> -->
						<image src="../../static/logo.png" class="slect_imgs"></image>
						<text class="select_title_plice">{{item.name}}</text>
						<text class="select_title_plice small_select_title">添加完善信息</text>
					</view>
				</view>
			</view>
		</view>
		<button open-type="getUserInfo" @getuserinfo="getuserinfo">授权</button>
	</view>
</template>

<script>
	import heightstatusbar from "@/components/heightstatusbar/heightstatusbar.vue"
	const app = getApp()
	export default{
		data(){
			return {
				gridCol: 4,
				gridBorder: false,
				cuIconList: [{
					cuIcon: 'cardboardfill',
					color: 'red',
					badge: 120,
					name: 'VR'
				}, {
					cuIcon: 'recordfill',
					color: 'orange',
					badge: 1,
					name: '录像'
				}, {
					cuIcon: 'picfill',
					color: 'yellow',
					badge: 0,
					name: '图像'
				}, {
					cuIcon: 'noticefill',
					color: 'olive',
					badge: 22,
					name: '通知'
				}, {
					cuIcon: 'upstagefill',
					color: 'cyan',
					badge: 0,
					name: '排行榜'
				}, {
					cuIcon: 'clothesfill',
					color: 'blue',
					badge: 0,
					name: '皮肤'
				}, {
					cuIcon: 'discoverfill',
					color: 'purple',
					badge: 0,
					name: '发现'
				}, {
					cuIcon: 'questionfill',
					color: 'mauve',
					badge: 0,
					name: '帮助'
				}, {
					cuIcon: 'commandfill',
					color: 'purple',
					badge: 0,
					name: '问答'
				}, {
					cuIcon: 'brandfill',
					color: 'mauve',
					badge: 0,
					name: '版权'
				}],
			}
		},
		components:{
			heightstatusbar
		},
		methods:{
			getuserinfo(){
				let _this = this
				let appid = 'wx2fd0ff4416ce6219'
				let SECRET = 'e1d79c653010b1b3991b4b26edb9d143'
				uni.getProvider({
					service:"oauth",
					success(resoauth) {
						console.log(resoauth)
						if (~resoauth.provider.indexOf('weixin')) {
							uni.login({
								provider: 'weixin',
								success(reslogin) {
									console.log(reslogin)
									// console.log(reslogin.code,1111)
									app.globalData.setcache("wxcode",reslogin.code)
									uni.getUserInfo({
										provider:"weixin",
										withCredentials:true,
										lang:"zh_CN",
										success(res) {
											console.log(res)
											console.log(res.rawData)
											console.log(res.signature)
											// uni.request({
											// 	url:`${_this.host}User/wechatLogin`,
											// 	method:"POST",
											// 	data:{
											// 		code:reslogin.code,
											// 		rawData:res.rawData,
											// 		signature:res.signature
											// 	},
											// 	success(resloginphp){
											// 		console.log(resloginphp)
											// 	}
											// })
										},
										fail(err){
											console.log(err)
										}
									})
									// uni.request({
									// 	url:`https://test.com/onLogin`,
									// 	data:{
									// 		code: reslogin.code
									// 	},
									// 	success(res) {
									// 		console.log(res)
									// 	},
									// 	fail(err){
									// 		console.log(err)
									// 	}
									// })
								},
								fail(err){
									console.log(err,222)
								}
							})
						}
					}
				})
			}
		},
		props:["Custom","StatusBar"],
		created() {
			// this.getuserinfo()
			uni.getStorage({
				key:"wxcode",
				success(res){
					console.log(res)
				},
				fail(err){
					app.globalData.navjump('/pages/registered/registered')
				}
			})
		}
	}
</script>

<style lang="less" scoped>
	.my{
		// min-height: 100vh;
		// 这是上面的一部分
		.my_top{
			// 后期北京颜色换成北京图片
			background-color: #585858;
			.small_bg{
				display: flex;
				background-color:deeppink;
				// margin-top: 33rpx;
				// margin-bottom: 20rpx;
				margin:33rpx 0 20rpx;
				.bg-plice{
					width: 40%;
					background-color:green;
				}
				.bg_portrait{
					width: 20%;
					height:142rpx;
					background-color:pink;
					border-radius:50%;
					border:10rpx solid #e9cf99;
				}
			}
			.mynickname{
				text-align: center;
				color:#fff;
				font-size: 35rpx;
				font-weight: bold;
			}
			.vipbox{
				padding: 0 60rpx;
				margin-top: 20rpx;
				.vipmidden{
					height:300rpx;
					background-color: #f5d892;
					border-radius:16rpx;
					.vip_title{
						display:flex;
						justify-content: space-around;
						padding-top:30rpx;
						.vipEnglish_title{
							font-size:38rpx;
							font-weight: bold;
							color:#b19898;
						}
						.vip_time{
							font-size: 30rpx;
							color:#fff;
						}
					}
					.viplevel{
						font-size: 38rpx;
						color:#a48860;
						padding-left: 20rpx;
						margin-top:5rpx;
					}
				}
			}
		}
		// 这是下面的一部分
		.my-bot{
			// height:200rpx;
			background-color:#fff;
			margin-top: -80rpx;
			.Oblique_material{
				display:flex;
				background-color:transparent;
				.Oblique_left{
					transform: rotate(17deg);
				}
				.Oblique_right{
					transform: rotate(-17deg);
				}
				.Oblique_plice{
					width: 50%;
					height:70rpx;
					background-color: #f9edd0;
				}
			}
			.my_select_title{
				display:flex;
				padding: 0 30rpx;
				margin-top:100rpx;
				.titleicon{
					width: 15rpx;
					height:50rpx;
					background-color: #f6d794;
					margin-right:40rpx;
					box-shadow:  10rpx 0 0 #fff6d3;
				}
				.text-title{
					font-size: 40rpx;
				}
			}
			.myselect{
				padding:0 30rpx;
				.slect_imgs{
					width: 74%;
					height:120rpx;
					border-radius: 50%;
					margin:0 auto;
				}
				.select_title_plice{
					font-size: 32rpx;
				}
				.small_select_title{
					color:#d5d5d5;
					margin-top:0;
					font-size: 28rpx;
				}
			}
		}
	}
</style>
