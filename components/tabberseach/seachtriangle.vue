<template>
	<view class="seachtriangle">
		<!-- seach_icon_rotate -->
		<text 
			class="lg text-gray seach_icon" 
			:class="routatebool?'seach_icon_rotate '+jianicon:jianicon"
			:style="{'transform':'rotate('+rotatenum+'deg'+')'}"
		></text>
		<text class="seach_title" v-if="title">{{title}}</text>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:["title","jianicon","routatebool","rotatenum"]
	}
</script>

<style lang="less" scoped>
	.seachtriangle{
		display:flex;
		padding:0 30rpx;
		margin-top:20rpx;
		.seach_icon{
			display: inline-block;
			background-color:-webkit-linear-gradient(45deg, #f43f3b, #ec008c);
			margin-right: 20rpx;
		}
		.seach_icon_rotate{
			// transform:rotate(180deg);
		}
		.seach_title{
			font-size: 30rpx;
			font-weight: bold;
		}
	}
</style>
