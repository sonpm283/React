import React, { Component } from 'react'
import './styles.css'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

const productList = [
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  { category: "Fruits", price: "$1", stocked: true, name: "Banana" },
  { category: "Fruits", price: "$10", stocked: true, name: "Cherry" }
]

const fetchApi = new Promise(resolve => resolve(productList))

export class FilterableProductTable extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       productList: [],
       search: '',
       inStock: false
    }
  }

  componentDidMount() {
    fetchApi.then(res => {
      this.setState({
        productList: res
      })
    })
  }

  handleChange = (event) => {
    const name = event.target.name

    if(name === 'search') {
      this.setState({
        search: event.target.value
      })
    }else if(name === 'in_stock') {
      this.setState({
        inStock: event.target.checked
      })
    }
  }
 
  render() {
    const {productList, search, inStock} = this.state
    console.log(this.state.search);
    return (
      <div className='filter_product'>
        <SearchBar 
          onSearchInputChange={this.handleChange} 
          searchText={search} 
          inStock={inStock} 
        />
        <ProductTable productList={productList} />
      </div>
    )
  }
}

export default FilterableProductTable