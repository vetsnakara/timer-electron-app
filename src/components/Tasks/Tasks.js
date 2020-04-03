import React from 'react'

import AddTask from '../AddTask'
import TaskList from '../TaskList'

import styles from './styles'
import { block } from '../../utils'

const b = block(styles)

const Tasks = ({
  tasks,
  timer,
  activeTask,
  onTaskCreate,
  onTaskDelete,
  onTaskActivate,
  onTaskDeactivate,
  onTimerStart,
  onTimerStop
}) => {
  return (
    <div className={b()}>
      <AddTask
        onAdd={onTaskCreate}
      />

      <TaskList
        tasks={tasks}
        timer={timer}
        activeTask={activeTask}
        onActivate={onTaskActivate}
        onDeactivate={onTaskDeactivate}
        onDelete={onTaskDelete}
        onTimerStart={onTimerStart}
        onTimerStop={onTimerStop}
      />
    </div>

  )
}

export default Tasks
