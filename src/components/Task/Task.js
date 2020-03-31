import React from 'react'

const Task = ({
  task,
  isActive,
  onDelete,
  onActivate
}) => {
  return (
    <div style={{
      display: 'flex'
    }}
    >
      <button onClick={onActivate}>
        {isActive ? 'ACTIVATED TASK' : 'TASK'}
      </button>

      <div>
        <p>{task.task}</p>
        <p>Total time: {task.totalTime}</p>
      </div>

      {!isActive && <button onClick={onDelete}>DELETE</button>}
    </div>
  )
}

export default Task
