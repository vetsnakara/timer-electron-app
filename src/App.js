import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Header from './components/Header'
import ActiveTask from './components/ActiveTask'
import TaskList from './components/TaskList'
import Settings from './components/Settings'

const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route
            path='/'
            exact
            render={() => <ActiveTask />}
          />
          <Route
            path='/tasks'
            render={() => <TaskList />}
          />
          <Route
            path='/settings'
            render={() => <Settings />}
          />
        </Switch>
      </div>
    </Router>
  )
}

export default App
