import React, { Component } from 'react'

export class UncontrolledComponent extends Component {
  constructor(props) {
    super(props)
    this.input = React.createRef()

    this.state = {
      selectedFile: null
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // console.log(this.input.current.value);
    const formData = new FormData()

    formData.append(
      'myFile',
      this.state.selectedFile,
      this.state.selectedFile.name
    )
    
    console.log(this.state.selectedFile);
  }

  handleFileChange = (event) => {
    this.setState({
      selectedFile: event.target.files[0]
    })
    
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="file" name='avatar' onChange={this.handleFileChange}/>
        <input type="submit" value='Submit' />
      </form>
    )
  }
}

export default UncontrolledComponent