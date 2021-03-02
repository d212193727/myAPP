import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { WingBlank, WhiteSpace, Card } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import QueueAnim from 'rc-queue-anim'

const Header = Card.Header
const Body = Card.Body

class UserList extends Component {
  static propTypes = {
    userList: PropTypes.array.isRequired
  }
  render() {
    const { userList } = this.props
    return (
      <WingBlank style={{ marginBottom: 50, marginTop: 50 }}>
        <QueueAnim type='scale'>
          {
            userList.map(user => (
              <div key={user._id}>
                <WhiteSpace />
                <Card onClick={() => this.props.history.push(`/chat/${user._id}`)}>
                  <Header
                    thumb={user.header ? require(`../../assets/images/${user.header}.png`) : null} extra={user.username} />
                  <Body>
                    {user.age ? <div>年龄：{user.age
                    }</div> : null}
                    {user.hobby ? <div>爱好：{user.hobby}</div> : null}
                    {user.education ? <div>学历：{user.education}</div> : null}
                    {user.salary ? <div>薪水：{user.salary}</div> : null}
                    {user.character ? <div>性格: {user.character}</div> : null}
                    {user.style ? <div>喜欢类型：{user.style}</div> : null}
                  </Body>
                </Card>
              </div>
            ))
          }
        </QueueAnim>
      </WingBlank>
    )
  }
}

export default withRouter(UserList)