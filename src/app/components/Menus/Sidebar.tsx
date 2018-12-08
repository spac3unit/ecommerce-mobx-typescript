import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { RouterStore, CatalogStore, CartStore, UIStore } from 'app/stores';
import { STORE_ROUTER, STORE_CATALOG, STORE_UI } from 'app/constants';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';

// interface IProps {
//   uiStore: UIStore;
// }

@inject(STORE_UI)
@observer
export default class SidebarExample extends React.Component<any, any> {
  handleHideClick = () => (this.props[STORE_UI].showCart = false);
  handleShowClick = () => (this.props[STORE_UI].showCart = true);

  render() {
    const cartVisibility = this.props[STORE_UI].showCart;

    return (
      <Sidebar
        as={Menu}
        animation="overlay"
        direction="right"
        icon="labeled"
        inverted
        vertical
        visible={cartVisibility}
        width="thin"
      >
        <Menu.Item as="a">
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="gamepad" />
          Games
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="camera" />
          Channels
        </Menu.Item>
      </Sidebar>
    );
  }
}
