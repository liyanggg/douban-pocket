import React, { Component } from 'react'
import { fetchBooks, fetchMovies, fetchMusics } from './assets/fetchJsonp'

import './style.css'
import Input from './component/input'
import List from './component/list'
import Nav from './component/nav'
import Detail from './component/detail'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      type: 'book',
      // keywords: '',
      catigory: '',
      page: 'home',
      dataState: 0, // 判断数据加载是否完成，1加载完成，0加载中
      listData: {},
      detailData: {}
    }
  }
  getBooks (keywords) {
    fetchBooks(keywords).then(json => { 
      this.setState({listData: json.books, dataState: 1})
    })
  }
  getMovies (keywords) {
    fetchMovies(keywords).then(json => {
      this.setState({listData: json.subjects, dataState: 1})
    })
  }
  getMusics (keywords) {
    fetchMusics(keywords).then(json => {
      this.setState({listData: json.musics, dataState: 1})
    })
  }
  getData (type, keywords) {
    switch (type) {
      case 'book':
        this.getBooks(keywords)
        return
      case 'movie':
        this.getMovies(keywords)
        return
      case 'music':
        this.getMusics(keywords)       
    }  
  }
  changeListData (type) {
    this.setState({dataState: 0})
    this.getData(type, {})
  }
  changeSearchData (type, keywords) {
    this.setState({dataState: 0})
    this.getData(type, {keywords})
  }
  setType (type) {
    this.setState({type})
  }
  setKeywords (keywords) {
    this.setState({keywords})
  }
  handleClickDetail (catigory, detailData) {
    this.setState({
      detailData: detailData,
      catigory: catigory,
      page: 'detail'
    })
  }
  handleClickBack () {
    this.setState({page: 'home'})
  }

  /**
   * 进入首页首先展示图书列表
   */
  componentWillMount () {
    this.getData('book', {})
  }

  render () {
    const {page, catigory, type, listData, dataState, detailData} = this.state
    switch (page) {
      case 'home':
        return (
          <div className='app'>
            <Input type={type}
              setKeywords={this.setKeywords.bind(this)}
              changeSearchData={this.changeSearchData.bind(this)}
            />
            <List type={this.state.type} listData={listData} dataState={dataState}
              handleClick={this.handleClickDetail.bind(this)}
            />
            <Nav setType={this.setType.bind(this)} type={type}
              changeListData={this.changeListData.bind(this)}
            />
          </div>
        )
      case 'detail':
        return (
          <Detail catigory={catigory} type={type} detailData={detailData}
            handleClick={this.handleClickBack.bind(this)}
          />
        )
    }
  }
}

export default App