import { observable, computed, action } from 'mobx';

export class UIStore {
  public rootStore;
  @observable public showMobileNavigation = false;
  @observable public showCart = false;
  @observable public loading = false;
  @observable public error: string;

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.showCart = false;
  }
}
