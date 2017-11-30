import React, { Component } from 'react'

import './style.css'
import ItemBook from './itemBook'
import ItemMovie from './itemMovie'
import ItemMusic from './itemMusic'
import NotFound from '../NotFound'

class List extends Component {
  render () {
    const {type, listData, dataState} = this.props
    console.log(listData)
    if (dataState === 0) { return <NotFound /> }
    console.log(type)
    switch (type) {
      case 'book':
        return (
          <ItemBook catigory='图书' listData={listData}
            handleClick={this.props.handleClick}
          />
        )
      case 'movie':
        return (
          <ItemMovie catigory='电影' listData={listData}
            handleClick={this.props.handleClick}
          />
        )
      case 'music':
        return (
          <ItemMusic catigory='音乐' listData={listData}
            handleClick={this.props.handleClick}
          />
        )
    }
  }
}

export default List
