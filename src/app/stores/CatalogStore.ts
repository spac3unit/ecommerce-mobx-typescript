// https://github.com/Jackyzm/react-app-ts/blob/master/src/stores/List/FakeList.ts
// https://github.com/StoyanTodorinov/js-web-projects/blob/cae069f1efd300850e8a733e9f26fcb6ada883a2/ReactJS/armory-react/src/fetcher/products.js
import { observable, action, toJS } from 'mobx';
import Client from 'app/utils/api/client';
import { ProductModel, CartItemModel } from 'app/models';

export class CatalogStore {
  @observable loading: boolean = false;
  @observable categories;
  @observable products: ProductModel[] = [];
  @observable selectedProduct: {} | null = null;
  @observable productsInCategory: ProductModel[] = [];

  api;
  constructor() {
    this.api = new Client({});
  }

  @action getProductsList = (filter) => {
    this.loading = true;
    this.api.products.list(filter).then((data) => {
      this.products = toJS(data);
      this.loading = false;
    });
  };
  @action getProduct = (id) => {
    this.loading = true;
    this.api.products.item(id).then((data) => {
      this.selectedProduct = toJS(data);
      this.loading = false;
    });
  };
  @action getProductsOfCategory = (filter) => {
    this.loading = true;
    this.api.categories.list(filter).then((data) => {
      this.productsInCategory = toJS(data[0].products_in_category);
      this.loading = false;
    });
  };
  @action getCategoriesList = (filter) => {
    this.loading = true;
    this.api.categories.list(filter).then((data) => {
      this.categories = toJS(data);
      this.loading = false;
    });
  };

  @action findProductById = (id) => {
    this.selectedProduct = this.products.find((item) => item.id === id);
  };
}
