import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/actions';

const Add = props => {

  let currentTitle;
  let currentPrice;

  return (
    <div>
      add
  <br />
      <input placeholder="title" ref={t => currentTitle = t} />
      <br />
      <input placeholder="price" ref={p => currentPrice = p} />
      <br />
      <button onClick={() => {
        console.log(currentTitle.value);
        console.log(currentPrice.value);
        let priceCheck = parseFloat(currentPrice.value);
        if (!isNaN(priceCheck)) {
          console.log(priceCheck);
          // props.dispatch(
          //   { 
          //   type: "ADD", 
          //   title: currentTitle.value, 
          //   price: priceCheck 
          //   })
          props.dispatch(addItem(currentTitle.value, priceCheck));
          currentTitle.value = null;
          currentPrice.value = null;
        }
        else {
          console.log("invalid price");
        }
      }}>Add </button>
    </div>
  )
}

export default connect()(Add);