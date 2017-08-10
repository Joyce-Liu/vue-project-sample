<template lang="jade">
div
    h1 hello about
    p {{msg}}
</template>

<script type="es6">
  export default {
    name: 'about',
    data () {
      return {
        msg: 'msg from about'
      }
    }
  }
</script>

<!-- Add "scoped" attribute ato limit CSS to this component only -->
<style lang="sass" type="text/sass" scoped>
h1
    color: blue
</style>