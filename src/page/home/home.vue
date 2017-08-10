<template lang="jade">
    div
      h1 home page
      p {{msg}}
      div.slider
        div 
          img(src='http://placehold.it/350x300?text=1')
        div 
          img(src='http://placehold.it/350x300?text=2')
        div 
          img(src='http://placehold.it/350x300?text=3')
</template>

  <script  type="es6">
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    $('.slider').slick({
      dots: true,
      autoplay: true
    });
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
h1
  color: red

</style>