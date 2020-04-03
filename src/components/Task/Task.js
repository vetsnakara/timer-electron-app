import React from 'react'
import {
  FaStar as ActivateIcon,
  FaTrash as RemoveIcon,
  FaPlay as PlayIcon,
  FaPause as PauseIcon,
  FaStop as StopIcon,
  FaCheckCircle as ActiveTaskIcon
} from 'react-icons/fa'

import styles from './styles.scss'
import { block } from '../../utils'

import Icon from '../Icon'
import IconButton from '../IconButton'

const b = block(styles)

const Task = ({
  task,
  timer,
  selected,
  disabled,
  onDelete,
  onActivate,
  onDeactivate,
  onTimerStart,
  onTimerStop
}) => {
  const renderControlButtons = () => {
    return (
      <div className={b('controls')}>
        {timer.active
          ? (
            <IconButton
              component={PauseIcon}
              color='#ee6e73'
              size={18}
              onClick={onTimerStop}
            />
          ) : (
            <IconButton
              component={PlayIcon}
              color='#ee6e73'
              size={18}
              onClick={onTimerStart}
            />
          )}
        <IconButton
          component={StopIcon}
          disabled={timer.active}
          color='#ee6e73'
          size={18}
          onClick={onDeactivate}
        />
      </div>
    )
  }

  return (
    <div className={b()}>
      <div className={b('left')}>
        {!selected ? (
          <IconButton
            component={ActivateIcon}
            color='#ee6e73'
            size={20}
            onClick={onActivate}
            disabled={disabled}
          />
        ) : (
          <Icon
            component={ActiveTaskIcon}
            color='#ee6e73'
            size={20}
          />
        )}

        <div>
          <p className={b('title')}>{task.task}</p>
          <p>
            Total time:{' '}
            <span className={b('time')}>{task.totalTime}</span>{' '}
            seconds
          </p>
        </div>
      </div>

      {!selected ? (
        <IconButton
          component={RemoveIcon}
          className={b('remove')}
          color='gray'
          size={15}
          onClick={onDelete}
        />
      ) : renderControlButtons()}
    </div>
  )
}

export default Task
