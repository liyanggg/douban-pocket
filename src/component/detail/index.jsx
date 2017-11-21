import React, { Component } from 'react'
import Header from './header'
import Content from './content'
import './index.css'

class Detail extends Component {
  render () {
    const { type, detailData, catigory } = this.props
    return (
      <div className='detail'>
        <Header title={detailData.title} fromTitle={catigory} handleClick={this.props.handleClick} />
        <Content type={type} detailData={detailData} />
      </div>
    )
  }
}

export default Detail
