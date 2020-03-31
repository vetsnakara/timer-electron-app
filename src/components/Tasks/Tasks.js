import React from 'react'

import AddTask from '../AddTask'
import TaskList from '../TaskList'

const Tasks = ({
  tasks,
  activeTask,
  onTaskCreate,
  onTaskDelete,
  onTaskActivate
}) => {
  return (
    <div>
      <AddTask
        onAdd={onTaskCreate}
      />

      <TaskList
        activeTask={activeTask}
        tasks={tasks}
        onActivate={onTaskActivate}
        onDelete={onTaskDelete}
      />
    </div>

  )
}

export default Tasks
