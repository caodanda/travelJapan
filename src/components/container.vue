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
  width:100%;
  margin: 0 auto;
  background-color: #f7f7f7;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
}
.titlebar{
  padding-top: 30px;
  overflow: hidden;
}
.titlebar img{
  width: 80%;
  height: 100%px;
  margin-left: 20px;
}
ul{
  display: inline-block;
  vertical-align: top;
}

.containlist{
  width:100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto; 
  box-sizing: border-box;
  padding: 10px;
  
}
.left,.right{
  flex: 1;
  
}
.left{
  margin-right: 8px;
}
.containlist li{
  width:100% ;
  margin-top: 20px;
  
}
.pic1{
  width: 100%;
}
.list{
  clear: both;
}
.pic2{
  width: 5%;
  float: left;
  vertical-align: top;
  border-radius: 15px;
  margin-right: 5px;
}
.list h2{
  width: 90%;
  font-size: 24px;
  color: #242629;
  float: left;
  vertical-align: top;
}
.leftli{
  width: 50%;
}
</style>