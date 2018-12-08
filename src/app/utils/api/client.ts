// import CategoriesApi0 from 'app/utils/api/categories0';
import CategoriesApi from 'app/utils/api/categories';
// import ProductsApi0 from 'app/utils/api/products0';
import ProductsApi from 'app/utils/api/products';
import ApiClient from 'app/utils/api/apiClient';
// import { ApiClient } from 'app/utils/api/client';
interface IProps {
  baseUrl: string;
  client: any;
}

class Client {
  baseUrl;

  apiBaseUrl;
  apiTest;
  products;
  categories;
  constructor(options) {
    if (!options) {
      options = {};
    }

    this.apiBaseUrl = options.apiBaseUrl || 'http://localhost:1337';
    const apiClientTest = new ApiClient({ baseUrl: this.apiBaseUrl });
    this.products = new ProductsApi(apiClientTest);
    this.categories = new CategoriesApi(apiClientTest);
  }
}
export default Client;
