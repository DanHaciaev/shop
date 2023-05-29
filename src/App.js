import React from "react";
import NavBar from "./components/UI/NavBar/NavBar";
import Footer from "./components/UI/Footer/Footer";
import Items from "./components/UI/Items";
import Categories from "./components/UI/Sorting/Categories"
import ShowItem from "./components/UI/Modal/ShowItem"
import AboutUs from "./components/UI/AboutUs";
import Contacts from "./components/UI/Contacts";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems:[],
      items: [
        {
          id: 1,
          title: 'Red wine',
          img: 'wine.png',
          desc: 'The best wine from Moldova',
          category: 'wine',
          price: '99.99'
        },
        {
          id: 2,
          title: 'Dish',
          img: 'tarl.jpg',
          desc: 'The best dishes from Moldova',
          category: 'dish',
          price: '49.99'
        },
        {
          id: 3,
          title: 'Bison statue',
          img: 'zubr.jpg',
          desc: 'The best statues from Moldova',
          category: 'statue',
          price: '79.99'
        },
        {
          id: 4,
          title: 'Book',
          img: 'stefan.jpg',
          desc: 'The best books from Moldova',
          category: 'book',
          price: '139.99'
        },
        {
          id: 5,
          title: 'Costum',
          img: 'cost.jpg',
          desc: 'The best costumes from Moldova',
          category: 'costum',
          price: '449.99'
        },
        {
          id: 6,
          title: 'Candies',
          img: 'conf.jpg',
          desc: 'The best candies from Moldova',
          category: 'candies',
          price: '109.99'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategories = this.chooseCategories.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <NavBar orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategories={this.chooseCategories}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
        {this.state.showFullItem && <ShowItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
        <AboutUs />
        <Contacts />
        <Footer />
      </div>
    );
  }

  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
    const body = document.querySelector('body');
  if (!this.state.showFullItem) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }
  }

  chooseCategories(category){
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInOrder = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInOrder = true
      })
      if(!isInOrder)
        this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;

