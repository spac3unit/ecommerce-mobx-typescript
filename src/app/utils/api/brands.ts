export default class BrandsApi {
  client: any;
  constructor(client) {
    this.client = client;
  }

  list(filter) {
    return this.client.get('/brands', filter);
  }

  // retrieve(id) {
  //   return this.client.get(`/brands/${id}`);
  // }
}
