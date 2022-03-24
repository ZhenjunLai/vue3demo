<!--
 * @Author: Zhenjun.Lai
 * @Date: 2022-03-15 21:14:21
 * @LastEditors: Zhenjun.Lai
 * @LastEditTime: 2022-03-16 21:19:14
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \code_UI\vue3demo\src\components\todoInput\index.vue
-->

<template>
	<div>
		<input type="text"
			   v-model="todoValue"
			   @keyup="setTodoValue">
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref } from "@vue/runtime-core";
	import { useTodo } from "../../hooks";
	export default defineComponent({
	  name: "todoInput",
	  setup() {
	    const todoValue = ref<string>("");
	    const { setTodo } = useTodo();
	    const setTodoValue = (e: KeyboardEvent): void => {
	      if (e.keyCode === 13 && todoValue.value.trim().length) {
	        setTodo(todoValue.value);
	        todoValue.value = "";
	      }
	    };
	    return {
	      todoValue,
	      setTodoValue,
	    };
	  },
	});
</script>

<style>
</style>