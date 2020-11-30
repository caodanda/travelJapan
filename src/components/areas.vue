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
    box-sizing: border-box;
    padding: 160px 0px 60px;
    position: relative;
  }
  .topbar ul{
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 0 20px;
  }
  .topbar li{
    flex:1;
    height:80px ;
    line-height: 80px;
    border: 0.5px solid #4aa8f7;
    border-radius: 16px;
    text-align: center;
    font-size: 26px;
    color: #137ccb;
    background-color: #8bdfff;
  }
  /* 在同一个标签前后需要使用相同样式时，为了避免覆盖，使用子选择器+类选择器，这样优先级会更高。css选择器也有优先级 */
.topbar li.active{
  background-color: #ffed43;
}

</style>