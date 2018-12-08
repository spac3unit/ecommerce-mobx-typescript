import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { observable } from 'mobx';

import { STORE_ROUTER, STORE_CATALOG, STORE_CART } from 'app/constants';
import * as styles from './style.css';
import { RouterStore, CatalogStore, CartStore } from 'app/stores';
import { Grid, Image, Container } from 'semantic-ui-react';

import ProductCard from 'app/components/Product/ProductCard';

export interface ProductListProps {
  catalog?: CatalogStore;
}

@inject(STORE_CATALOG)
@observer
export class ProductList extends React.Component<ProductListProps, any> {
  componentWillMount() {
    this.props.catalog.getProducts();
  }

  public render() {
    const { catalog } = this.props;

    return (
      <Container fluid>
        <Grid doubling columns={4}>
          {catalog.list.map((product) => (
            <Grid.Column key={product.id}>
              <ProductCard product={product} />
              {/* <ProductView product={product} /> */}
            </Grid.Column>
          ))}
        </Grid>
      </Container>
    );
  }
}

export interface ProductViewProps {
  cart?: CartStore;
  product?: any;
  router?: any;
  catalog?: any;
}

@inject(STORE_ROUTER, STORE_CATALOG, STORE_CART)
@observer
class ProductView extends React.Component<ProductViewProps, any> {
  handleAddToCart = (e) => {
    e.preventDefault();
    this.props.cart.addToCart(this.props.product);
  };
  handleDetailsView = (e, clickedProduct) => {
    e.preventDefault();
    this.props.catalog.selectedProduct = clickedProduct;
    this.props.router.history.push(`/products/${clickedProduct.id}`);
  };
  render() {
    const { name, brand, category, price, imageUrl, id } = this.props.product;

    return (
      <div>
        <div className="product-picture">
          <a onClick={(e) => this.handleDetailsView(e, this.props.product)}>
            <Image src={imageUrl} />
          </a>
        </div>
        <div className="product-headline">
          <span className="product-name">{category.name}</span>
          <h6 className="product-title">{brand.name}</h6>
          <span className="product-name">{name}</span>
        </div>
        <div className={styles['product-price']}>
          <span>{price}</span>
          <span>€</span>
          <a
            onClick={this.handleAddToCart}
            className={`pure-button ${styles.buttonCardAction}`}
            style={{
              fontSize: '85%',
              marginLeft: 'auto'
            }}
          >
            <i className="fas fa-shopping-cart" />
          </a>
        </div>
      </div>
    );
  }
}
