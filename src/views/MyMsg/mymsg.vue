<template>
  <div class="mymsg">
    <Header title="我的"/>
    <Tabbar />
  </div>
</template>

<script>
// @ is an alias to /src(组件的引入)
import Header from '@/components/Header/header.vue'
import Tabbar from '@/components/Tabbar/tabbar.vue'

export default {
  name: 'Mymsg',
  components: {
    Header,
    Tabbar
  }
}
</script>
