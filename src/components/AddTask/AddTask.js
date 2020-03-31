import React from 'react'
import { v4 as uuid } from 'uuid'

const AddTask = ({
  onAdd
}) => {
  const [task, setTask] = React.useState('')

  const handleChange = ({ target: { value: task } }) => {
    setTask(task)
  }

  const handleSubmit = e => {
    e.preventDefault()

    onAdd({
      id: uuid(),
      totalTime: 0,
      task
    })

    setTask('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add a task'
        value={task}
        onChange={handleChange}
      />
    </form>
  )
}

export default AddTask
