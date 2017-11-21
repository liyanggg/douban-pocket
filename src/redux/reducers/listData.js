// import * as listData from '../constants/listData'
const initState = {}

export default function listData (state = initState, action) {
  switch (action.type) {
    case 'initData':
      return {
        data: action.data
      }
    case 'searchData':
      return {
        data: action.data
      }
    default:
      return state
  }

  // switch (action.type) {
  //   case 'book':
  //     return listData.bookData
  //   case 'movie':
  //     return listData.movieData
  //   case 'music':
  //     return listData.musicData
  //   default:
  //     return state
  // }
}
