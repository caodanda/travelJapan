<template>
  <div class="fireworks-container">
    <div class="firetitle">
      <img src="../assets/fireworks/fire-title1.png" class="title1">
      <img src="../assets/fireworks/fire-title2.png" class="title2">
      <img src="../assets/fireworks/fire-title.png" class="title"> 
    </div>
    <div class="firecard">
      <div class="bro">
        <img class="bro1" src="../assets/fireworks/fire.png"/>
        <img class="bro2" src="../assets/fireworks/bro2.png" />
      </div>
      <div class="broo">
        <img class="bro1" src="../assets/fireworks/fire.png"/>
        <img class="bro2" src="../assets/fireworks/bro2.png" />
      </div>
      <ul class="list">
        <!-- 通过三元运算符判断index%2系数是否为0，来决定列表使用那个样式；也可以使用css的偶数行选择器分别设置样式 -->
        <li class="cardlist" :class="index % 2 == 0 ? 'left-cardlist' :'right-cardlist'" v-for="(item,index) in fireworks" :key="index" >
          <div :class="index % 2 == 0 ? 'left-cardleft' :'right-cardleft'">
            <div class="picture">
              <img :src="fireworks[index].img"/>
            </div>
            <div class="pictext">
              <p>{{fireworks[index].img_desc}}</p>
            </div> 
          </div>
          <div :class="index % 2 == 0 ? 'left-cardright' :'right-cardright'">
            <div class="righttitle">
              <img :src="numPicture[index].url"/>
              <h2>{{fireworks[index].title}}</h2>
            </div>
            <div class="cardtext">
              <p>{{fireworks[index].desc}}</p>
            </div>
          </div>
        </li>       
      </ul>
    </div>
    <div class="firebottom">
      <img class="bar" src="../assets/fireworks/fire-bottom.png" >
      <img class="flower" src="../assets/fireworks/fire11.png">
      <img class="person" src="../assets/fireworks/fire-person.png" >
    </div>
  </div>
</template>

<script>
export default {
  name:"fireworks",
  props:{
    fireworks:Array,
    top:Number,
  },
  data(){
    return{
      numPicture:[
        {url:require("../assets/fireworks/no1.png")},
        {url:require("../assets/fireworks/no2.png")},
        {url:require("../assets/fireworks/no3.png")},
        {url:require("../assets/fireworks/no4.png")},
        {url:require("../assets/fireworks/no5.png")}
      ],
    }
  },
  watch:{
    top(cur, pre){
      if(pre == 0){
        return
      }
    this.cardMove()
    }
  },
  methods:{
    cardMove(){
      let cardlist = document.getElementsByClassName('cardlist');
      let sTop = document.body.scrollTop
      console.log(sTop);
      // 设置两个li标签之间间隔的高度；第一个li标签距离页面的滚动的高度为1200px，每个li之前间隔400px
      // 遍历li标签，且同时判断鼠标滚动的高度是否大于每个li距离页面顶部的距离，如果大于再去判断li的索引奇数/偶数，设置不同的过渡动画
      for(let i = 0;i<cardlist.length;i++){
        if(this.top >=(1200+i*400)){
          if(i%2==0){
            cardlist[i].classList.add("left")
          }else{
            cardlist[i].classList.add("right")
        }
        }
      }     
    }
  }
}
</script>

<style scoped>
.fireworks-container{
  width: 100%;
  /* height: 1850px; */
  margin: 0 auto;
  padding-bottom: 40%;
  position: relative;
  background-color: #333;
  background-image: linear-gradient(180deg,rgba(60,28,113),rgba(168, 53, 139, 0.4));
  color: #ffffff;
} 
.firetitle{
  width: 100%;
  height: 100px;
  position: relative;
}
.title1{
  width: 15%;
  position: absolute;
  right: 0;
  top: -46px;
}
.title2{
  width: 10%;
  position: absolute;
  left: 0;
  top: -56px;
}
.title{
  width: 60%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 40px;
}
.firecard{
  width: 100%;
  /* height: 1482px; */
  position: relative;
}
.bro img,.broo img{
  width: 10%;
  height: 40%;
  position: absolute;
}
.broo{
  position: absolute;
  top: 40%;
}
.bro1{
  left:0px ;
  top: -30px;
}
.bro2{
  right:-10px ;
  top:320px ;
}
.broo .bro2{
  right:-526px ;
  top:332px ;
}
/* 如果想设置子元素超出容器后不显示的效果，需要在父容器上设置overflow */
.list{
  position: relative;
  overflow: hidden;
}
@keyframes left {
  from{margin-left: -80%;}
  to{margin-left: 20%;}
}
@keyframes right {
  from{margin-left: 100%;}
  to{margin-left: 0%;}
}
.cardlist{
  display: flex;
  width: 100%;
}
.left-cardleft,.right-cardleft{
  flex:3
}
.left-cardright,.right-cardright{
  flex: 5;
}
.right-cardleft{
order: 1;
}
.left{
  animation: left 1s linear;
  animation-fill-mode: forwards;
}
.right{
  animation: right 1s linear;
  animation-fill-mode: forwards;
}

.left-cardlist,.right-cardlist{
  width: 80%;
  border: solid 1px #fff1cc;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  margin-top: 60px; 
  background-image: linear-gradient(7deg,rgb(164, 49, 168), rgba(186, 57, 152, 0.13));
}
.right-cardlist{
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
}
.left-cardleft,.right-cardleft{
  height: 300px;
  position: relative;
}
.left-cardleft .picture,.right-cardleft .picture{
  width: 100%;
  height: 100%;
  position: absolute;
  left: -40px;
  top: 10px;
  background-image: url("../assets/fireworks/fire-bg2.png");
  background-size: 90% 100%;
  background-repeat: no-repeat;
}
.left-cardleft img,.right-cardleft img{
  width: 80%;
  position: absolute;
  top: 12px;
  left: 0px;
}
.left-cardleft .pictext{
  width: 90%;
  text-align: center;
  font-size: 22px;
  position: absolute;
  bottom: -50px;
  left: 0px;
  margin-bottom: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
}
.left-cardright,.right-cardright{
  font-size: 26px;
}
.left-cardright .righttitle img ,.left-cardright .righttitle h2{
  display: inline-block;
}
.left-cardright .righttitle,.right-cardright .righttitle{
  width: 100%;
  height: 40px;
  padding: 20px 4px;
  border-bottom: solid 0.5px rgba(255, 255, 255, 0.47);
}
.left-cardright .righttitle img,.right-cardright .righttitle img{
  width: 80px;
  height: 40px;
  margin-right: 4px;
}
.left-cardright .cardtext,.right-cardright .cardtext{
  padding: 10px;
  font:300 30px PingFangSC-Light,PingFang SC ;
  opacity: 0.8;
}

.right-cardlist{
  background-image: linear-gradient(7deg,#287eb2,rgba(186,57,152,.13));
}
.right-cardleft{
  position: relative;
}
.right-cardleft .picture{
  margin-left: 120px;

}
.right-cardleft .pictext{
  width: 90%;
  text-align: center;
  font-size: 22px;
  position: absolute;
  bottom: -50px;
  right: 0px;
  background-color: rgba(255, 255, 255, 0.3);
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
}
.right-cardright .righttitle img ,.right-cardright .righttitle h2{
  display: inline-block;
}
.right-cardright{
  margin-left: 20px;
}
/* --------------------------------------- */
/* 设置底部图片的样式 */
.firebottom{
  width: 100%;
  height: 300px;
  margin-top: 20px;
  position: absolute;
  bottom: -100px;
}
.firebottom .bar,.firebottom .flower,.firebottom .person{
  position: absolute;
  z-index: 99;
}
.firebottom .bar{
  width: 90%;
  height: 60% ;
  display: inline-block;
  bottom: 80px;
  left: 32px;
  
}
.firebottom .flower{
  width: 10%;
  height: 60%;
  display: inline-block;
  bottom: 100px;
  right: 0px;

}
.firebottom .person{
  width: 60%;
  bottom: 0px;
  left: 0px;
}
</style>