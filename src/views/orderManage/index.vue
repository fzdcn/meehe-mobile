<template>
    <div class="home">
        <!-- <nav-bar :title="title"></nav-bar> -->
        <div class="content add-padding">
            <div class="header-content">
                <div class="view-num text-center">成交订单总数</div>
                <div class="number text-center text-bold">
                    <countTo separator="" :startVal='0' :endVal='orderManage.totalOrderNumbers ? orderManage.totalOrderNumbers : 0' :duration='2000'></countTo>
                </div>
                <div class="add-number text-center">
                    <div class="add-img">
                        <img src="../../assets/img/add-number.png" alt="今日新增" />
                    </div>
                    <div class="today-number text-bold text-break">今日新增 + {{ orderManage.totalDailyOrderNumbers }}</div>
                </div>
                <div class="content-detail">
                    <div class="detail-info">
                        <div class="text-center text-info">待发货订单数</div>
                        <div class="number-info">
                            <div class="text-bold text-break">{{ orderManage.toSendGoods }}</div>
                        </div>
                    </div>
                    <div class="detail-info">
                        <div class="text-center text-info">待收货订单数</div>
                        <div class="number-info">
                            <div class="text-bold text-break">{{ orderManage.forGoods }}</div>
                        </div>
                    </div>
                    <div class="detail-info">
                        <div class="text-center text-info">待收账款(元)</div>
                        <div class="number-info">
                            <div class="text-bold text-break">{{ orderManage.toReceivePayment }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="effect-list">
                <div @click="mySalesOrders" class="my-effect">
                    <div>
                        <img src="../../assets/img/order-left-img.png" alt="" />
                    </div>
                    <div>我卖出的订单</div>
                    <div>
                        <img src="../../assets/img/right-arrow.png" alt="" />
                    </div>
                </div>
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
            title: '订单管理',
            orderManage: {}
        }
    },
    methods: {
        // 我卖出得订单
        mySalesOrders() {
            window.location.href = `meehe://app.com?pageId=10011`
        },
        getOrderManage() {
            this.$http
                .get('/meeheapp/Statistics/getOrderManagementData.html', {})
                .then(({ data }) => {
                    console.log(data)
                    this.orderManage = data
                })
                .catch(err => {
                    console.log(err)
                })
        }
    },
    mounted() {
        this.getOrderManage()
    }
}
</script>
<style lang="stylus" scoped>
.content {
    .header-content {
        position: relative;
        margin: auto;
        padding-top: 30px;
        width: 351px;
        min-height: 284px;
        background: #FFFFFF;
        border-radius: 4px 4px 8px 8px;
        display: flex;
        flex-flow: column nowrap;

        .view-num {
            width: 100%;
            font-size: 12px;
            color: #999999;
            line-height: 16px;
        }

        .number {
            margin-top: 10px;
            color: #333333;
            line-height: 48px;
            font-size: 48px;
        }

        .add-number {
            display: flex;
            justify-content: center;
            margin-top: 10px;

            div {
                margin-right: 5px;
            }

            .today-number {
                font-size: 12px;
                color: #FF2D01;
                word-break: break-all;
                max-width: 200px;
                line-height: 16px;
            }

            .add-img {
                display: flex;
                align-items: center;
                width: 16px;
                height: 16px;
                background: rgba(255, 45, 1, 0.08);
                border-radius: 50%;

                img {
                    width: 100%;
                }
            }
        }

        .content-detail {
            display: flex;
            position: absolute;
            bottom: 40px;
            width: 100%;
            justify-content: space-around;

            .detail-info {
                width: 32%;

                .text-info {
                    margin-bottom: 10px;
                    color: #CCCCCC;
                    font-size: 12px;
                }

                .number-info {
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    div {
                        &:nth-child(1) {
                            color: #333333;
                            font-size: 20px;
                        }
                    }
                }
            }
        }
    }

    .effect-list {
        background: #FFFFFF;
        border-radius: 8px;
        width: 351px;
        margin: 10px auto;

        .my-effect {
            padding: 0 10px;
            height: 56px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            div {
                &:nth-child(1) {
                    display: flex;
                    align-items: center;
                    width: 24px;
                    height: 24px;
                    margin-right: 10px;
                }

                &:nth-child(2) {
                    width: 100%;
                    margin-right: 10px;
                    font-size: 16px;
                    color: #333333;
                }

                &:nth-child(3) {
                    display: flex;
                    align-items: center;
                    width: 18px;
                    height: 18px;
                }
            }
        }
    }
}
</style>
