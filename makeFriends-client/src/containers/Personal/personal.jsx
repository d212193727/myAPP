import React from 'react'
import { Result, List, WhiteSpace, Button, Modal } from 'antd-mobile'
import { connect } from 'react-redux'
import Cookies from 'js-cookie'

import { resetUser } from '../../redux/actions'

const Item = List.Item
const Brief = Item.Brief

class Personal extends React.Component {

  logout = () => {
    Modal.alert('退出', '确定退出登陆吗?', [
      { text: '取消' },
      {
        text: '确定',
        onPress: () => {

          Cookies.remove('userid')
          this.props.resetUser()
        }
      }
    ])
  }

  render() {
    const {
      username,
      header,
      age,
      hobby,
      education,
      salary,
      character,
      style
    } = this.props.user
    return (
      <div style={{ marginBottom: 50, marginTop: 50 }}>
        <Result
          img={<img src={require(`../../assets/images/${header}.png`)} style={{ width: 50 }} alt="header" />}
          title={username}
          message={education}
        />

        <List renderHeader={() => '相关信息'}>
          <Item multipleLine>
            <Brief>年龄：{age}</Brief>
            <Brief>性格：{character}</Brief>
            <Brief>爱好：{hobby}</Brief>
            {salary ? <Brief>薪资：{salary}</Brief> : null}
            <Brief>自我描述：{style}</Brief>
          </Item>
        </List>
        <WhiteSpace />
        <List>
          <Button type='warning' onClick={this.logout}>退出登录</Button>
        </List>
      </div>
    )
  }
}

export default connect(
  state => ({ user: state.user }),
  { resetUser }
)(Personal)