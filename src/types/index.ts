/*
 * @Author: Zhenjun.Lai
 * @Date: 2022-03-15 21:00:33
 * @LastEditors: Zhenjun.Lai
 * @LastEditTime: 2022-03-16 20:55:33
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \code_UI\vue3demo\src\types\index.ts
 */

interface ITodo{
    id: number;
    content: string;
    status: TODO_STATUS;
}

interface IState {
    list: ITodo[]
}

enum TODO_STATUS {
    WILLDO = 'willdo',
    DOING = 'doing',
    FINISHED = 'finished'
}

export {
    IState,
    ITodo,
    TODO_STATUS
}