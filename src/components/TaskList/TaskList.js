import React from 'react'

import Task from '../Task'

const TaskList = ({
  tasks,
  activeTask,
  onDelete,
  onActivate
}) => {
  const taskList = [...tasks]

  if (activeTask) {
    taskList.unshift(activeTask)
  }

  return (
    <ul>
      {taskList.map((task, index) => {
        const isActive = activeTask && index === 0

        return (
          <li key={task.id}>
            <Task
              task={task}
              isActive={isActive}
              onDelete={() => onDelete(task)}
              onActivate={() => onActivate(task)}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default TaskList
