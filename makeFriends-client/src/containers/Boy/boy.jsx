import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserList } from '../../redux/actions'

import UserList from '../../components/User-list/user-list'

class Boy extends Component {
  componentDidMount() {
    this.props.getUserList('girl')
  }
  render() {
    return (
      <UserList userList={this.props.userList} />
    )
  }
}

export default connect(
  state => ({ userList: state.userList }),
  { getUserList }
)(Boy)