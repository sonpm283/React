import React, { Component } from 'react'

export class SearchBar extends Component {

  render() {
    const {searchText, inStock, onSearchInputChange } = this.props

    return (
      <div className='search_bar'>
        <form>
          <input 
          type="text"
            name='search' 
            value={searchText} 
            placeholder='search...' 
            onChange={onSearchInputChange} 
          />
          <br />
          <label>
            <input 
              type="checkbox" 
              name='in_stock' 
              checked={inStock}
              onChange={onSearchInputChange}
            />
            Only show products in stock
          </label>
        </form>
      </div>
    )
  }
}

export default SearchBar