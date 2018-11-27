import * as React from 'react';
// import { RouterStore, CatalogStore, CartStore } from 'app/stores';
// import { ProductModel, CartItemModel } from 'app/models';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';
import { STORE_ROUTER, STORE_CATALOG, STORE_CART } from 'app/constants';
export interface IProps {
  router?: any;
  catalog?: any;
  match?: any;
}

export interface IState {
  selectedProduct: any;
}
@inject(STORE_ROUTER, STORE_CATALOG, STORE_CART)
@observer
export default class ProductDetails extends React.Component<IProps, IState> {
  componentWillMount() {
    const { router, catalog } = this.props;
  }
  public render() {
    let item = this.props.catalog.selectedProduct;
    if (!item) {
      return <Loading />;
    }
    return <ProductDetailsView item={item} />;
  }
}

const Loading = () => <div>Loading...</div>;
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
