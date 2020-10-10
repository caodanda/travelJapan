<template>
  <div class="topbar">
      <ul :class="{'fixedBar':isFixed}">
        <li @click="change('guandong')" :class="{'active':isActive == 'guandong'}">
          <span>关东地区</span>
        </li>
        <li @click="change('guanxi')" :class="{'active':isActive == 'guanxi'}">
          <span>关西地区</span>
        </li>
        <li @click="change('dongbei')" :class="{'active':isActive == 'dongbei'}">
          <span>东北地区</span>
        </li>
        <li @click="change('jiuzhou')" :class="{'active':isActive == 'jiuzhou'}">
          <span>九州</span>
        </li>
        <li @click="change('beihaidao')" :class="{'active':isActive == 'beihaidao'}">
          <span>北海道</span>
        </li>
      </ul>
  </div>
</template>
<script>
export default {
  name:"areas",
  data(){
    return{
      activeKey:"guandong",
      isActive:"guandong",
      isFixed:false,
    }
  },
  props:{
    data:Object,
    top:Number,
  },
  watch:{
    top(cur,pre){
      // 监听top的变化，如果原来的top值在3124-4340区间时添加动态class（不需要写函数进行调用）
      if(pre >= 3124 && pre <= 4340){
        this.isFixed = true
      }else{
        this.isFixed = false
      }
    }
  },
  methods:{
    change(key){
      this.activeKey = key;
      this.$emit("tabKeyChange",key);
      this.isActive =key
    },
  }
}
</script>
<style scoped>
  .topbar{
    width: 100%;
    height: 65px;
    padding-top: 134px;
    position: relative;
  }
  /* 设置topbar的扩大样式 */
  .fixedBar{
    width: 902px;
    height: 65px;
    background-image: linear-gradient(180deg,#00e4ff,rgba(74,168,247,.7));
    line-height: 65px;
    margin-left: -200px;
    text-align: center;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    position: fixed;
    top: 0px;
    z-index: 999;
  }
  .topbar li{
    width:96px ;
    height:36px ;
    line-height: 36px;
    display: inline-block;
    border: 0.5px solid #4aa8f7;
    border-radius: 16px;
    text-align: center;
    font-size: 17px;
    color: #137ccb;
    background-color: #8bdfff;
    margin-left: 5px;
  }
  /* 在同一个标签前后需要使用相同样式时，为了避免覆盖，使用子选择器+类选择器，这样优先级会更高。css选择器也有优先级 */
.topbar li.active{
  background-color: #ffed43;
}

</style>