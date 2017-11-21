import React, { Component } from 'react'
import './style.css'

class ItemBook extends Component {
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
            var tags = item.tags || []
            tags = tags.slice(0, 3)
            return (
              <li className='list-item' key={index}
                onClick={() => { handleClick(catigory, item) }}
              >
                <img src={item.image} />
                <div className='list-item-content'>
                  <p className='list-item-info'>
                    <span className='title'>名称：</span>
                    <span className='title'>{item.title}</span>
                  </p>
                  <p className='list-item-info'>
                    {
              tags.map((item, index) => {
                return <span key={item.title} className='tag'>{item.name}</span>
              })
            }
                  </p>
                  <p className='list-item-info'>
                    <span className='title'>作者：</span>
                    <span className='title'>{item.author}</span>
                  </p>
                  <p className='list-item-info'>
                    <span className='title'>评分：</span>
                    <span className='title'>{item.rating.average}</span>
                  </p>
                  <p className='list-item-info'>
                    <span className='title'>时间：</span>
                    <span className='title'>{item.pubdate}</span>
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

export default ItemBook
