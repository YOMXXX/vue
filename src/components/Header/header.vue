<template>
<div>
  <div :class="{header: true,blurActived: detailShow}">
    <div class="shop">
      <div class="tou">
        <img src="https://avatars.githubusercontent.com/u/2918581?v=3" alt="">
      </div>
      <div class="des">
        <div class="shopName">
          <div class="famous">品牌</div>
          <div class="name">{{shopName}}</div>
        </div>
        <div class="deliverWay">{{deliverWay}}&nbsp;/&nbsp;{{deliverTime}}</div>
        <div class="coupon">
          <i></i>
          <span class="intro">{{couponIntro}}</span>
        </div>
      </div>
      <div
       class="couponDetail"
       @click="openDetails"
      >5个 ></div>
      <span class="blur"></span>
    </div>
    <div class="notice" @click="openDetails">
      <span class="icon"></span>
      <div class="con">{{noticeCon}}</div>
      <i>></i>
    </div>
  </div>
  <div class="category">
    <div class="con">
      <router-link to="/goods" class="routes goods" >商品</router-link>
      <router-link to="/arguements" class="routes arguement">评论</router-link>
      <router-link to="/buyers" class="routes buyers">商家</router-link>
    </div>
    <router-view></router-view>
  </div>
  <transition name="fade">
    <div
     v-if="detailShow"
     class="details"
      >
      <div class="detailWrap">
        <div class="detailMain">
          <div class="name">{{shopName}}</div>
          <v-stars :score=3.9 />
          <!-- 粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊
          粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊
          粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊
          粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊
          粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊
          粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊
          粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊
          粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊 -->
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
        </div>
        <div class="detailClose">
          <i
           class="icon-close"
           @click="closeDetails"
           >X</i>
        </div>
      </div>
    </div>
  </transition>
</div>
</template>

<script>
import Stars from 'components/stars/stars';
export default {
  data () {
    return {
      'deliverWay': seller.seller.description,
      'deliverTime': '38分钟到达',
      'couponIntro': '在线支付满28减5，满50减10',
      'detailShow': false,
      'header': 'true',
      'noticeCon': '粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊粥品香坊',
      'shopName': '粥品香坊（大运村）'
    }
  },
  components: {
    'v-stars': Stars
  },
  props: {
    msgg: {
      type: Object
    }
  },
  beforeCreate: function () {
    // console.log(this)
  },
  created: function () {
    // console.log(this.$el)
  },
  mounted: function () {
    // console.log(seller)
    this.$router.push({
      path: '/goods',
      component: require('../category/goods')
    })
  },
  methods: {
    'openDetails': function () {
      this.detailShow = !this.detailShow
    },
    'closeDetails': function () {
      this.detailShow = false
    }
  }
}
</script>

<style scoped>
  .blurActived {
    filter: blur(10px);
    overflow: hidden;
  }
  .blur{
    width: 100%;
    height: 170px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    filter: blur(10px);
    z-index: -1;
    background: url(../../assets/logo.png) center top no-repeat;
    background-size: cover;
  }
  .shop{
    position: relative;
    height:120px;
    background: rgba(7, 17, 27, .5);
  }
  .tou{
    float: left;
    display: inline-block;
    margin: 24px 16px 18px 24px;
    width: 64px;
    height: 64px;
    border-radius: 2px;
  }
  .des{
    font-size: 0;
    height: 64px;
    text-align: left;
    margin: 25px 6px 8px 0;
    float: left;
    width: 200px;
    display: inline-block;
  }
  .des .shopName{
    height: 16px;
    margin: 0 6px 8px 0;
    display: inline-block;
  }
  .des div {
    vertical-align: top;
  }
  .des .famous{
    margin-right: 6px;
    padding: 2px 3px;
    display: inline-block;
    font-size: 12px;
    color: rgb(255,255,255);
    line-height: 12px;
    text-align: center;
    background:red;
  }
  .des .name{
    display: inline-block;
    font-size: 16px;
    color: rgb(255,255,255);
    font-weight: bold;
    line-height: 16px;
  }
  .des .deliverWay{
    margin-bottom: 10px;
    font-size: 12px;
    font-weight: 200;
    line-height: 12px;
    color: rgb(255,255,255);
  }
  .coupon{
    line-height: 23px;
    height: 20px;
    color: rgb(255, 255, 255);
  }
  .coupon i{
    display: inline-block;
    width: 15px;
    height: 15px;
    background: url(https://avatars.githubusercontent.com/u/2918581?v=3) center top no-repeat;
    margin:0 4px 0 0;
    background-size: cover;
    vertical-align: top;
  }
  .coupon .intro{
    font-size: 10px;
    vertical-align: super;
    line-height: 10px;
  }
  .couponDetail{
    position: absolute;
    right: 12px;
    bottom: 24px;
    border-radius: 17px;
    display: inline-block;
    height: auto;
    font-size: 10px;
    color: rgb(255, 255, 255);
    font-weight: 200;
    line-height: 12px;
    background: rgba(0, 0, 0, .2);
    padding: 7px 14px;
    text-align: center;
  }
  .category .con{
    background: #ffffff;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
    height: 40px;
    display: flex;
    justify-content: flex-start;
  }
  .routes {
    font-size: 14px;
    color: rgb(77, 85, 93);
    line-height: 36px;
    text-align: center;
  }
  .router-link-active{
    color: rgb(240, 20, 20);
  }
  .details {  
    background: rgba(7, 17, 27, .8);
    width: 100%;
    height: 100%;
    position: fixed;
    overflow: auto;
    z-index: 10;
    left: 0;
    top: 0;
  }
  .notice {
  position: relative;
  height: auto;
  background: rgba(7, 17, 27, .2);
  padding: 12px;
  font-size: 0;
}
.notice .icon{
  margin-right: 4px;
  vertical-align: middle;
  display: inline-block;
  width: 33px;
  height: 18px;
  background: url(../../assets/bulletin@3x.png) center top no-repeat;
  background-size: cover;
}
.notice .con {
  vertical-align: middle;
  width: 82%;
  display: inline-block;
  margin-right: 4px;
  font-size: 10px;
  color: rgb(255,255,255);
  font-weight: 200;
  line-height: 10px;
  overflow-x: hidden; 
  text-overflow: ellipsis;
  white-space: nowrap;
}
.notice i{
  vertical-align: middle;
  font-size: 12px;
  color: #ffffff;
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 23px;
  margin-top: -9px;
}
.detailWrap {
  min-height: 100%;
}
.detailMain {
  font-size: 12px;
  font-weight: 200;
  line-height: 24px;
  color: rgb(255, 255, 255);
  padding-bottom: 64px;
  margin-top: 64px;
}
.detailClose {
  position: relative;
  width: 32px;
  height: 32px;
  margin: -64px auto;
  text-align: center;
  line-height: 32px;
  color: #ffffff;
}
.detailMain .name {
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  color: rgb(255, 255, 255);
  line-height: 16px;
  margin-top: 64px;
}
.detailMain .title {
  width: 80%;
  display: flex;
  margin: 0 36px 24px 36px;
  justify-content: space-between;
}
.detailMain .title .line {
  flex: 1;
  width: 112px;
  height: 0;
  border: 1px solid rgba(255, 255, 255, .2);
  margin-top: 12px;
}
.detailMain .title .text {
  width: 107px;
  text-align: center; 
  font-size: 14px;
  margin: 0 12px;
  color: #ffffff;

}
</style>
