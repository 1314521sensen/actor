<template>
	<view class="seach_box">
		<view class="first_title" :style="{'padding-top':Custom+'px','padding-bottom':StatusBar+'rpx'}">搜索</view>
		<view class="seach_inp">
			<view class="cu-bar search">
				<view class="search-form round indexseach">
					<text class="cuIcon-search"></text>
					<input type="text" placeholder="大家都在搜'小图'" confirm-type="search"></input>
				</view>
			</view>
		</view>
		<seachtriangle jianicon="cuIcon-usefullfill" :routatebool="true" rotatenum="180"></seachtriangle>
		<view class="navlist">
			<view class="nav-item" v-for="(item,index) in 3" :key="index">
				<view class="item-first">性别</view>
				<scroll-view class="scroll-view">
					<view class="scroll_item">
						<text class="item_text">全部</text>
						<text class="item_text">男</text>
						<text class="item_text">女</text>
					</view>
				</scroll-view>
			</view>
		</view>
		<seachtriangle jianicon="cuIcon-usefullfill" :routatebool="true" title="推荐热点" rotatenum="90"></seachtriangle>
		<view class="Recommended_list">
			<scroll-view class="scroll-Recommended" :scroll-x="true">
				<view class="Recommended_box" :style="{'width':339*5+'rpx'}">
					<view class="Recommended_item" v-for="(item,index) in 5" :key="index">
						<image class="imgs"></image>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="seach_bot_list">
			<view class="seach_item" v-for="(item,index) in 10" :key="index">
				<text class="item-left">1</text>
				<text class="item-right">2020 初雪</text>
			</view>
		</view>
	</view>
</template>

<script>
	import seachtriangle from "@/components/tabberseach/seachtriangle.vue"
	export default{
		data(){
			return {
				
			}
		},
		props:["Custom","StatusBar"],
		components:{
			seachtriangle
		}
	}
</script>

<style lang="less" scoped>
	.seach_box{
		background-color: #272a2c;
		color:#fff;
		.first_title{
			font-size: 40rpx;
			text-align:center
		}
		.seach_inp{
			.indexseach{
				background-color: #626262;
				color:#9b9b9b;
				font-size:30rpx;
			}
		}
		.navlist{
			padding: 0 30rpx;
			margin-bottom:60rpx;
			.nav-item{
				display:flex;
				align-items: center;
				margin-top: 40rpx;
				.item-first{
					width: 15%;
					padding:5rpx 0;
					text-align:center;
					background-color: #626262;
					border-radius:16rpx;
					margin-right:40rpx;
					font-size:30rpx;
				}
				.scroll-view{
					width: 80%;
					.scroll_item{
						.item_text{
							margin-right:40rpx;
							font-size: 26rpx;
							&:last-child{
								margin-right:0;
							}
						}
					}
				}
			}
		}
		.Recommended_list{
			padding:0 30rpx;
			margin:60rpx 0 30rpx;
			.scroll-Recommended{
				.Recommended_box{
					display:flex;
					.Recommended_item{
						width: 339rpx;
						height:290rpx;
						background-color:pink;
						border-radius: 0 30rpx 30rpx 30rpx; 
						margin-right:30rpx;
						&:last-child{
							margin-right: 0;
						}
						.imgs{
							width: 100%;
							height:100%;
						}
					}
				}
			}
		}
		.seach_bot_list{
			padding:0 30rpx;
			.seach_item{
				margin-bottom:20rpx;
				&:last-child{
					margin-bottom:0 ;
				}
				.item-left{
					margin-right:15rpx;
				}
				.item_right{
					
				}
			}
		}
	}
</style>
