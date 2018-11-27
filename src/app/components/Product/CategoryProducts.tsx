import * as React from 'react';

export interface CategoryProductsProps {}

export default class CategoryProducts extends React.Component<
  CategoryProductsProps,
  any
> {
  componentDidMount() {
    // let categoryName = this.props.match.params.categoryName;
    // fetcher.getProductsByCategoryName(categoryName).then((products) => {
    //   this.setState({ products });
    // });
  }
  public render() {
    return (
      <div>
        <p>test</p>
      </div>
    );
  }
}
