<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" 
                     v-for="item of page" 
                     :key="item.id"
                >
                    <div class="icon-img">
                    <img class="icon-img-content" :src="item.imgUrl" /> 
                    </div> 
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default {
    name: 'HomeIcons',
    data () {
        return {
            iconList: [
                {
                    id:'001',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    desc:'景点门票'
                },{
                    id:'002',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                    desc:'一日游'
                },{
                    id:'003',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                    desc:'上海必玩'
                },{
                    id:'004',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
                    desc:'游乐场'
                },{
                    id:'005',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/ea/01d081dacb03cc02.png',
                    desc:'赏秋色'
                },{
                    id:'006',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1805/57/1e29afd06f881102.png',
                    desc:'普陀山'
                },{
                    id:'007',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
                    desc:'上海欢乐谷'
                },{
                    id:'008',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
                    desc:'动物园'
                },{
                    id:'009',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png',
                    desc:'上海迪士尼'
                },{
                    id:'010',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
                    desc:'全部玩乐'
                }

            ]
        }
    },
    computed:{
        pages () {
            const pages = [];
            this.iconList.forEach((item, index) => {
                const page = Math.floor(index / 8)
                if(!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}    
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    @import '~styles/mixins.styl'; 
    .icons >>> .swiper-container
        padding-bottom 50%
        height 0
    .icon
        position relative
        float left
        width 25%
        padding-bottom 25%
        height 0
        overflow hidden
        .icon-img
            position absolute
            left 0
            top 0
            right 0
            box-sizing border-box
            bottom .44rem
            .icon-img-content
                height 100%
                display block
                margin  0 auto
        .icon-desc
            position absolute
            left 0
            right 0
            bottom 0
            height .44rem
            line-height .44rem
            color $darkTextColor
            text-align center
            ellipsis()
</style>
