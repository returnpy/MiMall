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
      <div class="ads-box"></div>
      <div class="banner"></div>
      <div class="product-box"></div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from '../components/ServiceBar'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar
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
          { id: 33, img: '/imgs/item-box-4.jpg', name: '小米x旗舰版' },
        ]
      ]
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
}
</style>
