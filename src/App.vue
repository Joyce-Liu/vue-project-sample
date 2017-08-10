<template lang="jade">
  #app
    //-header-
    headTop
    //-main-
    router-view
    //-footer-
    footerBottom
</template>

<script>
import headTop from "./components/header"
import footerBottom from "./components/footer"

export default {
  name: 'app',
  components:{
      headTop,
      footerBottom
  }
}
</script>

<style lang="scss">
  @import './style/slick.scss';
  @import './style/slick-theme.scss';
  @import './style/common.sass';
  .slider {
        width: 50%;
        margin: 10px auto;
    }

    .slick-slide {
      margin: 0px 20px;
    }

    .slick-slide img {
      width: 100%;
    }

    .slick-prev:before,
    .slick-next:before {
        color: black;
    }
</style>
