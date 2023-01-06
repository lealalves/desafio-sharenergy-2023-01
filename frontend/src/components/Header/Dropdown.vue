<template>
  <div id="dropdown">
    <li @click="isOpen = !isOpen">Menu</li>
      <div class="sub-menu" v-show="isOpen" >
        <div v-for="(item, i) in items" :key="i">
          <component :is="item.is" :to="item.url">{{item.title}}</component>
        </div>
      </div>
  </div>
</template>
<style scoped>
.sub-menu {
  z-index: 1;
  position: absolute;
  background-color: #222;
  right: -10px;
  border-radius: 10px;
}
.sub-menu div{
  padding: 10px;
  text-align: center;
  cursor: pointer;
}
li{
  padding: 5px;
}
a{
  color: #f5f5f5;
}
</style>
<script>
  export default {
    name: 'Dropdown',
    props: ['items'],
    data() {
		return {
			isOpen: false
		}
	},
}
</script>