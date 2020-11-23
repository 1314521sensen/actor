<script>
	export default {
		globalData:{
			StatusBar:0,
			Custom:0,
			CustomBar:0,
			setcache(key,value){
				return uni.setStorage({
					key,
					data:value
				})
			},
			navjump(url){
				uni.navigateTo({
					url,
				})
			}
		},
		onLaunch: function() {
			const _this = this 
			uni.getSystemInfo({
					success: function(e) {
						// #ifndef MP
						_this.globalData.StatusBar = e.statusBarHeight;
						if (e.platform == 'android') {
							_this.globalData.CustomBar = e.statusBarHeight + 50;
						} else {
							_this.globalData.CustomBar = e.statusBarHeight + 45;
						};
						// #endif
						// #ifdef MP-WEIXIN
						_this.globalData.StatusBar = e.statusBarHeight;
						let custom = wx.getMenuButtonBoundingClientRect();
						_this.globalData.Custom = custom;
						_this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
						// #endif		
						// #ifdef MP-ALIPAY
						_this.globalData.StatusBar = e.statusBarHeight;
						_this.globalData.CustomBar = e.statusBarHeight + e.titleBarHeight;
						// #endif
					}
				})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import "colorui/main.css";
	@import "colorui/icon.css";
	/*每个页面公共css */
</style>
