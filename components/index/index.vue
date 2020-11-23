<template>
	<view class="first">
		<view class="first_title" :style="{'padding-top':Custom+'px','padding-bottom':StatusBar+'rpx'}">首页</view>
		<view class="seach_bx">
			<view class="cu-bar search">
				<view class="search-form round indexseach">
					<text class="cuIcon-search"></text>
					<input type="text" placeholder="大家都在搜'小图'" confirm-type="search"></input>
				</view>
			</view>
		</view>
		<view class="banner_box">
			<swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
			 :autoplay="true" interval="5000" duration="500">
				<swiper-item v-for="(item,index) in swiperList" :key="index">
					<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
					<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
				</swiper-item>
			</swiper>
		</view>
		<view class="indexselect_box">
			<view class="cu-list grid indexselect" :class="['col-' + gridCol,gridBorder?'':'no-border']">
				<view class="cu-item" v-for="(item,index) in cuIconList" :key="index" v-if="index<gridCol*2">
					<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]">
						<!-- <view class="cu-tag badge" v-if="item.badge!=0">
							<block v-if="item.badge!=1">{{item.badge>99?'99+':item.badge}}</block>
						</view> -->
					</view>
					<text>{{item.name}}</text>
				</view>
			</view>
		</view>
		<view class="sliding_actor_title">
			<view class="sliding_actor_left">
				<text class="sliding_actor_big_titler">优秀演员</text>
				<text class="sliding_actor_small_titler">拥有较多作品——王牌演员</text>
			</view>
			<view class="sliding_actor_right">
				<text class="guide">滑动>></text>
			</view>
		</view>
		<view class="sliding_actor_list">
			<scroll-view class="scroll-view">
				<view class="scroll-view_item">
					<image class="imgs"></image>
				</view>
			</scroll-view>
		</view>
		<view class="recommended_title">
			<text class="recommended_big_title">为您推荐</text>
			<text class="recommended_small_title">您喜爱的演员</text>
		</view>
		<view class="actor_list_box">
			<view class="actor_item">
				<view class="actor_left">
					<image class="actor_left_imgs"></image>
				</view>
				<view class="actor_right">
					<view class="actor_title">
						<text>李雅</text>
						<view class="actor_age">
							<text>25岁</text>
							<view class="actormedal">
								<image class="actormedal_imgs"></image>
							</view>
						</view>
					</view>
					<view class="actor_company">
						跳跳娱乐公司
					</view>
					<view class="actor_Representative_works">
						代表作品 《我是舞蹈家》《我是舞蹈家》《我是舞蹈家》《我是舞蹈家》
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				dotStyle: false,
				gridCol: 5,
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
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				}, {
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				}, {
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}],
			}
		},
		methods:{
			DotStyle(e) {
				this.dotStyle = e.detail.value
			},
		},
		props:["Custom","StatusBar"]
	}
</script>

<style lang="less" scoped>
	.first{
		background-color: #272a2c;
		color:#fff;
		.first_title{
			font-size: 40rpx;
			text-align:center
		}
		.seach_bx{
			.cu-bar{
				.indexseach{
					background-color: #626262;
					color:#9b9b9b;
					font-size:30rpx;
				}
			}
		}
		.banner_box{
			padding:0 30rpx;
			margin-top:20rpx;
			.screen-swiper{
				min-height:300rpx;
			}
		}
		.indexselect_box{
			.indexselect{
				background-color: transparent;
			}
		}
		.sliding_actor_title{
			padding-left:30rpx;
			display:flex;
			justify-content: space-between;
			align-items: center;
			.sliding_actor_left{
				.sliding_actor_big_titler{
					font-size: 34rpx;
					margin-right:20rpx;
				}
				.sliding_actor_small_titler{
					font-size: 24rpx;
					color:#818181;
				}
			}
			.sliding_actor_right{
				.guide{
					padding:15rpx 30rpx;
					background-color: #40c4ff;
					border-radius:30rpx 0 0 30rpx;
				}
			}
		}
		.sliding_actor_list{
			margin-top:60rpx;
			padding:0 30rpx;
			.scroll-view{
				.scroll-view_item{
					width: 320rpx;
					height:200rpx;
					background-color:pink;
					border-radius:20rpx;
					margin-right:20rpx;
					.imgs{
						width: 100%;
						height:100%;
					}
				}
			}
		}
		.recommended_title{
			padding: 0 30rpx;
			margin:60rpx 0;
			.recommended_big_title{
				font-size: 34rpx;
				margin-right:20rpx;
			}
			.recommended_small_title{
				font-size: 26rpx;
				color:#818181;
			}
		}
		.actor_list_box{
			padding:0 30rpx;
			.actor_item{
				display:flex;
				.actor_left{
					width: 240rpx;
					// background-color:green;
					margin-right:20rpx;
					.actor_left_imgs{
						width: 100%;
						height:100%;
					}
				}
				.actor_right{
					flex:1;
					// background-color:pink;
					padding:20rpx 0;
					.actor_title{
						display:flex;
						.actor_age{
							display:flex;
							align-items: center;
							margin-left:30rpx;
							.actormedal{
								width: 40rpx;
								height:40rpx;
								// background-color:yellow;
								margin-left:20rpx;
								.actormedal_imgs{
									width: 100%;
									height:100%;
								}
							}
						}
					}
					.actor_company{
						margin:20rpx 0 10rpx;
					}
				}
			}
		}
	}
</style>
