import * as React from 'react';
import { observable, action, toJS } from 'mobx';
import { observer } from 'mobx-react';
import Client from 'app/utils/api/client';
import { getProductsList, getProductById } from 'app/utils/api';
import { ProductModel, CartItemModel } from 'app/models';

export class RestClient {
  baseUrl?: string;
  constructor({ baseUrl = 'http://localhost:1337' }) {
    this.baseUrl = baseUrl;
  }
  returnStatusAndJson = (response) =>
    response
      .json()
      .then((json) => ({ status: response.status, json }))
      .catch(() => ({ status: response.status, json: null }));

  get(endpoint = '/categories', filter = 'name=Sneakers', cookie?) {
    fetch(`${this.baseUrl}${endpoint}?${filter}`).then(
      this.returnStatusAndJson
    );
  }
}

@observer
export default class Catalog extends React.Component<any, any> {
  @observable categories;
  @observable products;
  @observable filter;
  @observable selectedCategory;
  @observable itemsInSelectedCategory;
  api;

  constructor(props) {
    super(props);
    this.api = new Client({});
    this.filter = '';
    this.products = [];
    this.categories = [];
    this.selectedCategory = [];
    this.itemsInSelectedCategory = [];
  }

  componentWillMount() {
    this.api.products.list().then((p) => (this.products = p));
    this.api.categories.list('?name=Sneakers').then((c) => {
      this.itemsInSelectedCategory = c[0].products_in_category;
    });
  }

  public render() {
    return this.itemsInSelectedCategory.length <= 0 ? (
      <div>Loading...</div>
    ) : (
      this.itemsInSelectedCategory.map((p, idx) => (
        <div key={p.id}>{p.name}</div>
      ))
    );
  }
}

{
  /* <CatalogComponent
          productCategories={this.productCategories}
          brands={this.brands}
          products={this.products}
        /> */
}

interface IProps {
  productCategories: [];
  brands: [];
  products: [];
}

class CatalogComponent extends React.Component<IProps, any> {
  public render() {
    return (
      <div>
        <p>All brands</p>
        <p>All Categories</p>
      </div>
    );
  }
}
