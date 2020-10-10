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
  // 监听鼠标滚动时触发动画  
  // mounted(){
  //   window.onscroll=function(){
  //     // 获取鼠标滚动的高度
  //     let top = document.documentElement.scrollTop || document.body.scrollTop;
  //     // 获取li标签
  //     let cardlist = document.getElementsByClassName('cardlist');
  //     // 设置两个li标签之间间隔的高度；第一个li标签距离页面的滚动的高度为635px，每个li之前间隔303px，直到1860px
  //     let h = 303
  //     // 遍历li标签，且同时判断鼠标滚动的高度是否大于每个li距离页面顶部的距离，如果大于再去判断li的索引奇数/偶数，设置不同的过渡动画
  //     for(let i = 0;i<cardlist.length;i++){
  //       if(top >=(635+i*h)){
  //         if(i%2==0){
  //           cardlist[i].classList.add("left")
  //         }else{
  //           cardlist[i].classList.add("right")
  //       }
  //       }
  //     }     
  //   }
  // },
  methods:{
    cardMove(){
      let cardlist = document.getElementsByClassName('cardlist');
      // 设置两个li标签之间间隔的高度；第一个li标签距离页面的滚动的高度为635px，每个li之前间隔303px，直到1860px
      // let h = 303
      // 遍历li标签，且同时判断鼠标滚动的高度是否大于每个li距离页面顶部的距离，如果大于再去判断li的索引奇数/偶数，设置不同的过渡动画
      for(let i = 0;i<cardlist.length;i++){
        if(this.top >=(635+i*303)){
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
  width: 520px;
  height: 1850px;
  margin: 0 auto;
  position: relative;
/* css中定义背景渐变色 */
  background-color: #333;
  background-image: linear-gradient(180deg,rgba(60,28,113),rgba(168, 53, 139, 0.4));
  color: #ffffff;
  font-size: 16px;
} 
.firetitle{
  width: 100%;
  height: 100px;
  position: relative;
}
.title1{
  width: 110px;
  position: absolute;
  right: 0;
  top: -46px;
}
.title2{
  width: 90px;
  position: absolute;
  left: 0;
  top: -56px;
}
.title{
  width: 340px;
  height: 52px;
  position: absolute;
  right: 0;
  top: 40px;
}
.firecard{
  width: 100%;
  height: 1482px;
  position: relative;
}
.bro img,.broo img{
  width: 37px;
  height: 460px;
  position: absolute;
}
.broo{
  position: absolute;
  top: 660px;
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

/* 第一部分：设置左侧卡片列表的样式 */
@keyframes left {
  from{margin-left: -470px;}
  to{margin-left: 55px;}
}
@keyframes right {
  from{margin-left: 520px;}
  to{margin-left: 0px;}
}
.left{
  animation: left 1s linear;
  animation-fill-mode: forwards;
}
.right{
  animation: right 1s linear;
  animation-fill-mode: forwards;
}
.left-cardlist{
  width: 464px;
  height: 272px;
  border: solid 1px #fff1cc;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  margin-left: -470px;
  margin-top: 28px;
  background-image: linear-gradient(7deg,rgb(164, 49, 168), rgba(186, 57, 152, 0.13));
}
.left-cardleft{
  width: 218px;
  height: 272px;
  vertical-align: middle;
  position: relative;
  display: inline-block;
}
.left-cardleft .picture{
  width: 218px;
  height: 272px;
  position: absolute;
  left: -40px;
  top: 10px;
  background-image: url("../assets/fireworks/fire-bg2.png");
  background-size: 218px 244px;
  background-repeat: no-repeat;
}
.left-cardleft img{
  width: 186px;
  position: absolute;
  top: 27px;
  left: 3px;
}
.left-cardleft .pictext{
  width: 150px;
  text-align: center;
  font-size: 10px;
  position: absolute;
  bottom: 0px;
  left: 3px;
  margin-bottom: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
}
.left-cardright{
  width: 246px;
  height: 272px;
  margin-left: -20px;
  vertical-align: middle;
  display: inline-block;
  font-size: 16px;
}
.left-cardright .righttitle img ,.left-cardright .righttitle h2{
  display: inline-block;
}
.left-cardright .righttitle{
  width: 100%;
  height: 40px;
  padding: 20px 4px 6px;
  border-bottom: solid 0.5px rgba(255, 255, 255, 0.47);
}
.left-cardright .righttitle img{
  width: 50px;
  height: 24px;
  margin-right: 4px;
}
.left-cardright .cardtext{
  padding: 4px 0px 0px 0px;
  font:300 16px PingFangSC-Light,PingFang SC ;
  opacity: 0.8;
}
/* 第二部分：设置右侧卡片列表的样式 */
.right-cardlist{
  width: 464px;
  height: 272px;
  border: solid 1px #a2e1ff;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  margin-left: 520px;
  margin-top: 28px;
  background-image: linear-gradient(7deg,#287eb2,rgba(186,57,152,.13));
}
.right-cardleft{
  width: 218px;
  height: 272px;
  vertical-align: middle;
  position: relative;
  display: inline-block;
}
.right-cardleft .picture{
  width: 218px;
  height: 272px;
  position: absolute;
  left: 290px;
  top: 10px;
  background-image: url("../assets/fireworks/fire-bg2.png");
  background-size: 218px 244px;
  background-repeat: no-repeat;
  /* 直接通过transform直接做到图片反转 */
  transform: rotateY(180deg)
}
.right-cardleft img{
  width: 186px;
  position: absolute;
  top: 27px;
  left: 3px;
}
.right-cardleft .pictext{
  width: 150px;
  text-align: center;
  font-size: 10px;
  position: absolute;
  bottom: 6px;
  left: 315px;
  margin-bottom: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
}
.right-cardright{
  width: 246px;
  height: 272px;
  margin-left: -200px;
  vertical-align: middle;
  display: inline-block;
  font-size: 16px;
}
.right-cardright .righttitle img ,.right-cardright .righttitle h2{
  display: inline-block;
}
.right-cardright .righttitle{
  width: 100%;
  height: 40px;
  padding: 20px 4px 6px;
  border-bottom: solid 0.5px rgba(255, 255, 255, 0.47);
}
.right-cardright .righttitle img{
  width: 50px;
  height: 24px;
  margin-right: 4px;
}
.right-cardright .cardtext{
  padding: 4px 0px 0px 0px;
  font:300 16px PingFangSC-Light,PingFang SC ;
  opacity: 0.8;
}
/* --------------------------------------- */


/* 设置底部图片的样式 */
.firebottom{
  width: 100%;
  height: 300px;
  margin-top: 20px;
  position: absolute;
  bottom: -100px;
  /* overflow: hidden; */
}
.firebottom .bar,.firebottom .flower,.firebottom .person{
  position: absolute;
  z-index: 99;
}
.firebottom .bar{
  width: 460px;
  height: 100px ;
  display: inline-block;
  bottom: 80px;
  left: 32px;
  
}
.firebottom .flower{
  width: 48px;
  height: 88px ;
  display: inline-block;
  bottom: 100px;
  right: 0px;

}
.firebottom .person{
  width: 418px;
  height: 472px;
  bottom: 0px;
  left: 0px;
}
</style>