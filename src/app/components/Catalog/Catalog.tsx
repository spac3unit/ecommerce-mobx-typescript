import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { STORE_ROUTER, STORE_CATALOG, STORE_CART } from 'app/constants';

@inject(STORE_CATALOG)
@observer
export default class Catalog extends React.Component<any, any> {
  componentWillMount() {
    this.props[STORE_CATALOG].getProductsList();
    this.props[STORE_CATALOG].getProductsOfCategory('?name=Sneakers');
  }

  public render() {
    return (
      <div>
        <CatalogComponent
          categories={this.props[STORE_CATALOG].categories}
          products={this.props[STORE_CATALOG].products}
          productsInCategory={this.props[STORE_CATALOG].productsInCategory}
        />
      </div>
    );
  }
}

class CatalogComponent extends React.Component<any, any> {
  render() {
    const { categories, products, productsInCategory } = this.props;
    const loaded = productsInCategory.length > 0 ? true : false;
    console.log(this.props);

    return !loaded ? (
      <div>Loading...</div>
    ) : (
      productsInCategory.map((p) => (
        <p>
          <div>{p.name}</div>
          <div>{p.price}</div>
          <div>{p.brand}</div>
        </p>
      ))
    );
  }
}
