<template>
	<div>
		<div class="banner" @click="handleBannerClick">
			<img class="banner-img" :src="this.bannerImg">
			<div class="banner-info">
				<div class="banner-title">{{this.sightName}}</div>
				<div class="banner-number">
					<span class="iconfont banner-icon">&#xe6f5;</span>
					{{this.gallaryImgs.length}}
				</div>
			</div>
		</div>
		<fade-animation>
			<common-gallary 
				:imgs="gallaryImgs" 
				v-show="showGallary"
				@close="handleGallaryClose"
			></common-gallary>
		</fade-animation>
	</div>
	
</template>
<script>

import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'


export default {
	name: 'Banner',
	props: {
		gallaryImgs: Array,
		bannerImg: String,
		sightName: String
	},
	data () {
		return {
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
		CommonGallary,
		FadeAnimation
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
