/*
 * @Author: Zhenjun.Lai
 * @Date: 2022-03-12 17:15:36
 * @LastEditors: Zhenjun.Lai
 * @LastEditTime: 2022-03-24 10:37:30
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \code_UI\vue3demo\src\store\index.ts
 */
import { createStore } from 'vuex'
import actions from './action'
import mutations from './mutations'
import state from './state'

export default createStore({
    state,
    mutations,
    actions,
})
