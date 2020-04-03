import React from 'react'
import { v4 as uuid } from 'uuid'

import styles from './styles'
import { block } from '../../utils'

const b = block(styles)

const AddTask = ({
  onAdd
}) => {
  const [task, setTask] = React.useState('')

  const handleChange = ({ target: { value: task } }) => {
    setTask(task)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (task.trim()) {
      onAdd({
        id: uuid(),
        totalTime: 0,
        task
      })

      setTask('')
    }
  }

  return (
    <form
      className={b()}
      onSubmit={handleSubmit}
    >
      <input
        className={b('input')}
        type='text'
        placeholder='Add new task'
        value={task}
        onChange={handleChange}
        autoFocus
      />
    </form>
  )
}

export default AddTask
