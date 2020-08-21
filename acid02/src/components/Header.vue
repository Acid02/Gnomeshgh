<template>
  <header id="Header">
    <nav class="SubMenu">
      <ul class="SubMenu-left">
        <li class="SubMenu-name">
          <a href="#">{{$store.state.UserInfo.data.name}}</a>
        </li>
      </ul>
      <ul class="SubMenu-center">
        <li>
          <a href="#"></a>
        </li>
      </ul>
      <ul class="SubMenu-right">
        <li>
			<router-link to="/">
				  <i class="iconfont icon-zhuye"></i>
				  <span>主页</span>
			</router-link>
        </li>
        <li>
          <router-link :to="{name:'Classify'}">
            <i class="iconfont icon-zhifeiji"></i>
            <span>分类</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'Label'}">
            <i class="iconfont icon-dashang"></i>
            <span>标签</span>
          </router-link>
        </li>
        <div class="SubMenu-right-icon" @click="MaskShow">
            <i class="iconfont icon-sang"></i>
        </div>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods:{
	  MaskShow(){
		this.$emit('MaskShow')
	  }
  }
};
</script>

<style scoped>
.SubMenu {
  width: 100%;
  height: 58px;
  display: flex;
  justify-content: space-between;
  padding: 10px 36px;
  box-sizing: border-box;
  line-height: 2;
}
/* @supports (-webkit-backdrop-filter:none) or (backdrop-filter:none) {
   .SubMenu{
	   backdrop-filter: blur(5px); 
   }
} */
.SubMenu-name {
  font-weight: bold;
  font-size: 18px;
}
.SubMenu > ul {
  flex: 1;
  display: flex;
  align-items: center;
  line-height: initial;
}
ul.SubMenu-center{
  flex:0;
}
.SubMenu > ul > li {
  cursor: pointer;
  line-height: initial;
}
.SubMenu > ul > li > a {
  text-decoration: none;
  color: unset;
  line-height: 1.3;
  display: flex;align-items: center;
}
.SubMenu > ul > li > a > i{
    margin-right: 5px;
}
.SubMenu > ul > li > a > span{
}
.SubMenu-right {
  justify-content: flex-end;
  font-size: 14px;
}
.SubMenu-right > li {
  margin-left: 14px;

}
.SubMenu-right-icon {
  display: none;
}

@media screen and (max-width: 768px) {
  .SubMenu-right > li {
    display: none;
  }
  .SubMenu-right-icon {
    display: flex;
    align-items: center;
  }
  .SubMenu{
      padding: 10px 16px;
  }
}
</style>