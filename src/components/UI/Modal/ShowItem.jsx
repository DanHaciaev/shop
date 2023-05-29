import React, { Component } from 'react'
import { FaWindowClose } from 'react-icons/fa'

export class ShowItem extends Component {
  render() {
    return (
      <div className='full-item'>
        <div>
          <FaWindowClose className='modal-close' onClick={() => this.props.onShowItem(this.props.item)} />
          <img src={'./img/' + this.props.item.img} alt=''/>
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.desc}</p>
          <b>{this.props.item.price} Lei</b>
          <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
        </div>
      </div>
    );
  }

  
  

}

export default ShowItem