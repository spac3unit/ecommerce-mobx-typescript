import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { observable, action, toJS } from 'mobx';

import { Grid, Image } from 'semantic-ui-react';
import { STORE_CATALOG, STORE_ROUTER } from 'app/constants';
import { Counter } from 'app/components/Counter';
import CatalogFilterMenu from 'app/components/Catalog/CatalogFilterMenu';
import CatalogSorter from 'app/components/Catalog/CatalogSorter';
import Breadcrumbs from 'app/components/Breadcrumbs';
import Category from '../../models/category.model';
@inject(STORE_CATALOG, STORE_ROUTER)
@observer
export class Catalog extends React.Component<any, any> {
  baseUrl?: string;
  constructor(props) {
    super(props);
    this.baseUrl = 'http://localhost:1337';
  }
  componentWillMount = () => {
    this.props[STORE_CATALOG].getCategories();
    this.props[STORE_CATALOG].getBrands();
    this.props[STORE_CATALOG].getProductCategoriesList();
  };
  returnStatusAndJson = (response) =>
    response.json().then((json) => ({
      json
    }));
  get(endpoint = '/categories', filter = 'name=Sneakers') {
    return fetch(`${this.baseUrl}${endpoint}?${filter}`).then(
      this.returnStatusAndJson
    );
  }

  public render() {
    const {
      categoriesList,
      productCategoriesList,
      selectedCategoryProducts
    } = this.props[STORE_CATALOG];

    return (
      <div>
        {/* <Counter /> */}
        <Breadcrumbs />
        <Grid>
          <Grid.Column width={4}>
            <CatalogFilterMenu />
          </Grid.Column>
          <Grid.Column width={8}>
            <CatalogSorter />
            {productCategoriesList && (
              <CatalogCategories categoriesList={toJS(productCategoriesList)} />
            )}
            {/* <CatalogBrands brandsList={brandsList} /> */}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const CatalogCategories = ({ categoriesList }) => {
  console.log(categoriesList);

  return (
    <>
      {categoriesList.map((c, i) => {
        return c.products_in_category.map((p) => <div>{p.name}</div>);
      })}
    </>
  );
};
const CatalogBrands = ({ brandsList }) => {
  return (
    <>{brandsList && brandsList.map((b) => <div key={b._id}>{b.name}</div>)}</>
  );
};
const CategoryProducts = () => {};
// class CategoriesList extends React.Component<any,any> {

//   public render() {
//     return (

//     );
//   }
// }
