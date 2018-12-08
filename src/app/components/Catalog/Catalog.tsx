import * as React from 'react';
import { observable, action, toJS } from 'mobx';
import { observer } from 'mobx-react';
import CategoriesApi from 'app/utils/api/categories';
import { getProductsList, getProductById } from 'app/utils/api';
import { ProductModel, CartItemModel } from 'app/models';
import ProductCategories from '../../utils/api/categories';

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
  @observable categoies;
  @observable brands;
  @observable products;
  @observable categories;
  @observable client;
  @observable filter;
  constructor(props) {
    super(props);
    this.brands = [];
    this.categoies = [];
    this.client = new CategoriesApi();
    this.filter = '';
    this.products = [];
    this.categories = [];
  }

  componentWillMount() {
    // this.productCategories = this.client.list('name=Sneakers');
    this.client.list('name=Sneakers').then((p) => (this.categories = p[0]));
    this.client
      .list('name=Sneakers')
      .then((p) => (this.products = p[0].products_in_category));
  }

  public render() {
    return this.products.length <= 0 ? (
      <div>Loading...</div>
    ) : (
      this.products.map((p, idx) => <div>{p.name}</div>)
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
    console.log(this.props);
    return (
      <div>
        <p>All brands</p>
        <p>All Categories</p>
      </div>
    );
  }
}

// function Api() {
//   return {
//     productCategories: {
//       list: function() {
//         fetch('http://localhost:1337/categories').then((d) =>
//           console.log(d.json())
//         );
//       },
//       retrieve: function(id) {
//         fetch(`http://localhost:1337/categories/${id}`).then((d) =>
//           console.log(d.json())
//         );
//       }
//     }
//   };
// }
