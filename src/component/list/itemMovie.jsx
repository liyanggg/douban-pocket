import React, { Component } from 'react'
import './style.css'

class ItemMovie extends Component {
  render () {
    const {
      listData,
      catigory,
      handleClick
    } = this.props
    return (
      <ul className='tab-content'>
        {
          listData.map((item, index) => {
            var casts = item.casts || []
            var genres = item.genres || []
            genres = genres.slice(0, 3)
            return (
              <li className='list-item' key={index}
                onClick={() => { handleClick(catigory, item) }}
              >
                <img src={item.images.small} />
                <div className='list-item-content'>
                  <p className='list-item-info list-item-title'>
                    {item.title} - {item.year}
                  </p>
                  <p className='list-item-info'>
                    {
                      genres.map((item, index) => {
                        return <span key={item} className='tag'>{item}</span>
                      })
                    }
                  </p>
                  <p className='list-item-info'>
                    {
                      casts.map((item, index) => {
                        return <span key={item.name} className='actor'>{item.name}</span>
                      })
                    }
                  </p>
                  <p className='list-item-info'>
                    <span className='title'>评分：</span>
                    <span className='title'>{item.rating.average}</span>
                  </p>
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default ItemMovie
