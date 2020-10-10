<template>
  <div class="banner-container">
    <div id="banner-picture">
      <img class="fps" :src="item.url" 
        v-for="(item,index) in photos" 
        v-bind:key="index"
        v-show="index === activeIndex"/>
      <img class="logo" src="../assets/banner/banner1.png"/>
      <img class="banner-title banner-move" src="../assets/banner/banner2.png"/>
      <img class="banner-play banner-move" src="../assets/banner/banner3.png"/>
      <img class="banner-book banner-move" src="../assets/banner/banner4.png"/>
      <img class="banner-coffee banner-move" src="../assets/banner/banner5.png"/>
      <img class="banner-fire banner-move" src="../assets/banner/banner6.png"/>
      <img class="banner-bottom banner-move" src="../assets/banner/banner7.png"/>
      <div class="flower move1">
        <img class="flower1 banner-move" src="../assets/banner/flower1.png"/> 
      </div>
      <div class="flower move2">
        <img class="flower2 banner-move" src="../assets/banner/flower2.png"/>
      </div>
      <div class="flower move3">
        <img class="flower3 banner-move" src="../assets/banner/flower3.png"/>
      </div>
      
    </div>
    <div class="banner-text">
      <p>{{bannerTitle}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name:"banner",
  // 父传子，子组件采用props接收父组件的数据
  props:{
    bannerTitle:String,
  },
  mounted(){
    var _this = this;
    function changeImage() {
      setTimeout(()=>{
        if (_this.isRight) {
          _this.activeIndex++;
        } else {
          _this.activeIndex--;
        }
        
        if( _this.activeIndex >= 47){
           _this.isRight = false
        }
        if( _this.activeIndex <= 0){
           _this.isRight = true
        }
        changeImage()
      },20) 
    }
    changeImage()
  },
  data(){
    return{
      isRight: true,
      activeIndex: 0,
      image:require('../assets/banner/b1.jpg'),
      photos:[
        {url:require('../assets/banner/b1.jpg')},
        {url:require('../assets/banner/b2.jpg')},
        {url:require('../assets/banner/b3.jpg')},
        {url:require('../assets/banner/b4.jpg')},
        {url:require('../assets/banner/b5.jpg')},
        {url:require('../assets/banner/b6.jpg')},
        {url:require('../assets/banner/b7.jpg')},
        {url:require('../assets/banner/b8.jpg')},
        {url:require('../assets/banner/b9.jpg')},
        {url:require('../assets/banner/b10.jpg')},
        {url:require('../assets/banner/b11.jpg')},
        {url:require('../assets/banner/b12.jpg')},
        {url:require('../assets/banner/b13.jpg')},
        {url:require('../assets/banner/b14.jpg')},
        {url:require('../assets/banner/b15.jpg')},
        {url:require('../assets/banner/b16.jpg')},
        {url:require('../assets/banner/b17.jpg')},
        {url:require('../assets/banner/b18.jpg')},
        {url:require('../assets/banner/b19.jpg')},
        {url:require('../assets/banner/b20.jpg')},
        {url:require('../assets/banner/b21.jpg')},
        {url:require('../assets/banner/b22.jpg')},
        {url:require('../assets/banner/b23.jpg')},
        {url:require('../assets/banner/b24.jpg')},
        {url:require('../assets/banner/b25.jpg')},
        {url:require('../assets/banner/b26.jpg')},
        {url:require('../assets/banner/b27.jpg')},
        {url:require('../assets/banner/b28.jpg')},
        {url:require('../assets/banner/b29.jpg')},
        {url:require('../assets/banner/b30.jpg')},
        {url:require('../assets/banner/b31.jpg')},
        {url:require('../assets/banner/b32.jpg')},
        {url:require('../assets/banner/b33.jpg')},
        {url:require('../assets/banner/b34.jpg')},
        {url:require('../assets/banner/b35.jpg')},
        {url:require('../assets/banner/b36.jpg')},
        {url:require('../assets/banner/b37.jpg')},
        {url:require('../assets/banner/b38.jpg')},
        {url:require('../assets/banner/b39.jpg')},
        {url:require('../assets/banner/b40.jpg')},
        {url:require('../assets/banner/b41.jpg')},
        {url:require('../assets/banner/b42.jpg')},
        {url:require('../assets/banner/b43.jpg')},
        {url:require('../assets/banner/b44.jpg')},
        {url:require('../assets/banner/b45.jpg')},
        {url:require('../assets/banner/b46.jpg')},
        {url:require('../assets/banner/b47.jpg')},
        {url:require('../assets/banner/b48.jpg')},
      ]
    }
  },
}
</script>

<style scoped>
.banner-container{
  width: 520px;
  height: 1100px;
  margin: 0 auto;
  /* border: solid 0.5px gray; */
  background-color: #1c1b23;
} 
/* 生成背景图片切换的动画 */
/* @keyframes background-picture {
  0%{background-image:url(../assets/banner/bg1.jpeg);}
  24.99%{background-image:url(../assets/banner/bg1.jpeg);}
  25%{background-image:url(../assets/banner/bg2.jpeg);}
  49.99%{background-image:url(../assets/banner/bg2.jpeg);}
  50%{background-image: url(../assets/banner/bg3.jpeg);}
  74.99%{background-image: url(../assets/banner/bg3.jpeg);}
  75%{background-image: url(../assets/banner/bg4.jpeg);}
  99.99%{background-image: url(../assets/banner/bg4.jpeg);}
  100%{background-image: url(../assets/banner/bg5.jpeg);}
} */
#banner-picture{
  width: 100%;
  height: 840px;
  /* background: url(../assets/banner/bg1.jpeg) no-repeat; */
  background-size: 530px 800px;
  position: relative;
  /* animation: background-picture 1s infinite linear; */
}
.logo{
  width: 520px;
  margin-top: 20px;
}
.banner-move{
  position: absolute;
}
.banner-title{
  width: 320px;
  left: 100px;
  top: 80px;
}
.fps{
  width: 100%;
}
@keyframes play {
  from{transform: rotate(0deg) scale(1,1);}
  to{transform: rotate(15deg) scale(1.1,1.1);}
}
.banner-play{
  width: 80px;
  left: 210px;
  bottom: 55px;
  animation: play 3s infinite alternate linear;
}
@keyframes book {
  from{transform:translateX(0) translateY(0);}
  to{transform:translateX(-20px) translateY(15px);}
}
.banner-book{
  width: 134px;
  left: 300px;
  bottom: 168px;
  animation: book 3s infinite alternate linear;
}
.banner-coffee{
  width: 94px;
  left: 400px;
  bottom: 280px;
  animation: book 3s infinite alternate linear;
  animation-delay: 1s;
}
.banner-fire{
  width: 97px;
  right: 0px;
  bottom: 0px;
}
@keyframes bottom {
  from{transform:translateY(0);opacity:1;}
  to{transform:translateY(30px);opacity:0;}
}
.banner-bottom{
  width: 34px;
  right: 240px;
  bottom: 0px;
  animation: bottom 3s infinite ;
}
.banner-text{
  width: 100%;
  height: 100px;
  color: #c7c8c7;
}
.banner-text p{
  font-size: 18px;
  margin: 40px 40px 0px;
}
/* 设置花瓣落下的动画 */
/* 如果想让1个标签实现多个动画效果（例如移动和旋转），可以通过嵌套div实现，div实现移动路线，花瓣的标签实现旋转 */
@keyframes flower1{
  0%{transform:translate3d(0px,0px,0px);opacity: 1;}
  100%{transform:translate3d(300px,180px,0px);opacity: 0;}
}
@keyframes rotate {
  0%{transform:rotate(0deg);}
  100%{transform:rotate(360deg);}
}
/* 设置div-flower 移动的动画效果 */
.flower{
position: absolute;
left: 70px;
bottom: 440px;
}

.move1{
  animation: flower1 20s infinite;
}
.move2{
  animation: flower1 16s infinite;
}
.move3{
  animation: flower1 12s infinite;
}

.flower1{
  width: 38px;
  left: 0px;
  bottom: 0px;
  animation: rotate 5s infinite linear;
}
.flower2{
  width: 28px;
  left: -6px;
  bottom: -30px;
  animation: rotate 4s infinite linear;
}
.flower3{
  width: 18px;
  left: 34px;
  bottom: -26px;
  animation: rotate 3s infinite linear;
}
</style>