<template>
    <header class="header">
        <h1>{{title}}</h1>
    </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      default: '猫眼电影'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header
    width:100%
    h1
        width:inherit
        height:1.25rem
        line-height:1.25rem
        background-color:#e54847
        font-size:0.45rem
        text-align:center
        color:white
</style>
