import React, { Component } from 'react'

export class TemperatureInput extends Component {

  handleChange = (event) => {
    this.props.onTemperatureChange(event.target.value)
  }

  render() {
    const { title, temperature, name } = this.props

    return (
      <div>
        <fieldset>
          <legend>Enter temperature in {title}: {name}</legend>
          <input 
            type="text" 
            value={temperature} 
            onChange={this.handleChange} 
          />
        </fieldset>
      </div>
    )
  }
}

export default TemperatureInput