import React from 'react'
import {Route} from 'react-router-dom'
import Home from './component/Home'
const router = () => {
  return(
    <div>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/hi' component={()=>'hi'}></Route>
    </div>
  )
}
export default router;