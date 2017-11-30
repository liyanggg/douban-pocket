import React, { Component } from 'react'
import './style.css'

class Input extends Component {
  handleClick () {
    const {setKeywords, changeSearchData, type} = this.props
    let keywords = encodeURI(this.input.value)
    setKeywords(keywords)
    changeSearchData(type, keywords)
  }
  render () {
    const placeholder = {
      'book': '书名、作者、ISBN',
      'movie': '电影、影人、影院、电视剧',
      'music': '唱片名、表演者、条码、ISRC'
    }
    return (
      <div className='input-container' >
        <i className='icon iconfont icon-search3' />
        <input placeholder={placeholder[this.props.type]}
          ref={input => (this.input = input)}
        />
        <button onClick={this.handleClick.bind(this)} >搜索</button>
      </div>
    )
  }
}

export default Input
