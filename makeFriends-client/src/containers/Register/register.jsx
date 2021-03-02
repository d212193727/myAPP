import React, { Component } from 'react'
import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Radio,
  Button
} from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { register } from '../../redux/actions'
import Logo from '../../components/Logo/logo'

const ListItem = List.Item

class Register extends Component {
  state = {
    username: '',
    password: '',
    password2: '',
    type: 'girl',
  }
  register = () => {
    this.props.register(this.state)
  }
  handleChange = (name, value) => {
    this.setState({
      [name]: value
    })
  }
  toLogin = () => {
    this.props.history.replace('/login')
  }
  render() {
    // const { type } = this.state
    const { msg, redirectTo } = this.props.user
    if (redirectTo) {
      return <Redirect to={redirectTo} />
    }
    return (
      <div>
        <NavBar>对&nbsp;&nbsp;&nbsp;对&nbsp;&nbsp;&nbsp;碰</NavBar>
        <Logo />
        <WingBlank>
          <List>
            {msg ? <div className='error-msg'>{msg}</div> : null}
            <WhiteSpace />
            <InputItem placeholder='请输入用户名' onChange={val => { this.handleChange('username', val) }}>用户名:</InputItem>
            <WhiteSpace />
            <InputItem placeholder='请输入密码' type="password" onChange={val => { this.handleChange('password', val) }}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
            <WhiteSpace />
            <InputItem placeholder='请输入确认密码' type="password" onChange={val => { this.handleChange('password2', val) }}>确认密码:</InputItem>
            <WhiteSpace />
            <ListItem>
              <span style={{ marginRight: 30 }}>用户类型</span>
              <Radio checked={this.state.type === 'girl'} onClick={() => { this.handleChange('type', 'girl') }}>girl&nbsp;&nbsp;&nbsp;</Radio>
              <Radio checked={this.state.type === 'boy'} onClick={() => { this.handleChange('type', 'boy') }}>boy</Radio>
            </ListItem>
            <WhiteSpace />
            <Button type='primary' onClick={this.register}>注&nbsp;&nbsp;&nbsp;册</Button>
            <WhiteSpace />
            <Button onClick={this.toLogin}>已注册用户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default connect(
  state => ({ user: state.user }),
  { register }
)(Register)