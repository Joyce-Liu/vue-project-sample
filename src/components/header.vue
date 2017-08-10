<template lang="jade">
    header This is a header
      .links
        //- router-link(to='/') Home page
        router-link(v-for='item in navItems' v-bind:to="item.link" v-bind:key='item.id') {{item.text}}
</template>

<script>
export default {
  data(){
    return{
      navItems: [
        {
          id: 0,
          link: '/',
          text: 'Home page'
        },
        {
          id: 1,
          link: '/about',
          text: 'About page'
        },
      ]
    }
  }
}
</script>

<style lang='sass' scoped>
  .links
        *
            margin: 5px
</style>
