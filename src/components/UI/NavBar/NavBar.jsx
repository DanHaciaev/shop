import React, { useState } from 'react'
import { FaShoppingBasket } from "react-icons/fa";
import Order from "../Orders/Order";



const showOrders = (props) => {
  let sum = 0;
  props.orders.forEach(el => sum += Number.parseFloat(el.price))
  return (<div>
    {props.orders.map(el => (
      <Order onDelete={props.onDelete} key={el.id} item={el} />
    ))}
    <p className='sum'>Total: {new Intl.NumberFormat().format(sum)}Lei</p>
  </div>)
}

const showNothing = () => {
  return(<div className='empty'>
    <h2>No products</h2>
  </div>)
}

export default function NavBar(props) {
  let [cardOpen, setCardOpen] = useState(false)

  const scrollToAboutUs = () => {
    const aboutUsElement = document.getElementById('aboutUs');
    aboutUsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToContacts = () => {
    const contactsElement = document.getElementById('contacts');
    contactsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header>
      <div>
        <span className='logo'>Moldovian Shop</span>
        <ul className='nav'>
          <li onClick={scrollToAboutUs}>About Us</li>
          <li onClick={scrollToContacts}>Contacts</li>

        </ul>
        <FaShoppingBasket onClick={() => setCardOpen(cardOpen = !cardOpen)} className={`shop-cart-button ${cardOpen && 'active'}`} />

        {cardOpen && (
          <div className='shop-cart'>
            {props.orders.length > 0 ?
              showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  )
}
