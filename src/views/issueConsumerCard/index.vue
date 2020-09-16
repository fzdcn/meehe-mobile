<template>
  <div class="home">
    <nav-bar @showRight="showRight" :title="title">
      <van-icon name="add-o" slot="right" size="20" />
    </nav-bar>
    <div class="content ignore">
      <div class="header-content">
        <div class="view-money text-center">销量提升</div>
        <div class="number text-center text-bold">
          <countTo separator="" :startVal='0' :endVal='70000' :duration='1500'></countTo>
        </div>
        <div class="add-number text-center">
          <div class="add-img">
            <img src="../../assets/img/add-nomber.png" alt="今日新增" />
          </div>
          <div class="today-number text-bold text-break">今日新增 + 35</div>
        </div>
        <div class="content-detail">
          <div class="detail-info">
            <div class="text-center text-info">发行次数</div>
            <div class="number-info">
              <div class="text-bold text-break">340</div>
            </div>
          </div>
          <div class="detail-info">
            <div class="text-center text-info">触达人数</div>
            <div class="number-info">
              <div class="text-bold text-break">1670</div>
              <div class="text-break">+50</div>
              <div>
                <img src="../../assets/img/add-nomber.png" alt="触达人数" />
              </div>
            </div>
          </div>
          <div class="detail-info">
            <div class="text-center text-info">传播的达人数</div>
            <div class="number-info">
              <div class="text-bold text-break">867</div>
            </div>
          </div>
        </div>
      </div>
      <div class="effect-list">
        <div class="my-effect">
          <div>
            <img src="../../assets/img/create-card-left-img.png" alt="" />
          </div>
          <div>我创建的消费卡</div>
          <div>
            <img src="../../assets/img/right-arrow.png" alt="" />
          </div>
        </div>
        <hr />
        <div class="my-effect">
          <div>
            <img src="../../assets/img/release-history-left-img.png" alt="" />
          </div>
          <div>消费卡发行记录</div>
          <div>
            <img src="../../assets/img/right-arrow.png" alt="" />
          </div>
        </div>
      </div>
      <div class="tip">
        <div class="tip-img">
          <van-icon name="info-o" color="#999999" />
        </div>
        <div class="tip-text">
          作为商家，您可以发行消费卡，通过达人传播，吸引更多人来购买商品，进而提升销量
        </div>
      </div>
    </div>
    <van-popup v-model="showPicker" round position="bottom">
      <van-picker title="" show-toolbar :columns="columns" @confirm="onConfirm" @cancel="onCancel" @change="onChange" />
    </van-popup>
  </div>
</template>

<script>
import countTo from 'vue-count-to'
import navBar from '@/components/navBar'
export default {
  name: 'Home',
  components: {
    navBar,
    countTo
  },
  data() {
    return {
      title: '发行消费卡',
      showPicker: false,
      columns: ['创建消费卡', '发行消费卡']
    }
  },
  methods: {
    onConfirm(value, index) {
      this.$toast(`当前值：${value}, 当前索引：${index}`)
    },
    onChange(picker, value, index) {
      this.$toast(`当前值：${value}, 当前索引：${index}`)
    },
    onCancel() {
      this.showPicker = false
    },
    showRight() {
      this.showPicker = true
    }
  }
}
</script>
<style lang="stylus" scoped>
.home
  .ignore
    padding-top 70px
  .content
    .header-content
      position relative
      margin auto
      padding-top 30px
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
          color #FF2D01
          word-break break-all
          max-width 200px
          line-height 16px
        .add-img
          display flex
          align-items center
          width 16px
          height 16px
          background rgba(255, 45, 1, 0.08)
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
          width 32%
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
                margin-right 5px
              &:nth-child(2)
                color #FF2D00
                font-size 12px
              &:nth-child(3)
                width 10px
    .effect-list
      background #FFFFFF
      border-radius 8px
      width 351px
      margin 10px auto
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
            display flex
            align-items center
            width 18px
            height 18px
    .tip
      display flex
      width 351px
      margin 0px auto
      .tip-img
        margin-right 5px
        .van-icon-info-o
          font-size 16px
      .tip-text
        color #999999
        font-size 12px
        width 100%
        line-height 16px
</style>
