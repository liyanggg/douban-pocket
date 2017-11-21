import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as getInitData from './redux/actions/getInitData'

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
      detailData: [],
      page: 'home'
    }
  }
  getType (type) {
    this.setState({type})
  }
  getKeywords (keywords) {
    this.setState({keywords})
  }
  handleClickDetail (catigory, detailData) {
    var type = this.state.type
    console.log(type, detailData.title)
    this.setState({
      catigory: catigory,
      detailData: detailData,
      type: type,
      page: 'detail'
    })
  }
  handleClickBack () {
    this.setState({page: 'home'})
  }
  componentWillMount () {
    this.props.getInitData.getBooks()
  }

  render () {
    const {page, detailData, catigory, type, keywords} = this.state
    switch (page) {
      case 'home':
        return (
          <div className='app'>
            <Input type={type} getKeywords={this.getKeywords.bind(this)} />
            <List type={this.state.type} handleClick={this.handleClickDetail.bind(this)} keywords={keywords} />
            <Nav actions={this.props.getInitData} getType={this.getType.bind(this)} />
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

function mapStateToProps (state) {
  return {
    listData: state.listData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getInitData: bindActionCreators(getInitData, dispatch)
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
