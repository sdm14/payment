import React from 'react'
import { Switch, Route } from 'react-router'
import { MainPage } from './pages/MainPage'
import { OperatorItemPage } from './pages/OperatorItemPage'


export default (
   <Switch>
      <Route path={'/payment'} exact render={() => <MainPage />} />
      <Route path={'/operator/:id'} render={() => <OperatorItemPage />} />
   </Switch>
)