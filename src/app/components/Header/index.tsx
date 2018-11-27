import * as React from 'react';
import { inject, observer } from 'mobx-react';

import { TodoTextInput } from 'app/components/TodoTextInput';
import { TodoModel } from 'app/models/TodoModel';
import { RouterStore } from 'app/stores';

import * as styles from './style.css';
import { STORE_ROUTER, STORE_CATALOG, STORE_CART } from 'app/constants';
export interface HeaderProps {
  addTodo?: (todo: Partial<TodoModel>) => any;
  routerStore?: any;
}

export interface HeaderState {
  /* empty */
}
// @inject(STORE_ROUTER, STORE_CATALOG, STORE_CART)
@observer
export class Header extends React.Component<HeaderProps, HeaderState> {
  render() {
    console.log('this.props header');
    console.log(this.props);
    const { routerStore } = this.props;
    const { location, push, goBack } = routerStore;

    return (
      <div className={`${styles.leftMenu}`}>
        <div className="pure-menu">
          <a className="pure-menu-heading" onClick={() => goBack()}>
            Go Back
          </a>
          <ul className="pure-menu-list">
            <li className="pure-menu-item">
              <a onClick={() => push('/')} className="pure-menu-link">
                Home
              </a>
            </li>
            <li className="pure-menu-item">
              <a onClick={() => push('/shop')} className="pure-menu-link">
                Shop
              </a>
            </li>
            <li className="pure-menu-item menu-item-divided pure-menu-selected">
              <a href="#" className="pure-menu-link">
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;

// render() {
//     return (
//       <header>
//         <h1>Todos</h1>
//         <TodoTextInput
//           newTodo
//           onSave={this.handleSave}
//           placeholder="What needs to be done?"
//         />
//       </header>
//     );
//   }
