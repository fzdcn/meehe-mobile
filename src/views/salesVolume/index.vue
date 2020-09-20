<template>
  <div class="home">
    <!-- <nav-bar :title="title"></nav-bar> -->
    <div class="content ignore">
      <div v-if="salesVolume.length" class="header-text">
        <div class="time-select">
          <van-dropdown-menu>
            <van-dropdown-item @change="change" v-model="selectValue" :options="option" />
          </van-dropdown-menu>
        </div>
        <div class="right-text">销量最高的10件商品</div>
      </div>

      <div class="sales-list">
        <div v-for="(item,index) in salesVolume" class="goods-detail" :key="index">
          <div class="goods-img">
            <van-image :src="item.coverPic" fit="fit"></van-image>
          </div>
          <div class="goods-info">
            <div :class="[index < 3 ? 'width1' : 'width2']" class="info-detail">
              <div class="goods-title text-over1">{{ item.itemName }}</div>
              <div class="sales-number">
                <div class="sales-title">销量</div>
                <div class="number text-break">{{ item.saleCount }}</div>
              </div>
            </div>
            <div v-if="index < 3" class="top-img"><img src="../../assets/img/top1.png" alt="top1"></div>
          </div>
        </div>
      </div>

      <div v-if="!salesVolume.length" class="no-content text-center">
        <div class="order-no-img text-center">
          <img src="../../assets/img/order-no.png" alt="暂无">
        </div>
        <div class="introduce1 text-bold">当前商品暂时未产生销量</div>
        <div class="introduce2">请在商品产生销量后，再来查看销量排行</div>
      </div>
    </div>
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
      title: '商品销量排行',
      selectValue: 7,
      option: [
        { text: '今日', value: 0 },
        { text: '近7天', value: 7 },
        { text: '近30天', value: 30 }
      ],
      sDate: '',
      eDate: '',
      salesVolume: []
    }
  },
  methods: {
    change(val) {
      this.getSalesVolume()
    },
    getSalesVolume() {
      this.$http
        .get('/meeheapp/item/sale/top/list.html', {
          params: {
            sDate: this.$moment()
              .subtract(this.selectValue, 'days')
              .format('YYYY-MM-DD'),
            eDate: this.$moment()
              .subtract(0, 'days')
              .format('YYYY-MM-DD')
          }
        })
        .then(({ data }) => {
          console.log(data)
          this.salesVolume = data.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted() {
    this.getSalesVolume()
  }
}
</script>
<style lang="stylus" scoped>
.width2
  width 100%
.width1
  width 250px
.home
  height 100vh
.content
  .header-text
    position relative
    margin auto
    display flex
    justify-content space-between
    padding 0 10px
    height 40px
    line-height 40px
    font-size 14px
    color #999999
    background-color #F2F1F6
    .time-select
      width 100px
      height 40px
      >>> .van-dropdown-menu__bar
        height 40px
        background-color #F2F1F6
        box-shadow none
        font-size 14px
        color #333333
  .sales-list
    background #FFFFFF
    margin 0 auto 10px auto
    .goods-detail
      margin-left 10px
      padding-right 10px
      height 80px
      border-bottom 1px solid #EEEEEE
      display flex
      align-items center
      .goods-img
        margin-right 10px
        height 60px
        width 60px
        border 1px solid #EFEFEF
        border-radius 6px
        .van-image
          height 60px
          width 60px
      .goods-info
        height 60px
        display flex
        justify-content space-between
        align-items center
        width 290px
        .info-detail
          height 60px
          display flex
          flex-flow column nowrap
          justify-content space-around
          .goods-title
            color #151515
            font-size 16px
            font-weight 500
          .sales-number
            color #999999
            font-size 12px
            display flex
            .sales-title
              width 30px
            .number
              width 220px
        .top-img
          width 24px
          height 26px
  // 暂无订单
  .no-content
    margin-top 150px
    .order-no-img
      margin auto
      width 220px
    .introduce1
      margin 10px 0
      color #333333
      font-size 16px
    .introduce2
      color #999999
      font-size 12px
</style>
