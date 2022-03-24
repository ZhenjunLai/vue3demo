/*
 * @Author: Zhenjun.Lai
 * @Date: 2022-03-12 17:15:36
 * @LastEditors: Zhenjun.Lai
 * @LastEditTime: 2022-03-16 21:22:19
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \code_UI\vue3demo\src\router\index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
