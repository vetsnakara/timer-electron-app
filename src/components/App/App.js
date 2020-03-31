/* global localStorage */

import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { v4 as uuid } from 'uuid'

import { block, Timer } from '../../utils'

import Header from '../Header'
import ActiveTask from '../ActiveTask'
import Tasks from '../Tasks'
import Settings from '../Settings'
import NotFound from '../NotFound'

import styles from './styles.scss'

const b = block(styles)

const TIMER_INIT_SETTINGS = {
  time: 5,
  unit: 'seconds'
}

const INITIAL_STATE = {
  tasks: [
    { id: uuid(), task: 'Task 1', totalTime: 10, isActive: false },
    { id: uuid(), task: 'Task 2', totalTime: 20, isActive: false },
    { id: uuid(), task: 'Task 3', totalTime: 30, isActive: false },
    { id: uuid(), task: 'Task 4', totalTime: 40, isActive: false },
    { id: uuid(), task: 'Task 5', totalTime: 50, isActive: false }
  ],

  activeTask: null,

  timer: {
    active: false,
    display: '',
    ...TIMER_INIT_SETTINGS
  }
}

const APP_DATA = JSON.parse(localStorage.getItem('__INITIAL_STATE__'))

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = APP_DATA || INITIAL_STATE
    this.initializeTimer()
  }

  componentDidUpdate () {
    localStorage.setItem('__INITIAL_STATE__', JSON.stringify(this.state))
  }

  // Initialize timer
  initializeTimer = (settings = {}) => {
    const { timer } = this.state

    const timerConfig = {
      duration: Number(settings.time) || timer.time,
      unit: settings.unit || timer.unit,
      onDisplayChange: this.handleTimerUpdate,
      onTimerExpiration: this.handleTimerExpiration
    }

    const newTimer = new Timer(timerConfig)

    this.timer = newTimer
  }

  // Timer start
  handleTimerStart = () => {
    this.timer.start(() => {
      this.setState(state => ({
        ...state,
        timer: {
          ...state.timer,
          active: true
        }
      }))
    })
  }

  // Timer stop
  handleTimerStop = () => {
    this.timer.stop(() => {
      this.setState(state => ({
        ...state,
        timer: {
          ...state.timer,
          active: false
        }
      }))
    })
  }

  // Timer update
  handleTimerUpdate = (newDisplay, { reset }) => {
    this.setState(state => ({
      ...state,
      activeTask: {
        ...state.activeTask,
        totalTime: !reset
          ? state.activeTask.totalTime + 1
          : state.activeTask.totalTime
      },
      timer: {
        ...state.timer,
        display: newDisplay
      }
    }))
  }

 // Timer expired
 handleTimerExpiration = () => {
   this.setState(state => ({
     ...state,
     timer: {
       ...state.timer,
       active: false
     }
   }))
 }

// Create task
handleTaskCreate = task => {
  this.setState(state => ({
    ...state,
    tasks: [task, ...state.tasks]
  }))
}

// Delete task
handleTaskDelete = task => {
  this.setState(state => ({
    ...state,
    tasks: state.tasks.filter(t => t.id !== task.id)
  }))
}

// Activate task
handleTaskActivate = task => {
  this.setState(state => ({
    ...state,
    activeTask: task,
    tasks: state.tasks.filter(t => t.id !== task.id),
    timer: {
      ...state.timer,
      display: this.timer.display
    }
  }))
}

// Deactivate task
handleTaskDeactivate = task => {
  this.setState(state => ({
    ...state,
    tasks: [task, ...state.tasks],
    activeTask: null
  }))
}

// Settings update
handleSettingsUpdate = (newSettings) => {
  this.initializeTimer(newSettings)

  this.setState(state => ({
    ...state,
    timer: {
      ...state.timer,
      ...newSettings,
      display: this.timer.display
    }
  }))
}

// Settings reset
handleSettingsReset = () => {
  this.handleSettingsUpdate({
    ...TIMER_INIT_SETTINGS
  })
}

render () {
  const { timer, tasks, activeTask } = this.state

  return (
    <Router>
      <div className={b()}>
        <Header className={b('header')} />

        <main className={b('main')}>
          <Switch>
            <Route
              path='/'
              exact
              render={() => (
                <ActiveTask
                  timer={timer}
                  activeTask={activeTask}
                  onTaskDeactivate={this.handleTaskDeactivate}
                  onTimerStart={this.handleTimerStart}
                  onTimerStop={this.handleTimerStop}
                />
              )}
            />

            <Route
              path='/tasks'
              render={() => (
                <Tasks
                  tasks={tasks}
                  activeTask={activeTask}
                  onTaskCreate={this.handleTaskCreate}
                  onTaskDelete={this.handleTaskDelete}
                  onTaskActivate={this.handleTaskActivate}
                />
              )}
            />

            <Route
              path='/settings'
              render={() => (
                <Settings
                  timer={timer}
                  onSettingsUpdate={this.handleSettingsUpdate}
                  onSettingsReset={this.handleSettingsReset}
                />
              )}
            />

            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    </Router>
  )
}
}

export default App
