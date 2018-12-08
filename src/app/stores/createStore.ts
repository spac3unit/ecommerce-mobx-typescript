import { History } from 'history';
import { ProductModel } from 'app/models';
import { CatalogStore } from './CatalogStore';
import { RouterStore } from './RouterStore';
import { CartStore } from './CartStore';
import { UIStore } from './UIStore';
import {
  STORE_ROUTER,
  STORE_CATALOG,
  STORE_CART,
  STORE_UI
} from 'app/constants';

export function createStores(
  history: History,
  defaultProducts?: ProductModel[]
) {
  const routerStore = new RouterStore(history);
  const catalogStore = new CatalogStore();
  const cartStore = new CartStore();
  const uiStore = new UIStore(this);
  return {
    [STORE_ROUTER]: routerStore,
    [STORE_CATALOG]: catalogStore,
    [STORE_CART]: cartStore,
    [STORE_UI]: uiStore
  };
}
