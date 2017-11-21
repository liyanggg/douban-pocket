import { fetchBooks, fetchMovies, fetchMusics } from '../constants/fetchJsonp'

function dataBooks (keywords) {
  return dispatch => {
    return fetchBooks({keywords}).then(
      json => {
        dispatch({
          type: 'searchData',
          data: json.books
        })
      }
    )
  }
}
function dataMovies (keywords) {
  return dispatch => {
    return fetchMovies({keywords}).then(
      json => {
        dispatch({
          type: 'searchData',
          data: json.subjects
        })
      }
    )
  }
}
function dataMusics (keywords) {
  return dispatch => {
    return fetchMusics({keywords}).then(
      json => {
        dispatch({
          type: 'searchData',
          data: json.musics
        })
      }
    )
  }
}
export function searchBooks (keywords) {
  return (dispatch, getState) => {
    dispatch(dataBooks(keywords))
  }
}
export function searchMovies (keywords) {
  return (dispatch, getState) => {
    dispatch(dataMovies(keywords))
  }
}
export function searchMusics (keywords) {
  return (dispatch, getState) => {
    return dispatch(dataMusics(keywords))
  }
}
