import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { STORE_ROUTER, STORE_CATALOG, STORE_CART } from 'app/constants';
import { Grid, Image, Loader } from 'semantic-ui-react';
import Breadcrumbs from 'app/components/Breadcrumbs';
import CatalogFilterMenu from 'app/components/Catalog/CatalogFilterMenu';
import CatalogSorter from 'app/components/Catalog/CatalogSorter';
@inject(STORE_CATALOG)
@observer
export default class Catalog extends React.Component<any, any> {
  componentWillMount() {
    this.props[STORE_CATALOG].getProductsList();
    this.props[STORE_CATALOG].getProductsOfCategory('?name=Sneakers');
    this.props[STORE_CATALOG].getCategoriesList();
    this.props[STORE_CATALOG].getBrandsList();
  }

  public render() {
    const { categories, products, productsInCategory, loading } = this.props[
      STORE_CATALOG
    ];

    return (
      <div>
        <CatalogComponent
          categories={categories}
          products={products}
          productsInCategory={productsInCategory}
          loading={loading}
        />
      </div>
    );
  }
}

class CatalogComponent extends React.Component<any, any> {
  render() {
    const { categories, products, productsInCategory, loading } = this.props;

    return loading ? (
      <Loader />
    ) : (
      <div>
        <Breadcrumbs />
        <Grid>
          <Grid.Column width={4}>
            <CatalogFilterMenu />
          </Grid.Column>
          <Grid.Column width={8}>
            <CatalogSorter />
            <ProductsList items={productsInCategory} />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const ProductsList = ({ items }) => {
  return items.map((p) => (
    <p>
      <div>{p.name}</div>
      <div>{p.price}</div>
      <div>{p.brand}</div>
    </p>
  ));
};
