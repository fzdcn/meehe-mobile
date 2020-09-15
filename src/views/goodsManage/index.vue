<template>
  <div class="home">
    <nav-bar :title="title"></nav-bar>
    <div class="content ignore">
      <div class="header-content">
        <div class="view-money text-center">商品总销量</div>
        <div class="number text-center text-bold">7,0000</div>
        <div class="add-number text-center">
          <div class="add-img">
            <img src="../../assets/img/add-nomber.png" alt="今日新增">
          </div>
          <div class="today-number text-bold text-break">今日下降 - 35</div>
        </div>
        <div class="content-detail">
          <div class="detail-info">
            <div class="text-center text-info">上架商品数</div>
            <div class="number-info">
              <div class="text-bold text-break">340</div>
            </div>
          </div>
          <div class="detail-info">
            <div class="text-center text-info">未上架商品数</div>
            <div class="number-info">
              <div class="text-bold text-break">1670</div>
            </div>
          </div>
        </div>
      </div>
      <div class="effect-list">
        <div class="my-effect">
          <div>
            <img src="../../assets/img/goods-left-img.png" alt="">
          </div>
          <div>商品列表</div>
          <div>
            <img src="../../assets/img/right-arrow.png" alt="">
          </div>
        </div>
        <hr>
        <div class="my-effect">
          <div>
            <img src="../../assets/img/sales-left-img.png" alt="">
          </div>
          <div>商品销量排行</div>
          <div>
            <img src="../../assets/img/right-arrow.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from '@/components/navBar'
export default {
  name: 'Home',
  components: {
    navBar
  },
  data() {
    return {
      title: '商品管理'
    }
  }
}
</script>
<style lang="stylus" scoped>
.home
  .ignore
    top 46px
  .content
    position relative
    width 100%
    margin auto
    .header-content
      position relative
      top 30px
      padding 40px 0px
      margin auto
      width 351px
      min-height 284px
      background #FFFFFF
      border-radius 4px 4px 8px 8px
      display flex
      flex-flow column nowrap
      .view-money
        width 100%
        font-size 12px
        color #999999
        line-height 16px
      .number
        margin-top 10px
        color #333333
        line-height 48px
        font-size 48px
      .add-number
        display flex
        justify-content center
        margin-top 10px
        div
          margin-right 10px
        .today-number
          font-size 12px
          color #00B578
          word-break break-all
          max-width 200px
          line-height 16px
        .add-img
          display flex
          align-items center
          width 16px
          height 16px
          background rgba(0, 181, 120, 0.08)
          border-radius 50%
          img
            width 100%
      .content-detail
        display flex
        position absolute
        bottom 40px
        width 100%
        justify-content space-around
        .detail-info
          width 48%
          .text-info
            margin-bottom 10px
            color #CCCCCC
            font-size 12px
          .number-info
            display flex
            justify-content center
            align-items center
            div
              &:nth-child(1)
                color #333333
                font-size 20px
    .effect-list
      position relative
      top 40px
      background #FFFFFF
      border-radius 8px
      width 351px
      margin 0 auto
      hr
        border none
        border-top 1px solid #EEEEEE
        width 331px
        height 1px
      .my-effect
        padding 0 10px
        height 56px
        display flex
        justify-content space-between
        align-items center
        div
          &:nth-child(1)
            display flex
            align-items center
            width 24px
            height 24px
            margin-right 10px
          &:nth-child(2)
            width 100%
            margin-right 10px
            font-size 16px
            color #333333
          &:nth-child(3)
            width 18px
            height 18px
</style>
