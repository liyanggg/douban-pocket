import React, { Component } from 'react'

/**
 * 图书的页面详情页的内容组件
 */
class BookContent extends Component {
  render () {
    const {detailData} = this.props
    // 只选择前三个tag
    var tags = detailData.tags || []
    tags = tags.slice(0, 3)
    return (
      <div className='detail-content detail-book'>
        <div className='detail-content-top'>
          <img className='detail-content-cover' src={detailData.images.large} />
          <p className='detail-content-info'>名称：{detailData.title}</p>
          <p className='detail-content-info'>作者：{
            detailData.author.map((item) => {
              return <span key={item}>item</span>
            })
          }</p>
          <p className='detail-content-info'>出版社：{detailData.publisher}</p>
          <p className='detail-content-info'>日期：{detailData.pubdate}</p>
          <p className='detail-content-info'>评分：￥{detailData.rating.average}</p>
          <p className='detail-content-info'>价钱：￥{detailData.price}</p>
          <p className='detail-content-info'>
            {
              tags.map((item, index) => {
                return <span key={item.name} className='tag'>{item.name}</span>
              })
            }
          </p>
        </div>
        <div className='detail-content-desc'>
          <h2 className='detail-content-desc-title'>序言</h2>
          <p className='detail-content-desc-text'>{detailData.catalog}</p>
          <h2 className='detail-content-desc-title'>简介</h2>
          <p className='detail-content-desc-text'>{detailData.summary}</p>
        </div>
      </div>
    )
  }
}
/**
 * 音乐的页面详情页的内容组件
 */
class MusicContent extends Component {
  render () {
    const { detailData } = this.props
    const {
            publisher,
      pubdate
        } = detailData.attrs
    let tracks = detailData.attrs.tracks || ['']
    tracks = tracks[0].split('\n')
    return (
      <div className='detail-content detail-music'>
        <div className='detail-content-top'>
          <img className='detail-content-cover' src={detailData.image} />
          <p className='detail-content-info'>
            名称：{detailData.title}
            {
              detailData.tags.map((item, index) => {
                return <span key={item.name} className='tag'>{item.name}</span>
              })
            }
          </p>
          <p className='detail-content-info'>
            作者：
            {
              detailData.author.map((item) => {
                return <span key={item.name}>{item.name}</span>
              })
            }
          </p>

          <p className='detail-content-info'>
            发布商：
            {
              publisher.map((item) => {
                return <span key={item}>{item}</span>
              })
            }
          </p>
          <p className='detail-content-info'>
            发布时间：
            {
              pubdate.map((item) => {
                return <span key={item}>{item}</span>
              })
            }
          </p>
          <p className='detail-content-info'>评分：{detailData.rating.average}</p>
        </div>
        <div className='detail-content-desc'>
          <h2 className='detail-content-title'>简介</h2>
          <p className='detail-content-desc-text'>{detailData.summary}</p>
          <h2 className='detail-content-title'>内容</h2>
          <ul className='detail-music-tracks'>
            {
              tracks.map((item) => {
                return <li key={item}>{item}</li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

/**
 * 电影的页面详情页的内容组件
 */
class MovieContent extends Component {
  render () {
    const { detailData } = this.props
    return (
      <div className='detail-content detail-movie'>
        <div className='detail-movie-top'>
          <img className='detail-movie-cover' src={detailData.images.large} />
        </div>
        <h2 className='detail-content-title'>简介</h2>
        <div className='detail-movie-info'>
          <p className='detail-movie-info-text'>
            名称：{detailData.title}
            {
              detailData.genres.map((item, index) => {
                return <span key={item} className='detail-movie-genres'>{item}</span>
              })
            }
          </p>
          <p className='detail-movie-info-text'>上映时间：{detailData.year}</p>
          <p className='detail-movie-info-text'>导演：{detailData.directors[0].name}</p>
          <p className='detail-movie-info-text'>{detailData.title}({detailData.original_title || ''})</p>
        </div>
        <h2 className='detail-content-title'>演员</h2>
        <div className='detail-movie-casts'>
          {
            detailData.casts.map((item, index) => {
              return (
                <div key={index} className='cast'>
                  <span className='cast-name'>{item.name}</span>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

/**
 * 页面详情页的内容组件
 */
class Content extends Component {
  render () {
    const {
            type,
      detailData
        } = this.props

    switch (type) {
      case 'book':
        return <BookContent detailData={detailData} />
      case 'movie':
        return <MovieContent detailData={detailData} />
      case 'music':
        return <MusicContent detailData={detailData} />
    };
  }
};

export default Content
