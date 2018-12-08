// const NewComponent = (BaseComponent) => {
//   // ... create new component from old one and update
//   return UpdatedComponent
// }

// https://levelup.gitconnected.com/understanding-react-higher-order-components-by-example-95e8c47c8006

import * as React from 'react';

// Example 1
const higherOrderComponent = (WrappedComponent) => {
  class HOC extends React.Component {
    render() {
      return <WrappedComponent />;
    }
  }

  return HOC;
};
const MyComponent = () => <div>mycomponent</div>;
const SimpleHOC = higherOrderComponent(MyComponent);

// Example 2
const withStorage = (WrappedComponent) => {
  class HOC extends React.Component {
    state = {
      localStorageAvailable: false
    };

    componentDidMount() {
      this.checkLocalStorageExists();
    }

    checkLocalStorageExists() {
      const testKey = 'test';

      try {
        localStorage.setItem(testKey, testKey);
        localStorage.removeItem(testKey);
        this.setState({ localStorageAvailable: true });
      } catch (e) {
        this.setState({ localStorageAvailable: false });
      }
    }

    load = (key) => {
      if (this.state.localStorageAvailable) {
        return localStorage.getItem(key);
      }

      return null;
    };

    save = (key, data) => {
      if (this.state.localStorageAvailable) {
        localStorage.setItem(key, data);
      }
    };

    remove = (key) => {
      if (this.state.localStorageAvailable) {
        localStorage.removeItem(key);
      }
    };

    render() {
      return (
        <WrappedComponent
          load={this.load}
          save={this.save}
          remove={this.remove}
          {...this.props}
        />
      );
    }
  }

  return HOC;
};

export default withStorage;
