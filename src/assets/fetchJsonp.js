import fetchJsonp from 'fetch-jsonp'

function encode (url) {
  return url.replace(/'/g, '%27').replace(/"/g, '%22')
}

export function fetchBooks ({ keywords = '""' }) {
  const start = 0
  let url = encode(`https://api.douban.com/v2/book/search?q=${keywords}&start=${start}`)
  return fetchJsonp(url).then(response => {
    return response.json()
  })
}

export function fetchMovies ({ keywords }) {
  let url = 'https://api.douban.com/v2/movie/top250'
  if (keywords) {
    url = encode(`https://api.douban.com/v2/movie/search?q=${keywords}`)
  }
  return fetchJsonp(url).then(response => {
    return response.json()
  })
}

export function fetchMusics ({ keywords = '%E9%9F%B3%E4%B9%90' }) { // 豆瓣取不到数据，这里暂时先给'q'赋值
  const start = 0
  let url = (`https://api.douban.com/v2/music/search?q=${keywords}&start=${start}`)
  return fetchJsonp(url).then(response => {
    return response.json()
  })
}
