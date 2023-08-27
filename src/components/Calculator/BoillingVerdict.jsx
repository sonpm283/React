import React, { Component } from 'react'
import PropsType from 'prop-types'

export class BoillingVerdict extends Component {
  render() {
    return (
      <div>
        {this.props.celsius >= 100 ? 'The water would boil' : 'The water would NOT boil'}
      </div>
    )
  }
}

BoillingVerdict.propTypes = {
  celsius: PropsType.number.isRequired
}

export default BoillingVerdict