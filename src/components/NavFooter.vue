<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="" />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="">hahah</a><span>|</span> <a href="">Vue全栈</a><span>|</span>
      <a href="">React全家桶</a><span>|</span> <a href="">微信支付</a
      ><span>|</span>
      <a href="">H5 + 小程序</a>
    </div>
    <div class="copyright">
      © mi.com 京ICP证110507号
      <span class="liangwenjin">我叫梁文进 </span>京ICP备10046444号
      京公网安备11010802020134号 京网文[2020]0276-042号
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.footer {
  height: 234px;
  border-top: 4px solid #f60;
  background-color: #333;
  color: #999;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    a {
      color: #999;
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }
    margin-bottom: 13px;
  }
  .copyright {
    .liangwenjin {
      color: #f60;
    }
  }
}
</style>
