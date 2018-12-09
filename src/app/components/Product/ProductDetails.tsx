import * as React from 'react';
import { ProductModel, CartItemModel } from 'app/models';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';
import { STORE_CATALOG, STORE_CART } from 'app/constants';
import { Loader } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

export interface IProps {
  router?: any;
  catalog?: any;
  match?: any;
}

@withRouter
@inject(STORE_CATALOG, STORE_CART)
@observer
export default class ProductDetails extends React.Component<IProps, any> {
  componentWillMount() {
    const { match, catalog } = this.props;
    const { products, selectedProduct } = this.props[STORE_CATALOG];
    if (products.length <= 0) {
      this.props[STORE_CATALOG].getProduct(match.params.id);
    } else {
      this.props[STORE_CATALOG].findProductById(match.params.id);
    }
  }

  public render() {
    const { selectedProduct } = this.props.catalog;
    if (!selectedProduct) {
      return <Loader active inline="centered" />;
    }
    return <ProductDetailsView item={selectedProduct} />;
  }
}

const ProductDetailsView = ({
  item: { imageUrl, category_rel, brand, name, price, description }
}) => {
  return (
    <div>
      <img src={imageUrl} width="400" alt="" />
      <p>{category_rel.name}</p>
      <p>{brand.name}</p>
      <p>{name}</p>
      <p>{price}</p>
      <p>{description}</p>
    </div>
  );
};
