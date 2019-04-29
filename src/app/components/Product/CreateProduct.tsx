import * as React from 'react';

export interface CreateProductProps {}

export default class CreateProduct extends React.Component<
  CreateProductProps,
  any
> {
  state = {
    name: '',
    price: '',
    imageUrl: '',
    description: '',
    categoryId: '',
    categoryName: ''
  };
  inputChange = (e, key) => {
    let state = this.state;
    state[key] = e.target.value;
    this.setState(state);
  };
  onSubmit = (e) => {
    e.preventDefault();
    let product = {
      name: this.state.name,
      price: this.state.price,
      imageUrl: this.state.imageUrl,
      description: this.state.description
      // categoryName: this.props.match.params.categoryName
    };
    let toReturn = this.validateProduct(product);
    if (toReturn) return;
    // products.create(product).then(() => {
    //   this.props.createNotification('success', 'Product created');
    //   this.props.history.goBack();
    // });
  };
  validateProduct(product) {
    if (product.name.length < 3) {
      //   this.props.createNotification(
      //     'error',
      //     'Name must be at least 3 symbols long'
      //   );
      return true;
    }
    if (product.description.length < 15) {
      //   this.props.createNotification(
      //     'error',
      //     'Description must be at least 15 symbols long'
      //   );
      return true;
    }
  }
  public render() {
    return (
      <div>
        <div className="App-body-title">
          <p>CREATE</p>
        </div>
        <form className="App-auth" onSubmit={this.onSubmit}>
          <p>
            Name
            <input
              className="App-form-input"
              value={this.state.name}
              onChange={(e) => this.inputChange(e, 'name')}
              required
            />
          </p>
          <p>
            Price
            <input
              className="App-form-input"
              type="number"
              value={this.state.price}
              onChange={(e) => this.inputChange(e, 'price')}
              required
            />
          </p>
          <p>
            Image Url
            <input
              className="App-form-input"
              type="url"
              value={this.state.imageUrl}
              onChange={(e) => this.inputChange(e, 'imageUrl')}
              required
            />
          </p>
          <p>
            Description
            <textarea
              className="App-form-input"
              value={this.state.description}
              onChange={(e) => this.inputChange(e, 'description')}
              required
            />
          </p>

          <input className="App-form-submit" type="submit" />
        </form>
      </div>
    );
  }
}
