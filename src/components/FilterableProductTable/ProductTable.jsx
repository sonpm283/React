import React, { Component } from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

export class ProductTable extends Component {
  render() {

    const {productList, searchText, inStock} = this.props;

    productList.sort((a,b) => {
      if(a.category < b.category) return -1
      if(a.category > b.category) return 1

      return 0
    })

    const rows = []
    let lastCategory = ''

    productList.forEach(product => {
      if(inStock && !product.stocked) {
        return
      }
      
      if(product.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
        return
      }

      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.name} />
        );
      }

      rows.push(
        <ProductRow
          product={product}
          key={product.name + '_fruit'} />
      );
      
      lastCategory = product.category
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}

export default ProductTable