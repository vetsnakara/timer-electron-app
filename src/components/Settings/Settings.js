import React from 'react'

import Button from '../Button'

import styles from './styles'
import { block } from '../../utils'

const b = block(styles)

class Settings extends React.Component {
  constructor (props) {
    super(props)

    const { time, unit } = this.props.timer

    this.state = {
      time,
      unit
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.props.timer !== prevProps.timer) {
      const { unit, time } = this.props.timer
      this.setState({
        unit,
        time
      })
    }

    if (
      prevState.unit !== this.state.unit ||
      prevState.time !== this.state.time
    ) {
      this.props.onSettingsUpdate(this.state)
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState(state => ({
      ...state,
      [name]: value
    }))
  }

  render () {
    const { time, unit } = this.state
    const { active } = this.props.timer

    return (
      <div className={b()}>
        <h1 className={b('title')}>Settings</h1>
        <div className={b('group')}>
          <label
            htmlFor='duration'
            className={b('group-title')}
          >
            Initial Duration
          </label>
          <input
            id='duration'
            className={b('input')}
            type='number'
            name='time'
            min='1'
            value={time}
            onChange={this.handleChange}
            disabled={active}
          />
        </div>

        <div className={b('group')}>
          <label
            htmlFor='units'
            className={b('group-title')}
          >
            Units
          </label>
          <select
            id='units'
            className={b('input')}
            name='unit'
            value={unit}
            onChange={this.handleChange}
            disabled={active}
          >
            <option value='seconds'>Seconds</option>
            <option value='minutes'>Minutes</option>
            <option value='hours'>Hours</option>
          </select>
        </div>

        <Button
          color='#F44336'
          onClick={this.props.onSettingsReset}
        >
          Reset
        </Button>
      </div>
    )
  }
}

export default Settings
