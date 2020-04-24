<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="sub in item" :key="sub.id">
                    <a :href="'/#/product/' + sub.id">
                      <img :src="sub.img" />
                      {{ sub.name }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a href="">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="">生活 箱包</a>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOption">
          <swiper-slide v-for="item in slideList" :key="item.id">
            <a :href="'/#/product/' + item.id"><img :src="item.img"/></a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a
          :href="'/#/product/' + item.id"
          v-for="item in adsList"
          :key="item.id"
        >
          <img v-lazy="item.img" />
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img v-lazy="'/imgs/banner-1.png'" />
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35">
              <img src="imgs/mix-alpha.jpg" alt="" />
            </a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(arr, index) in phoneList" :key="index">
              <div class="item" v-for="item in arr" :key="item.id">
                <span :class="item.price % 3 ? 'new-pro' : 'kill-pro'">{{
                  item.price % 3 ? '新品' : '打折'
                }}</span>
                <div class="item-img">
                  <img :src="item.mainImage" alt="" />
                </div>
                <div class="item-info">
                  <h3>{{ item.name }}</h3>
                  <p>{{ item.subtitle }}</p>
                  <p class="price" @click="addCart(item.id)">
                    {{ item.price }}元
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <modal
      title="提示"
      sureText="查看购物车"
      btnType="1"
      modalType="medium"
      :showModal="showModal"
      @submit="goToCart"
      @cancel="showModal = false"
    >
      <template v-slot:body>
        <p>商品添加成功</p>
      </template>
    </modal>
  </div>
</template>

<script>
import ServiceBar from '../components/ServiceBar'
import Modal from '../components/Modal'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar,
    Modal
  },
  data () {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: 'cube',
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      },
      slideList: [
        {
          id: '42',
          img: '/imgs/slider/slide-1.jpg'
        },
        {
          id: '45',
          img: '/imgs/slider/slide-2.jpg'
        },
        {
          id: '46',
          img: '/imgs/slider/slide-3.jpg'
        }
      ],
      menuList: [
        [
          { id: 30, img: '/imgs/item-box-1.png', name: '小米CC9' },
          { id: 31, img: '/imgs/item-box-2.png', name: '小米8青春版本' },
          { id: 32, img: '/imgs/item-box-3.jpg', name: '小米9老年版' },
          { id: 33, img: '/imgs/item-box-4.jpg', name: '小米x旗舰版' },
        ],
        [
          { id: 30, img: '/imgs/item-box-1.png', name: '小米CC9' },
          { id: 31, img: '/imgs/item-box-2.png', name: '小米8青春版本' },
          { id: 32, img: '/imgs/item-box-3.jpg', name: '小米9老年版' },
          { id: 33, img: '/imgs/item-box-4.jpg', name: '小米x旗舰版' },
        ],
        [
          { id: 30, img: '/imgs/item-box-1.png', name: '小米CC9' },
          { id: 31, img: '/imgs/item-box-2.png', name: '小米8青春版本' },
          { id: 32, img: '/imgs/item-box-3.jpg', name: '小米9老年版' },
          { id: 33, img: '/imgs/item-box-4.jpg', name: '小米x旗舰版' },
        ],
        [
          { id: 30, img: '/imgs/item-box-1.png', name: '小米CC9' },
          { id: 31, img: '/imgs/item-box-2.png', name: '小米8青春版本' },
          { id: 32, img: '/imgs/item-box-3.jpg', name: '小米9老年版' },
          { id: 33, img: '/imgs/item-box-4.jpg', name: '小米x旗舰版' },
        ],
        [
          { id: 30, img: '/imgs/item-box-1.png', name: '小米CC9' },
          { id: 31, img: '/imgs/item-box-2.png', name: '小米8青春版本' },
          { id: 32, img: '/imgs/item-box-3.jpg', name: '小米9老年版' },
          { id: 33, img: '/imgs/item-box-4.jpg', name: '小米x旗舰版' },
        ],
        [
          { id: 30, img: '/imgs/item-box-1.png', name: '小米CC9' },
          { id: 31, img: '/imgs/item-box-2.png', name: '小米8青春版本' },
          { id: 32, img: '/imgs/item-box-3.jpg', name: '小米9老年版' },
          { id: 33, img: '/imgs/item-box-4.png', name: '小米x旗舰版' },
        ]
      ],
      adsList: [
        { id: 33, img: '/imgs/ads/ads-1.png' },
        { id: 45, img: '/imgs/ads/ads-2.jpg' },
        { id: 47, img: '/imgs/ads/ads-3.png' },
        { id: 48, img: '/imgs/ads/ads-4.jpg' },
      ],
      phoneList: [
      ],
      showModal: false
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    goToCart () {
      this.$router.push('/cart')
    },
    async addCart () {
      // const res = await this.axios.post('/carts', {
      //   productId,
      //   selected: true
      // })
      // console.log(res);
      this.showModal = true

    },
    async init () {
      const res = await this.axios.get('/products', {
        params: {
          categoryId: 100012,
          pageSize: 14
        }
      })
      res.list = res.list.slice(6, 14)
      this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)]
    }
  },
}
</script>

<style lang="scss">
@import '../assets/scss/config.scss';
@import '../assets/scss/mixin.scss';

.index {
  .swiper-box {
    .nav-menu {
      box-sizing: border-box;
      position: absolute;
      width: 264px;
      height: 451px;
      z-index: 9;
      padding: 26px 0;
      background-color: rgba($color: #000000, $alpha: 0.4);
      .menu-wrap {
        .menu-item {
          &:hover {
            .children {
              display: block;
            }
            background-color: $colorA;
          }
          .children {
            display: none;
            width: 962px;
            height: 451px;
            background-color: $colorG;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid $colorH;
            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;
              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
              }
              a {
                color: $colorB;
                font-size: 14px;
              }
              img {
                width: 42px;
                height: 35px;
                vertical-align: middle;
                margin-right: 15px;
              }
            }
          }
          height: 50px;
          line-height: 50px;
          a {
            color: #fff;
            font-size: 16px;
            padding-left: 30px;
            position: relative;
            display: block;
            &:after {
              position: absolute;
              content: '';
              @include bgImg(10px, 15px, '/imgs/icon-arrow.png');
              right: 30px;
              top: 17.5px;
            }
          }
        }
      }
    }
    .swiper-container {
      height: 451px;
      .swiper-button-prev {
        left: 274px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .ads-box {
    @include flex();
    margin: 14px 0 31px 0;
    a {
      width: 296px;
      height: 167px;
    }
  }
  .banner {
    margin-bottom: 50px;
  }
  .product-box {
    background-color: $colorJ;
    padding: 30px 0 50px;
    h2 {
      font-size: $fontF;
      height: 21px;
      line-height: 21px;
      color: $colorB;
      margin-bottom: 20px;
    }
    .wrapper {
      display: flex;
      .banner-left {
        margin-right: 16px;
        img {
          width: 224px;
          height: 619px;
        }
      }
      .list-box {
        .list {
          @include flex();
          justify-content: space-between;
          width: 986px;
          margin-bottom: 14px;
          &:last-child {
            margin-bottom: 0;
          }
          .item {
            width: 236px;
            height: 302px;
            background-color: $colorG;
            text-align: center;
            span {
              display: inline-block;
              width: 67px;
              height: 24px;
              font-size: 14px;
              line-height: 24px;
              color: $colorG;
              &.new-pro {
                background-color: #7ecf68;
              }
              &.kill-pro {
                background-color: #e82626;
              }
            }
            .item-img {
              img {
                height: 195px;
                width: 100%;
              }
            }
            .item-info {
              h3 {
                font-size: $fontJ;
                color: $colorB;
                line-height: $fontJ;
                font-weight: 700;
              }
              p {
                color: $colorD;
                line-height: 13px;
                margin: 6px auto 13px;
              }
              .price {
                color: #f20a0a;
                font-size: $fontJ;
                font-weight: 700;
                cursor: pointer;
                &:after {
                  @include bgImg(22px, 22px, '/imgs/icon-cart-hover.png');
                  content: '';
                  margin-left: 5px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
