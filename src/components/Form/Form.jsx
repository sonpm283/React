import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      value: '',
      selectValue: 'coconut'
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleSelectChange = (event) => {
    this.setState({
      selectValue: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          value={this.state.value} 
          onChange={this.handleChange} type="text" 
        />
        <input type="submit" value='Submit'/>

        <select 
          value={this.state.selectValue}
          onChange={this.handleSelectChange}
        >
          <option value="lime">lime</option>
          <option value="coconut">coconut</option>
          <option value="orange">orange</option>
        </select>
      </form>
    )
  }
}

export default Form