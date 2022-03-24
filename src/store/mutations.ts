/*
 * @Author: Zhenjun.Lai
 * @Date: 2022-03-15 21:58:27
 * @LastEditors: Zhenjun.Lai
 * @LastEditTime: 2022-03-16 21:20:34
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \code_UI\vue3demo\src\store\mutations.ts
 */
import { IState,ITodo } from '@/types';
import { SET_TODO } from './actionTypes';
export default {
    [SET_TODO](state: IState, todo: ITodo): void{
        state.list.unshift(todo)
        console.log("list => ",state.list)
    }
}