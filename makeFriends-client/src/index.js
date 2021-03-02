import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './redux/store'
import Rigister from './containers/Register/register'
import Login from './containers/Login/login'
import Main from './containers/Main/main'

import './assets/css/index.less'


ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/register" component={Rigister} />
        <Route path="/login" component={Login} />
        <Route component={Main}></Route>
      </Switch>
    </HashRouter>
  </Provider>
), document.getElementById('root'))