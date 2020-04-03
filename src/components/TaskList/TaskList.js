import React from 'react'

import Task from '../Task'

import styles from './styles.scss'
import { block } from '../../utils'

const b = block(styles)

const TaskList = ({
  tasks,
  activeTask,
  onDelete,
  onActivate,
  onDeactivate,
  onTimerStart,
  onTimerStop,
  timer
}) => {
  const taskList = [...tasks]

  if (activeTask) {
    taskList.unshift(activeTask)
  }

  if (taskList.length === 0) {
    return (
      <p
        style={{
          textAlign: 'center',
          marginTop: 20
        }}
      >
        No tasks yet. Add some.
      </p>
    )
  }

  return (
    <ul className={b()}>
      {taskList.map((task, index) => {
        const selected = !!activeTask && index === 0

        return (
          <li
            className={b('item', { selected })}
            key={task.id}
          >
            <Task
              task={task}
              timer={timer}
              selected={selected}
              disabled={activeTask}
              onDelete={() => onDelete(task)}
              onActivate={() => onActivate(task)}
              onDeactivate={() => onDeactivate(activeTask)}
              onTimerStart={onTimerStart}
              onTimerStop={onTimerStop}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default TaskList
