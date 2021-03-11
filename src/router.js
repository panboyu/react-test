import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { } from 'react-router-dom'

import App from './App'
const A = React.lazy(() => import('./A'))
const B = React.lazy(() => import('./B'))

const history = createBrowserHistory()

const Router = () => {
    return (
        <BrowserRouter history={history}>
            <Switch>
                <Route path='/app' component={App} />
                <Route path='/a' component={A} />
                <Route path='/b' component={B} />
                <Redirect to='app'/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router