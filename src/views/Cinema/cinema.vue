<template>
  <div class="cinema">
    <Header title="影院"/>
    <Tabbar />
  </div>
</template>

<script>
// @ is an alias to /src(组件的引入)
import Header from '@/components/Header/header.vue'
import Tabbar from '@/components/Tabbar/tabbar.vue'

export default {
  name: 'Cinema',
  components: {
    Header,
    Tabbar
  }
}
</script>
