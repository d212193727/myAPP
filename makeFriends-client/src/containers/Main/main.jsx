import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Cookies from 'js-cookie'
import { NavBar } from 'antd-mobile'

import BoyInfo from '../Boy-info/boy-info'
import Boy from '../Boy/boy'
import GirlInfo from '../Girl-info/girl-info'
import Girl from '../Girl/girl'
import Message from '../Message/message'
import Personal from '../Personal/personal'
import NotFound from '../../components/Not-found/not-found'
import NavFooter from '../../components/nav-footer/nav-footer'
import Chat from '../Chat/chat'


import { getRedirectTo } from '../../utils'
import { getUser } from '../../redux/actions'

class Main extends Component {

  navList = [
    {
      path: '/boy',
      component: Boy,
      title: 'Girl列表',
      icon: 'girl',
      text: 'Girl',
    },
    {
      path: '/girl',
      component: Girl,
      title: 'Boy列表',
      icon: 'boy',
      text: 'Boy',
    },
    {
      path: '/message',
      component: Message,
      title: '消息列表',
      icon: 'message',
      text: '消息',
    },
    {
      path: '/personal',
      component: Personal,
      title: '用户中心',
      icon: 'personal',
      text: '个人',
    }
  ]

  componentDidMount() {
    const userid = Cookies.get('userid')
    const { _id } = this.props.user
    if (userid && !_id) {
      this.props.getUser()
    }
  }

  render() {
    const userid = Cookies.get('userid')
    if (!userid) {
      return <Redirect to='/login' />
    }
    const { user, unReadCount } = this.props
    if (!user._id) {
      return null
    } else {
      let path = this.props.location.pathname
      if (path === '/') {
        path = getRedirectTo(user.type, user.header)
        return <Redirect to={path} />
      }
    }

    const { navList } = this
    const path = this.props.location.pathname
    const currentNav = navList.find(nav => nav.path === path)

    if (currentNav) {
      if (user.type === 'boy') {
        navList[1].hide = true
      } else {
        navList[0].hide = true
      }
    }

    return (
      <div>
        {currentNav ? <NavBar className='sticky-header'>{currentNav.title}</NavBar> : null}
        <Switch>
          {
            navList.map(nav => <Route key={nav.path} path={nav.path} component={nav.component} />)
          }
          <Route path='/boyinfo' component={BoyInfo} />
          <Route path='/girlinfo' component={GirlInfo} />
          <Route path='/chat/:userid' component={Chat} />

          <Route component={NotFound} />
        </Switch>
        {currentNav ? <NavFooter navList={navList} unReadCount={unReadCount} /> : null}
      </div>
    )
  }
}

export default connect(
  state => ({ user: state.user, unReadCount: state.chat.unReadCount }),
  { getUser }
)(Main)

