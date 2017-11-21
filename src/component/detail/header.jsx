import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <div className='detail-header'>
        <div className='deatail-header-left' onClick={this.props.handleClick}>
          <i className='iconfont icon-back' />
          <span className='deatail-header-from'>{this.props.fromTitle}</span>
        </div>
        <p className='deatail-header-title'>{this.props.title}</p>
      </div>
    )
  }
}

export default Header
