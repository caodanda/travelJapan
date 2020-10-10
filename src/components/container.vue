<template>
  <div class="contain">
    <div class="titlebar">
      <img src="../assets/container/c1.png"/>
    </div>
    <div class="containlist">
      <ul class="left">
        <!-- 同一个元素v-for和v-if不能同时使用，因为v-for有更高优先级，百度查可以使用computed属性 -->
        <li v-for="(item,index) in recommend" :key="index">
          <a href="#" v-if="index % 2 == 0">
              <img class="pic1" :src="recommend[index].media_url" />
              <div class="list">
                <img class="pic2" :src="recommend[index].user_logo"/>
                <h2>{{recommend[index].title}}</h2>
              </div>
         </a>
        </li>
      </ul>
      <ul class="right">
        <li v-for="(item,index) in recommend" :key="index">
          <a href="#" v-if="index % 2 !== 0">
              <img class="pic1" :src="recommend[index].media_url" />
              <div class="list">
                <img class="pic2" :src="recommend[index].user_logo"/>
                <h2>{{recommend[index].title}}</h2>
              </div>
         </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:"container",
  props:{
    recommend:Array
  },
}
</script>

<style scoped>
.contain{
  width:520px;
  margin: 0 auto;
  background-color: #f7f7f7;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  margin-top: -50px;
}
.titlebar{
  padding-top: 30px;
  overflow: hidden;
}
.titlebar img{
  width: 514px;
  height: 24px;
  margin-left: 20px;
}
ul{
  display: inline-block;
  vertical-align: top;
}
.left{
  margin-right: 8px;
}
.containlist{
  width:478px;
  margin: 0 auto; 
  
}
.containlist li{
  width:235px ;
  margin-top: 20px;
  
}
.pic1{
  width: 235px;
}
.list{
  clear: both;
}
.pic2{
  width: 12px;
  float: left;
  vertical-align: top;
  border-radius: 15px;
}
.list h2{
  width: 223px;
  font-size: 18px;
  color: #242629;
  float: left;
  vertical-align: top;
}
.leftli{
  width: 50%;
}
</style>