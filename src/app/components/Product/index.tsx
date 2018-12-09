import * as React from 'react';
import { inject, observer } from 'mobx-react';

import { STORE_ROUTER, STORE_CATALOG, STORE_CART } from 'app/constants';
import { Grid, Image, Container } from 'semantic-ui-react';
import ProductCard from 'app/components/Product/ProductCard';

@inject(STORE_CATALOG)
@observer
export class ProductList extends React.Component<any, any> {
  componentWillMount() {
    this.props[STORE_CATALOG].getProductsList();
  }

  public render() {
    return (
      <Container fluid>
        <Grid doubling columns={4}>
          {this.props[STORE_CATALOG].products.map((product) => (
            <Grid.Column key={product.id}>
              <ProductCard product={product} />
            </Grid.Column>
          ))}
        </Grid>
      </Container>
    );
  }
}
// handleAddToCart = (e) => {
//     e.preventDefault();
//     this.props.cart.addToCart(this.props.product);
//   };
//   handleDetailsView = (e, clickedProduct) => {
//     e.preventDefault();
//     this.props.catalog.selectedProduct = clickedProduct;
//     this.props.router.history.push(`/products/${clickedProduct.id}`);
//   };
