import * as React from 'react';

export interface BreadcrumbsProps {}

export default class Breadcrumbs extends React.Component<
  BreadcrumbsProps,
  any
> {
  public render() {
    return (
      <div>
        <p>PageName / Category / Subcategory / Product Name</p>
        <p>Home / Shoes / Running / New Balance / M390s</p>
      </div>
    );
  }
}
