import React from 'react'
import PropTypes from 'prop-types'

function BareInput(props) {
  const { type: typeInput, ...rest } = props

  return (
    <input {...rest} type={typeInput} />
  )
}

BareInput.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired
}


export default BareInput
