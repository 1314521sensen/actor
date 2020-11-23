<template>
	<view class="indexentrance">
		<first :Custom="Custom" :StatusBar="StatusBar" v-if="tabberindex==0"></first>
		<seachbox :Custom="Custom" :StatusBar="StatusBar" v-if="tabberindex==1"></seachbox>
		<my :Custom="Custom" :StatusBar="StatusBar" v-if="tabberindex==4"></my>
		<view class="tabber_style">
			<view 
				class="tabber_item" 
				v-for="(item,index) in 5" 
				:key="index"
				:data-indexs="index"
				@tap="tabberjump"
			>
				<image class="tabber_image" :class="index==2?'tabber_active':''" src="../../static/logo.png"></image>
				<text class="tabber_text" v-if="index!==2">首页</text>
			</view>
		</view>
	</view>
</template>

<script>
	import first from "@/components/index/index.vue"
	import seachbox from "@/components/index/seachbox.vue"
	import my from "@/components/index/my.vue"
	const app = getApp()
	export default {
		data() {
			return {
				Custom:0,
				StatusBar:0,
				tabberindex:0
			}
		},
		onLoad() {

		},
		methods: {
			tabberjump(e){
				let {indexs} = e.currentTarget.dataset
				this.tabberindex = indexs
			}
		},
		components:{
			first,
			seachbox,
			my
		},
		created() {
			const _this = this
			_this.StatusBar = app.globalData.StatusBar
			_this.Custom = app.globalData.Custom.height
		}
	}
</script>

<style lang="less" scoped>
	.indexentrance{
		overflow: hidden;
		padding-bottom:100rpx;
	}
	.tabber_style{
		display:flex;
		justify-content: space-around;
		position: fixed;
		bottom:0;
		left:0;
		width: 100%;
		padding:30rpx 0;
		background-color: #fff;
		.tabber_item{
			text-align: center;
			.tabber_image{
				width:50rpx;
				height:50rpx;
			}
			.tabber_text{
				display:block;
				font-size: 30rpx;
			}
			.tabber_active{
				width: 75rpx;
				height:75rpx;
				margin-top:-10rpx;
			}
		}
	}
</style>
