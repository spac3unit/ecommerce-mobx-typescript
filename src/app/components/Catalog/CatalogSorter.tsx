import * as React from 'react';
import { Menu } from 'semantic-ui-react';

export interface IProps {}

export interface IState {
  activeItem: any;
}

export default class CatalogSorter extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      activeItem: 'closest'
    };
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  public render() {
    const { activeItem } = this.state;
    return (
      <Menu text>
        <Menu.Item header>Sort By</Menu.Item>
        <Menu.Item
          name="closest"
          active={activeItem === 'closest'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="mostComments"
          active={activeItem === 'mostComments'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="mostPopular"
          active={activeItem === 'mostPopular'}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}
