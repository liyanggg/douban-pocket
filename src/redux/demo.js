import { createStore } from 'redux'

/**
 * 1、定义规则
 * 这是一个 函数形式为 (state, action) => state 的纯函数。
 * 描述了 action 如何改变state。
 * 当 state 变化时需要返回全新的对象，而不是修改传入的参数。
 */
function changePage (state = 0, action) {
  switch (action.type) {
    case 'indexPage':
      return state + 1
    case 'detailPage':
      return state - 1
    default:
      return state
  }
}
/**
 * 2、根据规则生成store
 * 创建 Redux store 来存放应用的状态。
 * API 是 { subscribe, dispatch, getState }。
 */
let store = createStore(changePage)

/**
 * 3、定义state变化之后的操作
 *   可以手动订阅更新，也可以事件绑定到视图层，相当于监听信息传递
 */
store.subscribe(() =>
    console.log(store.getState())
  )

/**
 * 4、触发state变化
 *  改变内部 state 惟一方法是 dispatch 一个 action，来触发state变化。
 * action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行
 */
store.dispatch({ type: 'INCREMENT' })
  // 1
store.dispatch({ type: 'INCREMENT' })
  // 2
store.dispatch({ type: 'DECREMENT' })
  // 1
