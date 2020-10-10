<template>
  <div class="box" > 
    <div v-for="(item,index) in activeCard" :key="index" class="box-item">
      <div class="title">
        <p>{{index+1}}</p>
        <h2>{{activeCard[index].title}}</h2>
      </div>
      <div class="main" :class="{'mainMove':mainMove}" >
        <div class="photo">
          <img :src="activeCard[index].img"/>
          <span>{{activeCard[index].img_desc}}</span>
        </div>
        <p>{{activeCard[index].desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"areasM",
  props:{
    activeCard:Array
  },
  data(){
    return{
      mainMove:false
    }
  },
  // mounted() {
  //   setTimeout(() => {
  //       // this.mainMove = false
  //     },600)
  // },
  watch: {
    activeCard(cur, pre) {
      // if函数用于判断activeCard数组是否修改，修改前的数组长度为0是默认值，则不执行过渡动画函数的调用，否则执行动画函数
      if (pre.length == 0) {
        return
      }
      this.showAni();
    }
  },
  // 添加动态class，新建函数启动定时器调整删除新增的class（目的是为了tab切换时class新增）；
  // 调用函数的方式：（1）新增watch监听点击的变化；（2）父组件通过this.$refs的方式调用
  methods:{
    showAni() {
      this.mainMove = true;
      setTimeout(() => {
        this.mainMove = false
      },600)
    }
  }
}
</script>

<style  scoped>
.box{
  width: 526px;
  height: 436px;
  color: #fff;
}
.box-item{
  overflow: hidden;
}
.title,.main{
  width: 450px;
  margin: 0 auto;
}
.title{
  /* height: 30px; */
  margin-bottom: 20px;
  /* background: #2eaccc; */
  margin-left: 28px;
  position: relative;
  z-index: 1;
}
.title p , .title h2{
  display: inline-block;
  color: #fff;
  vertical-align: middle;
}
.title p{
  width: 24px;
  height: 24px;
  line-height: 24px;
  font-size: 18px;
  text-align: center;
  background-color: rgb(4, 113, 202);
  border: 0.5px solid #0471ca;
  border-radius: 50%;
}
.title h2{
  font-size: 24px;
  margin-left: 10px;
}
.main{
  height: 386px;
  border-left: 2px solid #158ad5;
  position: relative;
}
.main img{
  width: 396px;
  height: 222px;
  z-index: 10;
  position: relative;
}
/* 设置点击的动画和点击的class */
@keyframes move {
  from{transform:translateY(-380px);}
  to{transform:translateY(0px);}
}

.mainMove{
  animation: move 0.6s linear;
  animation-fill-mode: forwards;
}
.photo{
  position: relative;
  margin-bottom: 10px;
}
.photo::before{
  content:"";
  display: inline-block;
  background-color:#4defff;
  width:396px;
  height:222px;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
  }
.photo span{
  position: absolute;
  left: 0px;
  bottom: 10px;
  width: 150px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  font-size: 12px;
  background-color: rgba(255, 255, 255, 0.3);
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
}
.photo,.main p{
  margin-left: 20px;
}
.main p{
  font-size: 18px;
  position: relative;
}



</style>