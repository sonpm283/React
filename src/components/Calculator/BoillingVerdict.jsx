import React, { Component } from 'react'

export class BoillingVerdict extends Component {
  render() {
    return (
      <div>
        {this.props.celsius >= 100 ? 'The water would boil' : 'The water would NOT boil'}
      </div>
    )
  }
}

export default BoillingVerdict