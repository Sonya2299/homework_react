import { Component } from "react";

import CounterView from "../components/CounterView";

class CounterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countValue: 0,
      isEven: true,
    };
  }

  handleIncrement = () => {
    this.setState((previousState) => {
      const incrementedValue = previousState.countValue + 1;
      const isEvenNamber =
        incrementedValue % 2 === 0
          ? `${"Введено чётное число"}`
          : `${"Введено нечётное число"}`;

      return {
        countValue: incrementedValue,
        isEven: isEvenNamber,
      };
    });
  };
  handleDecrement = () => {
    if (this.state.countValue > 0) {
      this.setState((previousState) => {
        const decrementedValue = previousState.countValue - 1;
        const isEvenNamber =
          decrementedValue % 2 === 0
            ? `${"Введено чётное число"}`
            : `${"Введено нечётное число"}`;

        return {
          countValue: decrementedValue,
          isEven: isEvenNamber,
        };
      });
    }
  };

  handleReset = () => {
    this.setState({ countValue: 0, isEven: `${"Введено чётное число"}` });
  };

  render() {
    return (
      <CounterView
        counterValue={this.state.countValue}
        isEven={this.state.isEven}
        handleIncrement={this.handleIncrement}
        handleDecrement={this.handleDecrement}
        handleReset={this.handleReset}
      />
    );
  }
}
export default CounterContainer;
