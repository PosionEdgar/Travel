<template>
	<div>
		<div class="banner" @click="handleBannerClick">
			<img class="banner-img" src="//img1.qunarzz.com/sight/p0/1603/9d/9d8c0e9a01bba92e90.water.jpg_600x330_18d5b736.jpg">
			<div class="banner-info">
				<div class="banner-title">锦绣中华民俗村(AAAAA景区)</div>
				<div class="banner-number">
					<span class="iconfont banner-icon">&#xe6f5;</span>
					74
				</div>
			</div>
		</div>
		<common-gallary 
			:imgs="imgs" 
			v-show="showGallary"
			@close="handleGallaryClose"
		></common-gallary>
	</div>
	
</template>
<script>

import CommonGallary from 'common/gallary/Gallary'

export default {
	name: 'Banner',
	data () {
		return {
			imgs:['http://img1.qunarzz.com/sight/p0/1601/2c/2c34835cb1432a2890.water.jpg_r_800x800_366b9f3b.jpg','http://img1.qunarzz.com/sight/p0/1601/2c/2c34835cb1432a2890.water.jpg_r_800x800_366b9f3b.jpg'],
			showGallary: false
		}
	},
	methods: {
		handleBannerClick () {
			return this.showGallary = true
		},
		handleGallaryClose () {
			return this.showGallary = false
		}
	},
	components: {
		CommonGallary
	}
}	
</script>
<style lang="stylus" scoped>
	.banner
		position relative
		overflow hidden
		height 0
		padding-bottom 55%
		.banner-img
			width 100%
		.banner-info
			display flex
			background-image linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.8))
			position absolute 
			left 0
			right 0
			bottom 0
			line-heigth .6rem
			color #fff
			.banner-title
				font-size .32rem
				padding 0 .2rem
				flex 1
			.banner-number
				height .32rem
				line-height .32rem
				margin-top .14rem
				margin-bottom .1rem
				padding 0 .4rem
				font-size .24rem
				border-radius .2rem
				background rgba(0,0,0,.8)	
				.banner-icon
					font-size .24rem
</style>
