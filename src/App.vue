<!--
 * @Author: Zhenjun.Lai
 * @Date: 2022-03-12 17:15:36
 * @LastEditors: Zhenjun.Lai
 * @LastEditTime: 2022-03-16 21:39:42
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \code_UI\vue3demo\src\App.vue
-->
<template>
	<div id="app">
		<todo-input></todo-input>
		<todo-list></todo-list>
	</div>
</template>
<script lang="ts">
	import todoInput from "./components/todoInput/index.vue";
	import todoList from "./components/todoList/index.vue";
	import { defineComponent } from "@vue/runtime-core";
	export default defineComponent({
	  components: {
	    todoInput,
	    todoList,
	  },
	  setup() {
	    return {};
	  },
	});
</script>
<style lang="scss">
</style>