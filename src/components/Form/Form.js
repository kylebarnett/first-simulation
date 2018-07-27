import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      price: 0,
      imageurl: ''
    }
  }
  handleNameChange = value => {
    this.setState({
      name: value
    })
  }

  handlePriceChange = value => {
    this.setState({
      price: value
    })
  }

  handleImageUrlChange = value => {
    this.setState({
      imageurl: value
    })
  }

  handleReset = value => {
    this.setState({
      name: '',
      price: 0,
      imageurl: ''
    })
  }

  render() { 
    return (
      <div className = "form-main">
        <div className = "product-name">
        Product Name:
        <input value={this.state.name} onChange = {(e)=> this.handleNameChange(e.target.value)}/>
        </div>
        <div className = "price"> 
        Price:
        <input value={this.state.price} onChange = {(e)=> this.handlePriceChange(e.target.value)}/>
        </div>
        <div className = "image-url">
        Image URL:
        <input value={this.state.imageurl} onChange = {(e)=> this.handleImageUrlChange(e.target.value)}/>
        </div>
        <div className = "cancel-button">
        <button onClick={this.handleReset}>Cancel</button>
        </div>
        <div className = "add-to-inventory-button">
        <button>Add to Inventory</button>
        </div>
      </div>
    );
  }
}
 
export default Form;