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
  width: 100%;
  margin: 0 auto;
  background-color: #3c37c0;
  padding-top: 20px;
  color: #7c78f5;
  font-size: 14px;
}
.title{
  width: 100%;
  height: 42px;
  margin-bottom: 100px;
  clear: both;
}
.title img{
  width: 60%;
  height: 160%;
  float: right;
}
.tips{
  width:90%;
  /* height: 550px; */
  margin: 0 auto;
  clear: both;
  background: url('../assets/strategy/st2.png') no-repeat;
  background-size: contain;
  display: flex;
  box-sizing: border-box;
  padding-right: 100px;
  padding-bottom: 15%;
}
.right{
  flex: 4;
}
.left{
  flex: 2;
  box-sizing: border-box;
  padding-top: 100px;
  text-align: center;
  margin-left: -60px;
}
.left p{
  width:60%;
  height: 100px;
  line-height: 100px;
  background: url('../assets/strategy/st10.png') no-repeat 100%/100% ;
  margin:10px 0 ;
  font-size: 30px;
  color: #249be9;
}
.left p.active{
  background: url('../assets/strategy/st9.png') no-repeat 100%/100% ;
  color:#934871
}
.right{
  box-sizing: border-box;
  padding: 100px 40px 10px 0;
  font-family: PingFangSC-Light,PingFang SC;
  height: 100%;
  overflow: hidden;
  /* margin-left: -20%; */
}
.right h2{
  font-size: 30px;
  color: #3c37c0;
  font-weight: 600;
  margin:  10px 0;
}
.right p{
  font-size: 26px;
}
.travel{
  width: 90%;
  height: 100%;
}
.container{
  width: 100%;
  position: relative;
}
.main-box{
  width: 100%;
  box-sizing: border-box;
  padding: 30px;
  position: relative;
}
.main-box img{
  display: inline-block;
}
.main-box:nth-child(even) .pic2{
  width: 90%;
  height: 100%;
  margin: 50px
}
.main-box:nth-child(odd) .pic2{
  width: 80%;
  height: 100%;
  margin: 60px
}
.main-box:nth-child(even) .pic1{
  width: 15%;
  height: 60%;
  position: absolute;
  right: 100px;
  bottom: 60px;
}
.main-box:nth-child(odd) .pic1{
  width: 15%;
  height: 60%;
  position: absolute;
  left: 20px;
  bottom: 60px;
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