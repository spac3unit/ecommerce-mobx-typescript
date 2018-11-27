// https://github.com/Jackyzm/react-app-ts/blob/master/src/stores/List/FakeList.ts
import { observable, action, computed, autorun } from 'mobx';
import { ProductModel, CartItemModel } from 'app/models';
// import { getCatalogList } from '../utils/api';
import * as _ from 'lodash';

export class CartStore {
  @observable cartItems = observable.map();
  @observable loading = false;

  @computed // amount of uniq items
  get count() {
    return this.cartItems.size;
  }

  @computed // summ of uniq items prices (each uniq price*qty)
  get subTotal() {
    let cartItem = this.cartItems.values();
    let subtotal = _.sumBy(cartItem, 'item.price');
    return subtotal.toFixed(2);
  }

  @action addToCart = (product) => {
    let cartItem;
    const { id } = product;
    if (this.cartItems.has(id)) {
      cartItem = this.cartItems.get(id);
      cartItem.incQty();
    } else {
      this.cartItems.set(id, new CartItemModel(product));
    }
  };

  @action removeFromCart = (id) => {
    this.cartItems.delete(id);
  };
  @action clearCart = () => {
    this.cartItems.clear;
  };
}
