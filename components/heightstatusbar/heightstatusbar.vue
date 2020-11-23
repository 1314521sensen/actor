<template>
	<view class="heightstatusbar">
		<text class="lg text-gray cuIcon-back jiantou" :style="{color:jiancolor}"></text>
		<view class="barmidden" :style="{color:textcolor}" v-if="title">
			<text>{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		props:["title","jiancolor","textcolor"]
	}
</script>

<style lang="less" scoped>
	.heightstatusbar{
		display:flex;
		align-items: center;
		padding: 0 30rpx;
		font-size: 40rpx;
		.jiantou{
			color:#000;
		}
		.barmidden{
			flex:1;
			text-align: center;
		}
	}
</style>
