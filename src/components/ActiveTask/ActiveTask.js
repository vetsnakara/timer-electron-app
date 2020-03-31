import React from 'react'

const ActiveTask = ({
  timer,
  activeTask,
  onTaskDeactivate,
  onTimerStart,
  onTimerStop
}) => {
  const renderTaskInfo = () => (
    <div>
      <h2>Time Left: {timer.display}</h2>
      <h4>Current Task: {activeTask.task}</h4>
    </div>
  )

  const renderActionButtons = () => (
    <div>
      {
        timer.active
          ? (
            <button onClick={onTimerStop}>Stop Timer</button>
          ) : (
            <>
              <button onClick={onTimerStart}>Start Timer</button>
              <button
                onClick={() => onTaskDeactivate(activeTask)}
              >
                Deactivate Task
              </button>
            </>
          )
      }
    </div>
  )

  return (
    <div>
      {
        activeTask
          ? (
            <>
              {renderTaskInfo()}
              {renderActionButtons()}
            </>
          ) : (
            <h3>No Active Tasks</h3>
          )
      }
    </div>
  )
}

export default ActiveTask
