<template>
	<view class="registered_box">
		<view class="registered" :style="{'padding-top':Custom+'px'}">
			<heightstatusbar title="用户注册" jiancolor="#fff" textcolor="#fff"></heightstatusbar>
			<view class="registered_mdden">
				<view class="navlist">
					<view 
						class="nav_text"
						:class="navindex==index?'nav_text-active':''"
						v-for="(item,index) in navlist" 
						:key="index"
						:data-indexs="index"
						@tap="navjump"
					>{{item}}</view>
				</view>
				<!-- 这是个人注册 -->
				<view class="personal_registered">
					<form class="form" @submit="submit">
						<view 
							class="cu-form-group form-item" 
							v-for="(item,index) in personallist" 
							:key="index"
						>
							<view class="title">{{item.title}}</view>
							<input :placeholder="item.placetext" :name="item.name" class="inp"></input>
						</view>
						<view class="agreement">
							<view 
								class="agreement_radius" 
								:class="agreebol?'agreement_radius_active':''"
								@tap="agreetap"
							>
								<text class="lg text-gray cuIcon-check dui" v-if="agreebol"></text>
							</view>
							<text class="agree">我同意并接受</text>
							<text class="useragree">《用户协议》</text>
						</view>
						<view class="registered_btn">
							<button 
								class="cu-btn bg-gradual-blue margin-tb-sm lg"
								form-type="submit"
							>注册</button>
						</view>
					</form>
				</view>
				<!-- 这是企业注册 -->
				<view class="enterprise_registered">
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const app = getApp()
	import heightstatusbar from "@/components/heightstatusbar/heightstatusbar.vue"
	export default{
		data(){
			return {
				Custom:0,
				StatusBar:0,
				navlist:["个人注册","企业注册"],
				navindex:0,
				agreebol:false,
				// 个人注册列表
				personallist:[
					{
						"title":"姓名",
						placetext:"输入姓名",
						name:"username"
					},
					{
						"title":"手机号",
						placetext:"输入手机号",
						name:"userphone"
					},
					{
						"title":"邮箱",
						placetext:"输入您的邮箱",
						name:"useremail"
					},
					{
						"title":"年龄",
						placetext:"输入您的年龄",
						name:"userage"
					}
				]
			}
		},
		components:{
			heightstatusbar
		},
		methods:{
			navjump(e){
				// console.log(e.currentTarget.dataset)
				let {indexs} = e.currentTarget.dataset
				this.navindex = indexs
			},
			agreetap(){
				this.agreebol = !this.agreebol 
			},
			submit(e){
				console.log(e)
				let {userage,useremail,username,userphone} = e.detail.value
				this.getuserinfo()
			},
			
		},
		onLoad(){
			const _this = this
			_this.StatusBar = app.globalData.StatusBar
			_this.Custom = app.globalData.Custom.height
		}
	}
</script>

<style lang="less" scoped>
	.registered_box{
		min-height:100vh;
		background-color: #101623;
		color:#fff;
		.registered{
			.registered_mdden{
				padding:0 30rpx;
				margin-top:40rpx;
				.navlist{
					display:flex;
					justify-content: space-around;
					background-color:rgba(255,255,255,.2);
					border-radius:10rpx;
					.nav_text{
						font-size: 36rpx;
						font-weight: 540;
						padding:30rpx 0;
					}
					.nav_text-active{
						border-bottom: 5rpx solid #1795ff;
					}
				}
				// 这是个人注册
				.personal_registered{
					padding:0 10rpx;
					.form{
						.form-item{
							background-color:rgba(255,255,255,.2);
							padding:30rpx;
							border-radius:16rpx;
							border-top:0;
							margin-top:40rpx;
							.title{
								font-size:34rpx;
							}
							.inp{
								font-size: 30rpx;
							}
						}
						.agreement{
							display: flex;
							font-size: 30rpx;
							margin-top:50rpx;
							.agreement_radius{
								width:40rpx;
								height:40rpx;
								// background-color:pink;
								border-radius: 50%;
								font-size:28rpx;
								text-align: center;
								line-height: 40rpx;
								border:2rpx solid #fff;
								.dui{
									color:#fff;
								}
							}
							.agreement_radius_active{
								background-color: #1992ff;
								border:0;
							}
							.agree{
								margin: 0 15rpx 0 10rpx;
								
							}
							.useragree{
								color:#1992ff;
							}
						}
						.registered_btn{
							margin-top:20rpx;
							button{
								width: 100%;
								font-size: 34rpx;
								letter-spacing: .2em;
							}
						}
					}
				}
				// 这是企业注册
				.enterprise_registered{
					
				}
			}
		}
	}
</style>
