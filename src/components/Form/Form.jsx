import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      name: '',
      food: 'coconut',
      marriage: false,
      address: ''
    }
  }

  handleChange = (event) => {
    const {target} = event

    //const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const {name} = event.target

    this.setState({
      //name lấy từ attr "name" của input đó
      [name]: value // event.target.checked(nếu là checkbox) || event.target.value(nếu là các input khác)
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
          name='name'
          value={this.state.name} 
          onChange={this.handleChange} type="text" 
        />

        <input 
          type="checkbox" 
          name='marriage' 
          checked={this.state.marriage} 
          onChange={this.handleChange} 
        />

        <textarea 
          value={this.state.address} 
          name='address' 
          onChange={this.handleChange}>
        </textarea>

        <select 
          value={this.state.food}
          onChange={this.handleChange}
          name='food'
        >
          <option value="lime">lime</option>
          <option value="coconut">coconut</option>
          <option value="orange">orange</option>
        </select>

        <input type="submit" value='Submit'/>
      </form>
    )
  }
}

export default Form