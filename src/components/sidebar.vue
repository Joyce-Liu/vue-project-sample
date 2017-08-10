<template lang="jade">
div
    h1 hello sidebar
    p {{msg}}
</template>

<script type="es6">
  export default {
    name: 'sidebar',
    data () {
      return {
        msg: 'msg from sidebar'
      }
    }
  }
</script>

<!-- Add "scoped" attribute ato limit CSS to this component only -->
<style lang="sass" type="text/sass" scoped>
h1
    color: green
</style>