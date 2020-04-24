<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="#">小米商城</a>
          <a href="#">MUI</a>
          <a href="#">云服务</a>
          <a href="#">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="#" v-if="username">{{ username }}</a>
          <a href="#" v-if="!username" @click.prevent="login">登陆</a>
          <a href="#" v-if="username">我的订单</a>
          <a href="#" class="my-cart" @click.prevent="goToCart"
            ><span class="icon-cart"></span>购物车({{ cartCount }})</a
          >
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="item in phoneList" :key="item.id">
                  <a :href="'/#/product/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" :title="item.subtitle" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi手机</span>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="#" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/00f597a8725eee9245e383c35cd4f7b6.jpg"
                      />
                    </div>
                    <div class="pro-name">Redmi 智能电视 MAX 98"</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="#" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/00f597a8725eee9245e383c35cd4f7b6.jpg"
                      />
                    </div>
                    <div class="pro-name">Redmi 智能电视 MAX 98"</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="#" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/00f597a8725eee9245e383c35cd4f7b6.jpg"
                      />
                    </div>
                    <div class="pro-name">Redmi 智能电视 MAX 98"</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="#" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/00f597a8725eee9245e383c35cd4f7b6.jpg"
                      />
                    </div>
                    <div class="pro-name">Redmi 智能电视 MAX 98"</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="#" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/00f597a8725eee9245e383c35cd4f7b6.jpg"
                      />
                    </div>
                    <div class="pro-name">Redmi 智能电视 MAX 98"</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="#" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/00f597a8725eee9245e383c35cd4f7b6.jpg"
                      />
                    </div>
                    <div class="pro-name">Redmi 智能电视 MAX 98"</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <button></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      phoneList: [],
    }
  },
  filters: {
    currency (val) {
      if (!val) return '0.00'
      return '¥' + val.toFixed(2) + '元'
    }
  },
  mounted () {
    this.getProductList()
  },
  methods: {
    login () {
      this.$router.push('/login')
    },
    async getProductList () {
      const data = await this.axios.get('/products', {
        params: {
          categoryId: '100012',
          pagesize: 6
        }
      })
      this.phoneList = data.list.slice(0, 6)
    },
    goToCart () {
      this.$router.push('/cart')
    }
  },
  computed: {
    ...mapState(['username', 'cartCount']),
  },
}
</script>

<style lang="scss">
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';

.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333;
    color: #b0b0b0;
    .container {
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        margin-right: 0;
        width: 110px;
        background-color: #f60;
        text-align: center;
        color: #fff;
        .icon-cart {
          // display: inline-block;
          // width: 16px;
          // height: 12px;
          // background: url('/imgs/icon-cart-checked.png') no-repeat center;
          // background-size: contain;
          @include bgImg(16px, 12px, '/imgs/icon-cart-checked.png');
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      position: relative;
      height: 112px;
      @include flex();
      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #f60;
        a {
          display: inline-block;
          width: 110px;
          &:before {
            content: '';
            @include bgImg(55px, 55px, '/imgs/mi-logo.png', 55px);
            transition: margin 0.2s;
          }
          &:after {
            content: '';
            display: inline-block;
            @include bgImg(55px, 55px, '/imgs/mi-home.png', 55px);
          }
          &:hover:before {
            margin-left: -55px;
            transition: margin 0.2s;
          }
        }
      }
      .header-menu {
        display: inline-block;
        padding-left: 209px;
        width: 643px;
        .item-menu {
          display: inline-block;
          color: #333;
          font-weight: 700;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
              z-index: 99;
              transition: all 0.5s;
            }
          }
          .children {
            background-color: #fff;
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0 7px 6px 0 rgba($color: #000000, $alpha: 0.11);
            height: 0px;
            opacity: 0;
            overflow: hidden;
            transition: all 0.5s;
            z-index: 99;
            .product {
              position: relative;
              &:before {
                content: '';
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
                width: 1px;
              }
              &:last-child::before {
                display: none;
              }
              float: left;
              width: (100% / 6);
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              a {
                display: inline-block;
              }
              img {
                height: 111px;
                margin-top: 26px;
              }
              .pro-img {
                height: 137px;
              }
              .pro-name {
                font-weight: 700;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }
              .pro-price {
                font-weight: 700;
                color: $colorA;
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            box-sizing: border-box;
            border: none;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            // outline: none;
            padding-left: 14px;
          }
          button {
            @include bgImg(54px, 51px, '/imgs/icon-search.png', 55px);
            background-size: 18px 18px;
            background-position: 18px 16px;
            border: none;
          }
        }
      }
    }
  }
}
</style>