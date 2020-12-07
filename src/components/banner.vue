<template>
  <div class="banner-container">
    <div id="progress" v-if="proStatus">
      <span class="progress_out">
          <span class="progress_in" :style="{width:progressWidth}"></span>
          <span class="progress_text" :style="{left:progressWidth}">{{progressWidth}}</span>
      </span>
    </div>
    <div id="banner-picture" :style="{'display':active}">
      <canvas id="mycanvas"></canvas>
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
  </div>
</template>
<script>
export default {
  name:"banner",
  // 父传子，子组件采用props接收父组件的数据
  props:{
    bannerTitle:String,
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
        {url:require('../assets/banner/b49.jpg')}
      ],
      imgLists:[],
      num:0,
      loaded:0,
      status:true,
      ctx:null,
      mycanvas:null,
      active:'none',
      progressWidth:null,
      proStatus:true
    }
  },
  mounted(){
    // 加载图片
    this.requestImg()
    // canvas绘制
    this.initCanvas()
    console.log(this.progressWidth);
  },
  methods:{
    getPicData(url){
      let promise = new Promise((resolve,reject)=>{
        let img = new Image();
        this.imgLists.push(img);
        img.onload = ()=>{
          resolve();
          this.loaded+=1;
          this.progressWidth = Math.floor(this.loaded / this.photos.length *100) + '%';
        };
        img.onerror = function(){reject()};
        img.src = url;
      })
      return promise
    },
    async requestImg(){
      let imgData = this.photos.map( e => this.getPicData(e.url));
      await Promise.all(imgData);
      this.proStatus = false;
      this.active = 'block';
      this.move();
    },
    initCanvas(){
      this.mycanvas = document.getElementById('mycanvas');
      let app = document.getElementById('app')
      this.mycanvas.width = app.offsetWidth
      this.mycanvas.height = document.documentElement.clientHeight || document.body.clientHeight
      this.ctx = this.mycanvas.getContext('2d');
    },
    move(){
      this.ctx.clearRect(0,0,this.mycanvas.width,this.mycanvas.height)
      this.ctx.drawImage(this.imgLists[this.num],0,0,this.mycanvas.width,this.mycanvas.height)
      if(this.num >= 48){
        this.status = false
      }
      if(this.num <= 0){
        this.status = true
      }
      if (this.status == false) {
        this.num--
      }else {
        this.num++
      }
      requestAnimationFrame(()=> {
        setTimeout(()=>{
          this.move()
        },1000/60)
      })
    }
  }
}
</script>

<style scoped>
#progress{
  width: 100%;
  height:60px;
  position: relative;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  box-sizing: border-box;
  padding: 0 80px;
}
.progress_out{
    display:inline-block;
    width:100%;
    height: 50px;
    background-color: rgba(5, 80, 105, 1);
    position:relative;
    border-radius: 20px;
}
.progress_in{
  display:inline-block;
  height:50px;
  border-radius: 20px;
  background: rgba(2, 227, 252, 1);
  position:absolute;
  top:0;
  left:0;
}
.progress_text{
  color: #fff;
  position:absolute;
  font-size: 24px;
  top: -40px;
}
.banner-container{
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #1c1b23;
} 
#banner-picture{
  width: 100%;
  background-size: 530px 800px;
  position: relative;
}
.logo{
  width: 100%;
  position: absolute;
  top: 20px;
  left: 0;
}
.banner-move{
  position: absolute;
}
.banner-title{
  display: inline-block;
  width: 60%;
  position: absolute;
  top: 120px;
  left: 20%;
}
.fps{
  width: 100%;
}
@keyframes play {
  from{transform: rotate(0deg) scale(1,1);}
  to{transform: rotate(15deg) scale(1.1,1.1);}
}
.banner-play{
  width: 10%;
  left: 20%;
  bottom: 4%;
  animation: play 2s infinite alternate linear;
}
@keyframes book {
  from{transform:translateX(0) translateY(0);}
  to{transform:translateX(-20px) translateY(15px);}
}
.banner-book{
  width: 20%;
  left: 40%;
  bottom: 12%;
  animation: book 2s infinite alternate linear;
}
.banner-coffee{
  width: 20%;
  left: 60%;
  bottom: 24%;
  animation: book 2s infinite alternate linear;
  animation-delay: 2s;
}
.banner-fire{
  width: 10%;
  right: 0;
  bottom: 0;
}
@keyframes bottom {
  from{transform:translateY(0);opacity:1;}
  to{transform:translateY(30px);opacity:0;}
}
.banner-bottom{
  width: 5%;
  right: 48%;
  bottom: 3%;
  animation: bottom 2s infinite ;
}
.banner-text{
  width: 100%;
  color: #fff;
  margin-top: -42px;
}
.banner-text p{
  font-size: 40px;
  padding: 30px 80px;
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
width: 100%;
position: absolute;
left: 5%;
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
  width: 8%;
  left: 0px;
  bottom: 0px;
  animation: rotate 4s infinite linear;
}
.flower2{
  width: 6%;
  left: -6px;
  bottom: -30px;
  animation: rotate 3s infinite linear;
  animation-delay: 2s;
}
.flower3{
  width: 3%;
  left: 34px;
  bottom: -26px;
  animation: rotate 2s infinite linear;
}
</style>