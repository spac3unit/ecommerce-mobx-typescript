import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import { STORE_CATALOG, STORE_CART } from 'app/constants';
import { CatalogStore, CartStore } from 'app/stores';
import * as styles from './style.css';
import './styles.scss';

interface CartProps {
  cart?: any;
  cartItem?: any;
  item?: any;
}

@observer
export class Cart extends React.Component<CartProps, any> {
  handleClearCart = (e) => {
    e.preventDefault();
    this.props.cart.clearCart();
  };

  public render() {
    // const cartStore = this.props[STORE_CART] as CartStore;
    const { cart } = this.props;
    const cartList = Array.from(cart.cartItems.values());

    return (
      <div>
        <header>Total Items In Cart: {cart.count}</header>
        <header>Subtotal Price: {cart.subTotal}</header>
        <ul className="pure-menu-list cart-list">
          {cartList.map((cartItem, idx) => (
            <li className="" key={idx}>
              <ShoppingCartItemView
                cartItem={cartItem}
                removeFromCart={cart.removeFromCart}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

interface ShoppingCartItemViewProps {
  cartItem: any;
  removeFromCart: (id: number) => void;
}
@observer
class ShoppingCartItemView extends React.Component<
  ShoppingCartItemViewProps,
  any
> {
  render() {
    const { id, name, imageUrl } = this.props.cartItem.item;
    const { qty, totalPrice, incQty, decQty } = this.props.cartItem;
    const { removeFromCart } = this.props;
    // const cartStore = this.props[STORE_CART] as CartStore;
    return (
      <div className="cart-item pure-g">
        <div className="image pure-u">
          <img src={imageUrl} width="128" height="128" className="thumb" />
        </div>
        <div className="info pure-u-3-4">
          <div className="uk-text-small">{name}</div>
          <div className="uk-text-small">qty: {qty}</div>
          <div className="uk-text-small">totalPrice: {totalPrice}</div>
          <button
            onClick={incQty}
            className={`pure-button ${styles.buttonCardAction} ${
              styles.buttonXSMALL
            }`}
          >
            +1
          </button>
          <button
            onClick={decQty}
            className={`pure-button ${styles.buttonCardAction} ${
              styles.buttonXSMALL
            }`}
          >
            -1
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              removeFromCart(id);
            }}
            className={`pure-button ${styles.buttonCardAction} ${
              styles.buttonXSMALL
            }`}
          >
            <i className="fas fa-trash-alt" />
          </button>
        </div>
      </div>
    );
  }
}
