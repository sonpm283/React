import React, { Component } from 'react'
import ProductItem from './ProductItem'

export class ProductList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      productList: [
        {
          id: 1,
          name: 'Mercedes',
          avatar: '😂'
        },
        {
          id: 2,
          name: 'Porsche',
          avatar: '😍'
        },
        {
          id: 3,
          name: 'Audi',
          avatar: '😊'
        }
      ]
    }
  }
  
  hanleOrderProduct = () => {
    this.setState(prevState => ({
      productList: prevState.productList.sort((a,b) => {
        if(a.name < b.name) return -1
        if(a.name > b.name) return 1

        return 0
      })
    }))
  }

  addProduct = () => {
    this.setState(prevState => ({
     productList: [
      ...prevState.productList,
      {
        id: 4,
        name: 'Roll Royce',
        avatar: '😘'
      }
     ]
    }))
  }

  render() {
    return (
      <div>
        <ul className='product-lst'>
          {
            this.state.productList.map((product, index) =>
              <ProductItem product={product} key={index} />
            )
          }

          <button onClick={this.hanleOrderProduct}>Order Product</button>
          <button onClick={this.addProduct}>Add Product</button>
        </ul>
      </div>
    )
  }
}

export default ProductList