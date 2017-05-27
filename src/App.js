import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from './assets/logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }

  handleAddToCart(item) {
    const {cartAction} = this.props;
    cartAction.addToCart(item);
  }

  handleRemoveFromCart(index) {
    const {cartAction} = this.props;
    cartAction.removeFromCart(index);
  }

  handleRemoveAll() {
    const {cartAction} = this.props;
    cartAction.removeAllFromCart();
  }

  render() {
    const {items} = this.props;
    const stock = ['Bread', 'Milk', 'Eggs'];

    const stockList = stock.map((item, i) => {
      return (
        <li key={i}>
          <span className="shopping-item">{item}</span>
          <span className="shopping-action" onClick={() => this.handleAddToCart(item)}>Add</span>
        </li>
      );
    });

    const shoppingCart = items.length ? items.map((item, i) => {
      return (
        <li key={i}>
          <span className="shopping-item">{item}</span>
          <span className="shopping-action" onClick={() => this.handleRemoveFromCart(i)}>Remove</span>
        </li>
      );
    }) : 'Your cart is empty';

    const clearAll = items.length ? (
      <button type="button" onClick={() => this.handleRemoveAll()}>
        Clear All
      </button>
    ) : null;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Create React App + Redux</h2>
        </div>
        <p className="App-intro">
          All the great perks from create-react-app with the added functionality of redux.  To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="container">
          <h3>Store</h3>
          <ul className="callout">
            {stockList}
          </ul>
        </div>
        <div className="container">
          <h3>Shopping Cart</h3>
          <ul className="callout">
            {shoppingCart}
          </ul>
          {clearAll}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  items: PropTypes.array,
  cartAction: PropTypes.object
};

export default App;
