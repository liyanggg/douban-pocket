import React, { Component } from 'react'
import './style.css'

class Nav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      curIndex: 0,
      navs: [{
        type: 'book',
        catigory: '图书'
      }, {
        type: 'movie',
        catigory: '电影'
      }, {
        type: 'music',
        catigory: '音乐'
      }]
    }
  }
  titleClass (index) {
    return index === this.state.curIndex ? 'title-item active' : 'title-item'
  }
  handleClick (index, type) {
    console.log('click', index)
    this.setState({
      curIndex: index
    })
    this.changeNav(type)
    this.props.getType(type)
  }
  changeNav (type) {
    switch (type) {
      case 'book':
        return this.props.actions.getBooks(type, {})
      case 'movie':
        return this.props.actions.getMovies(type, {})
      case 'music':
        return this.props.actions.getMusics(type, {})
    }
  }
  render () {
    const self = this
    return (
      <div className='nav'>
        {
          this.state.navs.map((item, index) => {
            const type = self.state.navs[index].type
            const iconClassName = `icon iconfont icon-${item.type}`
            return (
              <div className={self.titleClass(index)} key={index}
                onClick={() => { self.handleClick(index, type) }}
              >
                <i className={iconClassName} />
                <div>{ item.catigory }</div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Nav
