import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as getInitData from '../../redux/actions/getInitData'
import * as getSearchData from '../../redux/actions/getSearchData'

import './style.css'
import ItemBook from './itemBook'
import ItemMovie from './itemMovie'
import ItemMusic from './itemMusic'
import NotFound from '../NotFound'

class List extends Component {
  render () {
    const {data} = this.props.listData
    const {type, keywords, getInitData, getSearchData, listData} = this.props
    if (!data) { return <NotFound /> }

    switch (type) {
      case 'book':
        if (!keywords) {
          getInitData.getBooks()
        } else {
          getSearchData.searchBooks(keywords)
        }
        return (
          <ItemBook catigory='图书' listData={listData.data}
            handleClick={this.props.handleClick}
          />
        )
      case 'movie':
        if (!keywords) {
          getInitData.getMovies()
        } else {
          getSearchData.searchMovies(keywords)
        }
        return (
          <ItemMovie catigory='电影' listData={listData.data}
            handleClick={this.props.handleClick}
          />
        )
      case 'music':
        if (!keywords) {
          getInitData.getMusics()
        } else {
          getSearchData.seatchMusics(keywords)
        }
        return (
          <ItemMusic catigory='音乐' listData={listData.data}
            handleClick={this.props.handleClick}
          />
        )
    }
  }
}

function mapStateToProps (state) {
  return {
    listData: state.listData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getInitData: bindActionCreators(getInitData, dispatch),
    getSearchData: bindActionCreators(getSearchData, dispatch)
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)
