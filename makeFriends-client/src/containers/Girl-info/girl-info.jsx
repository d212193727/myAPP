import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { NavBar, InputItem, Button, TextareaItem } from 'antd-mobile'
import HeaderSelector from '../../components/Header-selector/header-selector'
import { updateUser } from '../../redux/actions'

class GirlInfo extends Component {
  state = {
    header: '',
    age: '',
    hobby: '',
    education: '',
    salary: '',
    character: '',
    style: ''
  }

  setHeader = (header) => {
    this.setState({
      header
    })
  }

  handleChange = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  save = () => {
    this.props.updateUser(this.state)
  }

  render() {
    const { header, type } = this.props.user
    if (header) {
      const path = type === 'girl' ? '/girl' : '/boy'
      return <Redirect to={path} />
    }

    return (
      <div>
        <NavBar>Boy相关的信息完善</NavBar>
        <HeaderSelector setHeader={this.setHeader} />
        <InputItem placeholder='请输您的年龄' onChange={val => { this.handleChange('age', val) }}>年龄：</InputItem>
        <InputItem placeholder='请输入爱好' onChange={val => { this.handleChange('hobby', val) }}>爱好：</InputItem>
        <InputItem placeholder='请输入学历' onChange={val => { this.handleChange('education', val) }}>学历：</InputItem>
        <InputItem placeholder='请输入工资' onChange={val => { this.handleChange('salary', val) }}>工资：</InputItem>
        <InputItem placeholder='请输入性格特点' onChange={val => { this.handleChange('character', val) }}>性格特点：</InputItem>
        <TextareaItem title="职位要求:"
          placeholder='请输入个人介绍'
          rows={3} onChange={val => { this.handleChange('info', val) }} />
        <Button type='primary' onClick={this.save}>保&nbsp;&nbsp;&nbsp;存</Button>
      </div>
    )
  }
}

export default connect(
  state => ({ user: state.user }),
  { updateUser }
)(GirlInfo)