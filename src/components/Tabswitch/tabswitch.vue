<template>
    <nav class="nav">
        <ul>
            <router-link tag="li" to="/movie/city" class="user-posi">
                <span class="select">
                    琼海
                </span>
            </router-link>
            <router-link tag="li" to="/movie/comingsoon">
                <span>正在热映</span>
            </router-link>
            <router-link tag="li" to="/movie/nowplaying">
                <span>即将上映</span>
            </router-link>
            <li>
                <i class="iconfont icon-sousuo seo"></i>
            </li>
        </ul>
        <keep-alive>
            <router-view />
        </keep-alive>
    </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang="stylus" scoped>
    .nav
        position:fixed
        top:1.25rem
        width:100%
        height:1.125rem
        border-bottom:1px solid #ccc
        ul
            display:flex
            width:100%
            height:inherit
            .router-link-active
                color:red
                border-bottom:3px solid red
            li
                flex:1
                .seo
                    display:block
                    width:100%
                    height:100%
                    line-height:1.125rem
                    text-align:center
                    font-size:.6rem !important
                    margin-left:10px
                    color:red
                span
                    display block
                    height:1.125rem
                    line-height:1.125rem
                    text-align:center
                    font-size:0.375rem
                    font-weight:bold
                .select::after
                    content:''
                    display:inline-block
                    border-top:4px solid #b0b0b0
                    border-bottom:4px solid transparent
                    border-left:4px solid transparent
                    border-right:4px solid transparent
            .user-posi
                font-size:0.375rem
                color:#666
                span
                    font-weight:normal !important
</style>
