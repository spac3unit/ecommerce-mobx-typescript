export default class CategoriesApi {
  constructor(client) {
    this.client = client;
  }

  list(filter) {
    return this.client.get('/categories', filter);
  }

  // retrieve(id) {
  //   return this.client.get(`/categories/${id}`);
  // }

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
