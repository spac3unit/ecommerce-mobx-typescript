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
  }
}
// https://github.com/Mercateo/counter-component-with-react-mobx-fela/blob/master/src/index.tsx