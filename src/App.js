import React, { Component } from 'react';
import './App.css';
import './components/Form/Form.css'
import './components/Header/Header.css'
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: []
    }
  }
  componentDidMount(){
    axios.get('/api/inventory').then(response => {
      this.setState({
        inventory: response.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard inventory={this.state.inventory}/>
        <Form getRequest={this.state.getRequest}/>
      </div>
    );
  }
}

export default App;

        // {
        //   name: 'Hat',
        //   price: 25,
        //   image: 'https://s7d9.scene7.com/is/image/zumiez/cat_max/adidas-Men-s-Trefoil-Curved-Bill-Black-Strapback-Hat-_272692.jpg'
        // },
        // {
        //   name: 'Watch',
        //   price: 100,
        //   image: 'https://www.swissluxury.com/product_images/126334bkdo.jpg'
        // },
        // {
        //   name: 'Shoes',
        //   price: 50,
        //   image: 'https://cdn.lookastic.com/brown-desert-boots/aldo-mireama-chukka-boot-original-587165.jpg'
        // }

