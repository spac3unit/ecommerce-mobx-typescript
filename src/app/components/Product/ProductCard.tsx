import * as React from 'react';
import { Card, Icon, Image, Header } from 'semantic-ui-react';
import { ProductModel } from 'app/models';
import { observer, inject } from 'mobx-react';
import { STORE_ROUTER, STORE_CART } from 'app/constants';

interface ProductCardProps {
  product: ProductModel;
  history?: any;
}

const ProductCard: React.SFC<ProductCardProps> = (props) => {
  const { name, brand, category, price, imageUrl, id } = props.product;
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    props[STORE_CART].addToCart(props.product);
  };
  const handleClick = (e) => {
    e.preventDefault();
    props[STORE_ROUTER].history.push(`/catalog/product/${id}`);
  };
  return (
    <Card href={`/catalog/product/${id}`} onClick={handleClick} as="div">
      <Image src={imageUrl} />
      <Card.Content>
        <Card.Meta>{brand.name}</Card.Meta>
        <Header sub>{name}</Header>
      </Card.Content>
      <Card.Content extra>
        <a onClick={handleAddToCart}>
          <Icon name="shopping bag" />
          {price} EUR
        </a>
      </Card.Content>
    </Card>
  );
};

export default inject(STORE_CART, STORE_ROUTER)(observer(ProductCard));
// export default withRouter(ProductCard);
