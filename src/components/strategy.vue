<template>
<div class="strategy">
  <div class="title">
    <img src="../assets/strategy/st1.png" />
  </div>
  <div class="tips">
    <div class="left">
      <!-- 父传子将左侧的列表信息传给子组件 -->
      <!-- 通过点击事件，将点击的索引传给父组件，父组件将右侧的信息按照左侧子组件传递的索引进行页面渲染 -->
      <p v-for="(item,index) in tabList" :key="index" @click="change(index)" :class="{'active':clickNum == index}">{{item}} </p>
    </div>
    <div class="right" v-if="travelTips.length">
      <h2>{{travelTips[num].title}}</h2>
      <p>{{travelTips[num].pgh_one}}</p>
    </div>
  </div>
  <img class="travel" src="../assets/strategy/st3.png"/>
  <div class="container">
    <div v-for="(item,index) in photos" :key="index" class="main-box">
      <img class="pic1" :src="item.url">
      <img class="pic2" :src="item.url2">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name:"strategy",
  props:{
    tabList:Array,
    travelTips:Array,
    num:Number,
  },
  data(){
    return{
      clickNum:0,
      photos:[
        {url:require("../assets/strategy/p1.png"),
        url2:require("../assets/strategy/s1.png")},
        {url:require("../assets/strategy/p2.png"),
        url2:require("../assets/strategy/s2.png")},
        {url:require("../assets/strategy/p3.png"),
        url2:require("../assets/strategy/s3.png")},
        {url:require("../assets/strategy/p4.png"),
        url2:require("../assets/strategy/s4.png")},
        ]
    }
  },
  methods:{
    change(index){
      this.$emit('changeIndex',index);
      this.clickNum = index
    }
  }
}
</script>
<style scoped>
.strategy{
  width: 520px;
  height: 1240px;
  margin: 0 auto;
  background-color: #3c37c0;
  padding-top: 20px;
  color: #7c78f5;
  font-size: 14px;
}
.title{
  width: 100%;
  height: 42px;
  margin-bottom: 36px;
  clear: both;
}
.title img{
  width: 349px;
  height: 42px;
  float: right;
}
.tips{
  width:504px;
  height:285px ;
  margin: 0 0 40px 4px;
  clear: both;
  background: url('../assets/strategy/st2.png') no-repeat  100% /92% ;
}
.left,.right{
  float: left;
}
.left{
  width: 95px;
  height: 36px;
  line-height: 36px;
  margin-top: 24px;
  text-align: center;
}
.left p{
  width:95% ;
  height: 36px;
  background: url('../assets/strategy/st10.png') no-repeat 100%/100% ;
  margin:20px 0 ;
  font-size: 17px;
  color: #249be9;
}
.left p.active{
  background: url('../assets/strategy/st9.png') no-repeat 100%/100% ;
  color:#934871
}
.right{
  width: 380px;
  margin: 50px 0 0 5px;
  font-family: PingFangSC-Light,PingFang SC;
}
.right h2{
  font-size: 17px;
  color: #3c37c0;
  font-weight: 600;
  margin:  5px 0;
}
.travel{
  width: 85%;
  height: 18px;
}
.container{
  width: 100%;
}
.main-box{
  width: 520px;
  height: 156px;
  margin: 0 auto;
  margin-top: 30px;
  position: relative;
  /* overflow: hidden; */
}
.main-box img{
  display: inline-block;
}
.main-box:nth-child(even) .pic2{
  width: 498px;
  height: 132px;
  margin-left: 10px;
}
.main-box:nth-child(odd) .pic2{
  width: 450px;
  height: 132px;
  margin-left: 32px;
}
.main-box:nth-child(even) .pic1{
  right: 33px;
}
.main-box:nth-child(odd) .pic1{
  left: 18px;
}
@keyframes move {
  from{transform: translateY(-4px);}
  to{transform: translateY(0px);} 
}
@keyframes rotate {
  10% {
    transform: rotate(15deg) scale(1);
  }
  20% {
    transform: rotate(-10deg) scale(1);
  }
  30% {
    transform: rotate(5deg) scale(1.1);
  }
  40% {
    transform: rotate(-5deg) scale(1.2);
  }
  50% {
    transform: rotate(0deg) scale(1.1);
  }
  100% {
    transform: rotate(0deg) scale(1);
  }
}
@keyframes scale {
  from{transform:scale(1);}
  to{transform:scale(1.2);}
}
.pic1{
  width: 95px;
  height: 156px;
  position: absolute;
  bottom: 24px;
  
}
.main-box:nth-child(1) .pic1,.main-box:nth-child(4) .pic1{
  animation: move 1s infinite linear;
}
.main-box:nth-child(2) .pic1,.main-box:nth-child(3) .pic1{
  animation: rotate 3s infinite linear;
}


</style>