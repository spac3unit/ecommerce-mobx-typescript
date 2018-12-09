export default class CategoriesApi {
  client: any;
  constructor(client) {
    this.client = client;
  }

  list(filter) {
    return this.client.get('/categories', filter);
  }

  // retrieve(id) {
  //   return this.client.get(`/categories/${id}`);
  // }
}
