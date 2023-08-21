import React, { Component } from 'react'

export class ProductItem extends Component {
  render() {
    const {product} = this.props

    return (
      <li className='product-item'>
        <input type="text" />
        <h3 className='product-tit'>{product.name}</h3>
        <span className='product-avatar'>{product.avatar}</span>
      </li>
    )
  }
}

export default ProductItem