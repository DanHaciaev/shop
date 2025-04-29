import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: 'wine',
                    name: 'Wine'
                },
                {
                    key: 'dish',
                    name: 'Dish'
                },
                {
                    key: 'statue',
                    name: 'Statue'
                },
                {
                    key: 'book',
                    name: 'Book'
                },
                {
                    key: 'costum',
                    name: 'Costum'
                },
                {
                    key: 'candies',
                    name: 'Candies'
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategories(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories