import { fetchBooks, fetchMovies, fetchMusics } from '../constants/fetchJsonp'

function dataBooks () {
  return dispatch => {
    return fetchBooks({}).then(
      json => {
        dispatch({
          type: 'initData',
          data: json.books
        })
      }
    )
  }
}
function dataMovies () {
  return dispatch => {
    return fetchMovies({}).then(
      json => {
        dispatch({
          type: 'initData',
          data: json.subjects
        })
      }
    )
  }
}
function dataMusics () {
  return dispatch => {
    return fetchMusics({}).then(
      json => {
        dispatch({
          type: 'initData',
          data: json.musics
        })
      }
    )
  }
}
export function getBooks () {
  return (dispatch, getState) => {
    dispatch(dataBooks())
  }
}
export function getMovies () {
  return (dispatch, getState) => {
    dispatch(dataMovies())
  }
}
export function getMusics () {
  return (dispatch, getState) => {
    return dispatch(dataMusics())
  }
}
