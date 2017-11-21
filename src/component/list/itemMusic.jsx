import React, { Component } from 'react'
import './style.css'

class ItemMusic extends Component {
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
            return (
              <li className='list-item' key={index}
                onClick={() => { handleClick(catigory, listData[index]) }}
              >
                <img src={item.image} />
                <div className='list-item-content'>
                  <p className='list-item-info'>
                    <span className='title'>名称：</span>
                    <span className='title'>{item.title}</span>
                  </p>
                  <p className='list-item-info'>
                    <span className='title'>作者：</span>
                    <span className='title'>{item.author && item.author[0].name}</span>
                  </p>
                  <p className='list-item-info'>
                    <span className='title'>评分：</span>
                    <span className='title'>{item.rating.average}</span>
                  </p>
                  <p className='list-item-desc'>{item.summary}</p>
                </div>
              </li>

            )
          })
        }
      </ul>
    )
  }
}

export default ItemMusic
