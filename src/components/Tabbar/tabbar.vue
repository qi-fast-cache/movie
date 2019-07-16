<template>
  <footer class="tabbar">
      <div class="tabbar-wrap">
          <ul>
              <router-link tag="li" to="/movie">
                  <span class="iconfont icon-dianying icon-size"></span>
                  <br>
                  <span>电影</span>
              </router-link>
              <router-link tag="li" to="/cinema">
                  <span class="iconfont icon-yingyuan icon-size"></span>
                  <br>
                  <span>影院</span>
              </router-link>
              <router-link tag="li" to="/mymsg">
                  <span class="iconfont icon-wode icon-size"></span>
                  <br>
                  <span>我的</span>
              </router-link>
          </ul>
      </div>
  </footer>
</template>

<script>
export default {
  name: 'Tabbar'
}
</script>

<style lang="stylus" scoped>
    .tabbar
        width:100%
        .tabbar-wrap ul
            position:fixed
            bottom:0;
            display:flex
            border-top:1px #ccc solid
            width:100%
            li
                flex:1
                box-sizing:border-box
                width:0.625rem
                height 1.25rem
                text-align:center
                padding:.1rem
                .icon-size
                    display:inline-block
                    margin-bottom:.1rem
                    font-size:0.7rem
            .router-link-active
                color:red
</style>
