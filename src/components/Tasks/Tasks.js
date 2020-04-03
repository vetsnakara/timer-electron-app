import React from 'react'

import AddTask from '../AddTask'
import TaskList from '../TaskList'

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
    <div>
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
