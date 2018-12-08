import * as React from 'react';

import { Input, Menu, Button, Icon } from 'semantic-ui-react';

import { inject, observer } from 'mobx-react';
import { RouterStore, CatalogStore, CartStore, UIStore } from 'app/stores';
import { STORE_ROUTER, STORE_CATALOG, STORE_UI } from 'app/constants';

@inject(STORE_ROUTER, STORE_UI)
@observer
export default class Navigation extends React.Component {
  getActiveItem = () => {
    const { pathname } = this.props[STORE_ROUTER].history.location;
    const activeItem = pathname.replace(/^\/+/g, '');
    return activeItem;
  };
  handleItemClick = (e, { name, href }) => {
    e.preventDefault();
    this.setState({ activeItem: name });
    this.props[STORE_ROUTER].history.push(href);
  };
  toggleSidebar = (e, { name, href }) => {
    e.preventDefault();
    this.setState({ activeItem: name });
    this.props[STORE_UI].showCart = !this.props[STORE_UI].showCart;
  };
  render() {
    const { pathname } = this.props[STORE_ROUTER].location;
    const activeItem = pathname.replace(/^\/+/g, ''); // removes slash from /pathname
    console.log(activeItem);
    return (
      <Menu secondary>
        <Menu.Item
          name="home"
          href="/home"
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="catalog"
          href="/catalog"
          active={activeItem === 'catalog'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="login"
          href="/login"
          active={activeItem === 'login'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item
            name="sidebar"
            active={activeItem === 'sidebar'}
            onClick={this.toggleSidebar}
          >
            menu {this.props[STORE_UI].showCart ? '❎ ' : '🍔'}
          </Menu.Item>
          <Menu.Item
            name="cart"
            href="/cart"
            active={activeItem === 'cart'}
            onClick={this.handleItemClick}
          >
            <Icon name="shopping bag" />
          </Menu.Item>
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item
            name="logout"
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}
