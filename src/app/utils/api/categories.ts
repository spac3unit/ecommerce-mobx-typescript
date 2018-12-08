interface IProps {
  resourceUrl: any;
  client: any;
  get: () => void;
  list: () => void;
}
export default class Categories {
  resourceUrl: string;
  client;
  list;
  constructor() {
    this.resourceUrl = '/categories';
    this.list = function(filter) {
      return this.client.get(this.resourceUrl, filter);
    };
    this.client = {
      baseUrl: 'http://localhost:1337',
      get: function(endpoint, filter, cookie) {
        return fetch(`${this.baseUrl}${endpoint}?${filter}`)
          .then((response) => response.json())
          .then((data) => data);
      }
    };
  }

  retrieve(id) {
    return this.client.get(`${this.resourceUrl}/${id}`);
  }

  create(data) {
    return this.client.post(this.resourceUrl, data);
  }

  update(id, data) {
    return this.client.put(`${this.resourceUrl}/${id}`, data);
  }

  delete(id) {
    return this.client.delete(`${this.resourceUrl}/${id}`);
  }

  uploadImage(categoryId, formData) {
    return this.client.postFormData(
      `${this.resourceUrl}/${categoryId}/image`,
      formData
    );
  }

  deleteImage(id) {
    return this.client.delete(`${this.resourceUrl}/${id}/image`);
  }
}
