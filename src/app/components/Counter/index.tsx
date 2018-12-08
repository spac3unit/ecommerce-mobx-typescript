import * as React from 'react';

import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';

// https://github.com/Mercateo/counter-component-with-react-mobx-fela/blob/master/src/index.tsx

const MINIMUM = 0;
const MAXIMUM = 10;

export interface CounterComponentProps {
  value: number;
  increment: () => void;
  decrement: () => void;
  canDecrement: boolean;
  canIncrement: boolean;
  styles?: {
    decrementButton?: string;
    incrementButton?: string;
    valueContainer?: string;
  };
}

class CounterComponent extends React.Component<CounterComponentProps, any> {
  public render() {
    const {
      value,
      decrement,
      increment,
      canDecrement,
      canIncrement
    } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={decrement}
          title="decrement"
          disabled={!canDecrement}
        >
          -
        </button>
        <span>Value: {value}</span>
        <button
          type="button"
          title="increment"
          onClick={increment}
          disabled={!canIncrement}
        >
          +
        </button>
      </div>
    );
  }
}

@observer
export class Counter extends React.Component<{}, {}> {
  @observable value = 5;

  @computed
  get canDecrement() {
    return this.value !== MINIMUM;
  }

  @computed
  get canIncrement() {
    return this.value !== MAXIMUM;
  }

  decrement = () => {
    this.value -= 1;
  };

  increment = () => {
    this.value += 1;
  };

  render() {
    return (
      <CounterComponent
        value={this.value}
        decrement={this.decrement}
        increment={this.increment}
        canDecrement={this.canDecrement}
        canIncrement={this.canIncrement}
      />
    );
  }
}
