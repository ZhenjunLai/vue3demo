/*
 * @Author: Zhenjun.Lai
 * @Date: 2022-03-15 21:57:55
 * @LastEditors: Zhenjun.Lai
 * @LastEditTime: 2022-03-24 10:38:00
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \code_UI\vue3demo\src\store\action.ts
 */

import { IState,ITodo } from '@/types';
import { Commit } from 'vuex';
import { SET_TODO } from './actionTypes';

interface ICtx {
    commit: Commit,
    state: IState
}

export default {
    [SET_TODO]({ commit }: ICtx, todo: ITodo): void {
        commit(SET_TODO,todo)
    } 
}