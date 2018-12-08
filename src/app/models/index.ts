import TodoModel from './TodoModel';
// import ProductModel from './ProductModel';
export { TodoModel };
import { observable, action, computed } from 'mobx';
import uuidv1 from 'uuid/v1';

export interface IProduct {
  id: string;
  name: string;
  category: any;
  brand: any;
  price: number;
  imageUrl?: string;
  description?: string;
}

export class ProductModel implements IProduct {
  id: string;
  @observable public name: string;
  @observable public category: any;
  @observable public brand: any;
  @observable public price: number;
  @observable public imageUrl?: string;
  @observable public description?: string;

  constructor(product) {
    this.id = ProductModel.generateId();
    this.name = product.name;
    this.category = product.category;
    this.brand = product.brand;
    this.price = product.price;
    this.imageUrl = product.imageUrl;
    this.description = product.description;
  }

  static nextId = 1;
  static generateId() {
    return uuidv1();
  }
}

export interface ICartItem {
  item: ProductModel;
  qty: number;
}

export class CartItemModel {
  @observable item?: ProductModel;
  @observable qty?: number;
  constructor(item, qty = 1) {
    this.item = item;
    this.qty = qty;
  }
  @computed
  get totalPrice() {
    return (this.item.price * this.qty).toFixed(2);
  }
  @action setQty = (quantity) => (this.qty = quantity);
  @action incQty = () => this.qty++;
  @action decQty = () => this.qty--;
}

export default ProductModel;
