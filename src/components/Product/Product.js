import React from 'react';

function Product(props){
  return(
    <div>
      <div>
        Name: {props.name}
      </div>
      <div>
      Price: {props.price}
      </div>
      <div>
          <img src={props.image} alt=""/>
      </div>
    </div>
  )
}

export default Product