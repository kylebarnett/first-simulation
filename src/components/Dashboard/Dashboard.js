import React, { Component } from 'react';
import Product from '../Product/Product'

class Dashboard extends Component {
  constructor() {
    super();

  
  // componentDidMount(){
  //   app.post('/api/').then(results => {
      
  //   })
  // }

  }
  render() { 
    let mappedInventory = this.props.inventory.map((element, index) => {
      return (
        <Product 
        id = {element.id}
        name = {element.name}
        price = {element.price}
        image = {element.image}
        />
      )
    })

    return (
      <div>
        Dashboard!
        {mappedInventory}
      </div>
    );
  }
}
 
export default Dashboard;

// let mappedInventory = this.props.inventory.map((element, index) => {
//   return (
//     <Product key={index}>{this.props.inventory}</Product>
//   )
// })