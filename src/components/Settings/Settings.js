import React from 'react'

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

    return (
      <div>
        <form>
          <p>Initial Duration</p>
          <input
            type='number'
            name='time'
            min='1'
            value={time}
            onChange={this.handleChange}
          />

          <p>Units</p>
          <select
            name='unit'
            value={unit}
            onChange={this.handleChange}
          >
            <option value='seconds'>Seconds</option>
            <option value='minutes'>Minutes</option>
            <option value='hours'>Hours</option>
          </select>
        </form>

        <button onClick={this.props.onSettingsReset}>
          Reset
        </button>
      </div>
    )
  }
}

export default Settings
