<template>
  <div id="app">
    <!-- 父传子添加动态属性 -->
    <banner :bannerTitle="bannerTitle"></banner>
    <fireworks :fireworks="fireworks" :top="top"></fireworks>
    <div class="area">
      <areas :data="data" v-on:tabKeyChange="tabKeyChange" :top="top"></areas>
      <!-- 在子组件的标签上添加ref属性，为了调用子组件的函数方法 -->
      <areasM :activeCard="activeCard" ref="areasM"></areasM>
      <img class="area-bottom" src="./assets/areas/areas.png" />
    </div>
    <strategy :tabList="tabList" v-on:changeIndex="indexChange" :num="num" :travelTips="travelTips"></strategy>
    <container :recommend="recommend" ref="container"></container>
  </div>
</template>
<script>
import axios from  'axios'
import banner from  './components/banner'
import fireworks from  './components/fireworks'
import areas from  './components/areas'
import areasM from  './components/areaModules/areasM'
import strategy from './components/strategy'
import container from './components/container'

export default {
  name:'App',
  components:{
    banner,
    fireworks,
    areas,
    areasM,
    strategy,
    container,
  },
  data(){
    return{
    bannerTitle:"",
    fireworks:[],
    activeCard:[],
    data:{},
    top:0,
    tabList:[],
    travelTips:[],
    num:0,
    recommend:[]
    }
  },
  // vue生命周期函数承载axios请求数据
  mounted(){
    axios({
      url:"https://mock.yonyoucloud.com/mock/16370/travel",
      params:{
        banner_title:"",
      }
    }).then(
      (res)=>{
        // axios中this指向underfind,重新定义this或者使用箭头函数确定this的指向
        this.bannerTitle = res.data.data.banner_title.text;
        this.fireworks = res.data.data.fireworks;
        this.data = res.data.data;
        this.activeCard = this.data["guandong"];
        this.tabList = res.data.data.traval_tab_imgs.text.split('｜');
        this.travelTips = res.data.data.travel_tips
        this.recommend = res.data.data.recommend_data
      },
      (err)=>{
        console.log(err)
      })
     window.onscroll = () =>{
       // 获取鼠标滚动的高度
      this.top = document.documentElement.scrollTop || document.body.scrollTop;
      // this.$refs.container.changeindex();
     }
  },
  methods:{
    tabKeyChange(key){
      this.activeCard =this.data[key];
      // 父组件通过this.$refs的方式调用，需要在子组件的标签上添加ref属性
      // this.$refs.areasM.showAni();
    },
    indexChange(index){
      this.num = index;
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app{
  width:1200px;
  margin: 0 auto;
  font-size: 14px;
}
li{
  list-style: none;
}
a{
  text-decoration: none;
  color: black;
}
.title{
  font-size: 30px;
  color: brown;
  font-weight: 700;
}
.tag{
  font-size: 22px;
  font-weight: 500;
  display: inline-block;
  margin:0 10px 10px;
  }
  .area{
    width: 100%;
    /* height: 1680px; */
    margin: 0 auto;
    background-image: linear-gradient(180deg,rgba(0,228,255,.74),#688bff);
    background-color: #000000;
    position: relative;
  }
  .area-bottom{
    position: absolute;
    bottom: 0px;
    width: 100%;
    height:120px;
  }
</style>
