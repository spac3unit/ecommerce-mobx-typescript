export default class ProductsApi {
  constructor(client) {
    this.client = client;
  }

  list(filter) {
    return this.client.get('/products', filter);
  }
  item(id) {
    return this.client.get(`/products/${id}`);
  }
}
