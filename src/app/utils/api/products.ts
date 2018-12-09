export default class ProductsApi {
  client: any;
  constructor(client) {
    this.client = client;
  }

  list(filter) {
    return this.client.get('/products', filter);
  }
  item(id) {
    return this.client.get(`/products/${id}`);
  }
  // create(data) {
  //   return this.client.post(`/categories`, data);
  // }

  // update(id, data) {
  //   return this.client.put(`/categories/${id}`, data);
  // }

  // delete(id) {
  //   return this.client.delete(`/categories/${id}`);
  // }

  // uploadImage(categoryId, formData) {
  //   return this.client.postFormData(
  //     `/categories/${categoryId}/image`,
  //     formData
  //   );
  // }

  // deleteImage(id) {
  //   return this.client.delete(`/categories/${id}/image`);
  // }
}
