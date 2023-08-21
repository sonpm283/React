import React from 'react'
const lists = ['BMW', 'Mercedes', 'Audi']

const fetchApi = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(lists)
    }, 1000);
  })
}

export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        end: 1234124,
        created: new Date().getSeconds()
      },
      lists: []
    }
  }

  componentDidMount() {
    fetchApi().then(res => this.setState(prev => ({
      ...prev,
      lists: res
    })))
  }

  getTime = () => {
    const newState = {
      ...this.state,
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {...this.state.seconds, created: new Date().getSeconds()}
    }

    this.setState(newState)
  }

  render() {
    console.log(this.state);
    return (
      <>
        <h2>It is {this.state.time.created}</h2>
        <h2>It is {this.state.seconds.created}</h2>
        <button onClick={this.getTime}>Get time</button>
      </>
    )
  }
}
