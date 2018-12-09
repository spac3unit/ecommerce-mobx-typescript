import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { STORE_CATALOG, STORE_ROUTER, STORE_CART } from 'app/constants';
import { Loader } from 'semantic-ui-react';

@inject(STORE_CATALOG, STORE_ROUTER)
@observer
export default class ProductDetails extends React.Component<any, any> {
  componentWillMount() {
    const { id } = this.props.match.params;
    const { getProduct, findProductById, products } = this.props[STORE_CATALOG];

    if (products.length <= 0) {
      getProduct(id);
    } else {
      findProductById(id);
    }
  }

  render() {
    const { selectedProduct } = this.props[STORE_CATALOG];
    return !selectedProduct ? (
      <Loader />
    ) : (
      <div>
        <img src={selectedProduct.imageUrl} width="400" alt="" />
        <p>{selectedProduct.category_rel.name}</p>
        <p>{selectedProduct.brand.name}</p>
        <p>{selectedProduct.name}</p>
        <p>{selectedProduct.price}</p>
        <p>{selectedProduct.description}</p>
      </div>
    );
  }
}
