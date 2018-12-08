import * as React from 'react';
import { Menu } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';
import { observable, action, toJS } from 'mobx';
import { STORE_CATALOG, STORE_ROUTER } from 'app/constants';

interface IProps {}
interface IState {
  activeItem: any;
}

@inject(STORE_CATALOG, STORE_ROUTER)
export default class CatalogFilterMenu extends React.Component<IProps, IState> {
  readonly state = {
    activeItem: {}
  };

  private handleItemClick = (e, { name, id }) => {
    this.setState({ activeItem: name });
    this.props[STORE_CATALOG].getOneCategory(id);
  };
  private handleBrandClick = (e, { name, id }) => {
    this.setState({ activeItem: name });
    this.props[STORE_CATALOG].getOneBrand(id);
  };
  render() {
    const { activeItem } = this.state;
    const { categoriesList, brandsList } = this.props[STORE_CATALOG];
    this.props[STORE_CATALOG].getProductCategoriesList();

    return (
      <Menu vertical>
        <Menu.Item>
          <Menu.Header>Categories</Menu.Header>

          <Menu.Menu>
            {categoriesList.map((c) => (
              <Menu.Item
                name={c.name}
                key={c._id}
                id={c._id}
                active={activeItem === c.name}
                onClick={this.handleItemClick}
              />
            ))}
          </Menu.Menu>
        </Menu.Item>
        <Menu.Item>
          <Menu.Header>Brands</Menu.Header>
          {brandsList.length > 0 &&
            brandsList.map((c) => (
              <Menu.Item
                name={c.name}
                key={c._id}
                id={c._id}
                active={activeItem === c.name}
                onClick={this.handleBrandClick}
              />
            ))}
          <Menu.Menu>
            <Menu.Item
              name="new balance"
              active={activeItem === 'new balance'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="adidas"
              active={activeItem === 'adidas'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Gender</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name="men"
              active={activeItem === 'men'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="women"
              active={activeItem === 'women'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Colour</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name="black"
              active={activeItem === 'black'}
              onClick={this.handleItemClick}
            >
              Black
            </Menu.Item>

            <Menu.Item
              name="white"
              active={activeItem === 'white'}
              onClick={this.handleItemClick}
            >
              White
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    );
  }
}
