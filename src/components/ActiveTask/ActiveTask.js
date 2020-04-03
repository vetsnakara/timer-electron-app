import React from 'react'

import styles from './styles'
import { block } from '../../utils'

import Button from '../Button'

const b = block(styles)

const ActiveTask = ({
  timer,
  activeTask,
  onTaskDeactivate,
  onTimerStart,
  onTimerStop
}) => {
  const renderTaskInfo = () => (
    <div className={b('info')}>
      <h2 className={b('task-title')}>{activeTask.task}</h2>
      <h4 className={b('task-time')}>Time Left: <span className={b('time-left')}>{timer.display}</span></h4>
    </div>
  )

  const renderActionButtons = () => (
    <div className={b('buttons')}>
      {
        timer.active
          ? (
            <Button
              onClick={onTimerStop}
              color='#F44336'
            >
              Stop Timer
            </Button>
          ) : (
            <>
              <Button
                color='#4CAF50'
                onClick={onTimerStart}
              >Start Timer
              </Button>
              <Button
                color='#26a69a'
                onClick={() => onTaskDeactivate(activeTask)}
              >
                Deactivate Task
              </Button>
            </>
          )
      }
    </div>
  )

  return (
    <div className={b()}>
      {
        activeTask
          ? (
            <>
              {renderTaskInfo()}
              {renderActionButtons()}
            </>
          ) : (
            <h3 className={b('no-task')}>No Active Tasks</h3>
          )
      }
    </div>
  )
}

export default ActiveTask
