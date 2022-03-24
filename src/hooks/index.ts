/*
 * @Author: Zhenjun.Lai
 * @Date: 2022-03-16 21:05:22
 * @LastEditors: Zhenjun.Lai
 * @LastEditTime: 2022-03-16 21:41:42
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \code_UI\vue3demo\src\hooks\index.ts
 */

import { SET_TODO } from '@/store/actionTypes';
import { ITodo, TODO_STATUS } from '@/types';
import { Store, useStore } from 'vuex';

interface IUseTodo{
    setTodo: (value: string) => void;
    // setTodoList: () => void;
    // romveTodo: () => void;
    // setStatus: () => void;
    // setDoing: () => void;
}

function useTodo(): IUseTodo {
    const store: Store<unknown> = useStore();

    function setTodo(value: string): void {
        const todo : ITodo = {
            id: new Date().getTime(),
            content: value,
            status: TODO_STATUS.WILLDO
        }
        store.dispatch(SET_TODO,todo)
    }
    // function setTodoList() {
        
    // }
    // function romveTodo() {
        
    // }
    // function setStatus() {
        
    // }
    // function setDoing() {
        
    // }

    return {
        setTodo
        // setTodoList,
        // romveTodo,
        // setStatus,
        // setDoing
    }
}

export {
    useTodo
}