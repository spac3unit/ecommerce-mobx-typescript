// https://github.com/Jackyzm/react-app-ts/blob/master/src/stores/List/FakeList.ts
// https://github.com/StoyanTodorinov/js-web-projects/blob/cae069f1efd300850e8a733e9f26fcb6ada883a2/ReactJS/armory-react/src/fetcher/products.js
import { observable, action, toJS } from 'mobx';
import {
  getProductsList,
  getProductById,
  getCategoriesList,
  getBrandsList,
  getProductsByCategory,
  categoriesFindOne,
  brandsFindOne
} from 'app/utils/api';
import { ProductModel, CartItemModel } from 'app/models';
import Category from '../models/category.model';

export class CatalogStore {
  @observable list: ProductModel[] = [];
  @observable selectedProduct: {} | null = null;
  @observable loading: boolean = false;
  @observable categoriesList: any = [];
  @observable brandsList: any = [];
  @observable selectedCategoryProducts: any = [];

  // New
  @observable productCategoriesList;
  @action getProductCategoriesList = (
    endpoint = '/categories',
    filter = 'name=Sneakers'
  ) => {
    return fetch(
      `http://localhost:1337${endpoint}?${filter}`
      // `${this.baseUrl}${endpoint}?${queryString.stringify(filter)}`
      // this.getConfig('get', null, cookie)
    )
      .then((res) => res.json())
      .then((data) => (this.productCategoriesList = toJS(data)));
  };

  @action getOneCategory = (id) => {
    categoriesFindOne(id).then((data) => {
      this.selectedCategoryProducts = data.products_in_category;
    });
  };
  @action getOneBrand = (id) => {
    brandsFindOne(id).then((data) => {
      this.selectedCategoryProducts = data.products_rel;
    });
  };
  @action getBrands = () => {
    this.loading = true;
    getBrandsList().then((data) => {
      this.brandsList = data;
      this.loading = false;
    });
  };
  @action getProductsOfCategory = (category) => {
    this.categoriesList
      .filter((el) => el.name == category)
      .map((c) => (this.selectedCategoryProducts = c.products_in_category));

    // this.loading = true;
    // getProductsByCategory(category).then((data) => {
    //   console.log(data);
    //   this.selectedCategoryProducts = data;
    //   this.loading = false;
    // });
  };
  @action getProducts = () => {
    this.loading = true;
    getProductsList().then((data) => {
      this.list = data;
      this.loading = false;
    });
  };

  @action
  productById = (id) => {
    this.loading = true;
    getProductById(id).then((data) => {
      this.selectedProduct = data;
      this.loading = false;
    });
  };
  @action
  findById = (id) => {
    return this.list.find((element) => {
      return element.id === id;
    });
  };

  // Categories
  @action getCategories = () => {
    this.loading = true;
    getCategoriesList().then((data) => {
      this.categoriesList = toJS(data);
      this.loading = false;
    });
  };
}
