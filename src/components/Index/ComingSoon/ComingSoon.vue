<template>
    <div class="movie_body">
        <ul>
            <li v-for="item of dataList" :key="item.id">
                <div class="pic_show"><img src="//p0.meituan.net/148.208/moviemachine/7b9b0725ab5feae642e1fbba9fbb90fe3702078.jpg"></div>
                <div class="info_list">
                    <h2>狮子王</h2>
                    <p><span class="person">17746</span> 人想看</p>
                    <p>主演: 陈建斌,任素汐,潘斌龙</p>
                    <p>2018-11-30上映</p>
                </div>
                <div class="btn_pre">
                    预售
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ComingSoon',
  data: {
      reutrn {

      }
  },
  mounted (){
      this.getJsonData()
  },
  methods: {
      getJsonData () {
        axios.get("http://localhost:8080/data/data.json").then(this.dataInfo)
      },
      dataInfo(res){
        res = res.data
        if(res.res && res.data){
            this.dataList = res
        }
        console.log(res,this.dataList)
      }
  }
}
</script>

<style scoped>
#content .movie_body{ flex:1; overflow:auto;}
.movie_body ul{ margin:0 12px; overflow: hidden;}
.movie_body ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
.movie_body .pic_show{ width:64px; height: 90px;}
.movie_body .pic_show img{ width:100%;}
.movie_body .info_list { margin-left: 10px; flex:1; position: relative;}
.movie_body .info_list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
.movie_body .info_list img{ width:50px; position: absolute; right:10px; top: 5px;}
.movie_body .btn_mall , .movie_body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
.movie_body .btn_pre{ background-color: #3c9fe6;}
</style>
