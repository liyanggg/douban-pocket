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
  titleClass (type) {
    return type === this.props.type ? 'title-item active' : 'title-item'
  }
  handleClick (type) {
    const {setType, changeListData} = this.props
    setType(type)
    changeListData(type)
  }

  render () {
    return (
      <div className='nav'>
        {
          this.state.navs.map((item, index) => {
            const type = this.state.navs[index].type
            const iconClassName = `icon iconfont icon-${item.type}`
            return (
              <div className={this.titleClass(type)} key={index}
                onClick={() => { this.handleClick(type) }}
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
