<template>
  <div class="index">
    <Header />
    <Tabbar />
    <Tabswitch />
  </div>
</template>

<script>
// @ is an alias to /src(组件的引入)
import Header from '@/components/Header/header.vue'
import Tabbar from '@/components/Tabbar/tabbar.vue'
import Tabswitch from '@/components/Tabswitch/tabswitch.vue'

export default {
  name: 'Index',
  components: {
    Header,
    Tabbar,
    Tabswitch
  }
}
</script>
