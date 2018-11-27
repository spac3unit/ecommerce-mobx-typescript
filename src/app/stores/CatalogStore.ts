// https://github.com/Jackyzm/react-app-ts/blob/master/src/stores/List/FakeList.ts
// https://github.com/StoyanTodorinov/js-web-projects/blob/cae069f1efd300850e8a733e9f26fcb6ada883a2/ReactJS/armory-react/src/fetcher/products.js
import { observable, action } from 'mobx';
import { getProductsList } from '../utils/api';
import { ProductModel, CartItemModel } from 'app/models';

export class CatalogStore {
  @observable list: ProductModel[] = [];
  @observable selectedProduct: {} | null = null;
  @observable loading: boolean = false;

  @action getProducts = () => {
    this.loading = true;
    getProductsList().then((data) => {
      this.list = data;
      this.loading = false;
    });
  };

  @action
  getProductById(id): Promise<{}> {
    return new Promise((resolve) => {
      return this.list.filter((product: ProductModel) => {
        if (product.id === id) {
          resolve(product);
        }
      });
    });
  }
}
