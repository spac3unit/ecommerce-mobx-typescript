import { observable } from 'mobx';
import uuidv1 from 'uuid/v1';
// import { PRODUCT_STATUSES } from '../constants/catalog';

export class ProductModel {
  id: string;
  @observable public name: string;
  @observable public brand: string;
  @observable public price: number;
  @observable public imageUrl?: string;
  @observable public description?: string;

  constructor(product) {
    this.id = ProductModel.generateId();
    this.name = product.name;
    this.brand = product.brand;
    this.price = product.price;
    this.imageUrl = product.imageUrl;
  }

  static nextId = 1;
  static generateId() {
    return uuidv1();
  }
  //  handleItemClick = (product: product): void => {
  //       this.ProductController.selectedProduct = product
  //       this.ProductController.productAction = 'edit'
  //   }
}

export default ProductModel;
