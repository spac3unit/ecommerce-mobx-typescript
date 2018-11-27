import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { configure } from 'mobx';

import { Provider } from 'mobx-react';
import { createBrowserHistory } from 'history';

import { TodoModel, ProductModel } from 'app/models';
import { createStores } from 'app/stores';
import { App } from 'app';

import * as mockData from 'app/mock.json';

// enable MobX strict mode
// configure({ enforceActions: 'always' });

//default items
const defaultTodos = [];
const defaultProducts = [];
// const defaultProducts: ProductModel[] = mockData.default.sneakers.map(
//   (product) => new ProductModel(product)
// );

const history = createBrowserHistory();
const rootStore = createStores(history, defaultProducts);

// render react DOM
ReactDOM.render(
  <Provider {...rootStore}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);
