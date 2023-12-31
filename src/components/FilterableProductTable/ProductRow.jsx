import React, { Component } from 'react'

export class ProductRow extends Component {
  render() {
    const {product} = this.props
    return (
      <tr>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    )
  }
}

export default ProductRow