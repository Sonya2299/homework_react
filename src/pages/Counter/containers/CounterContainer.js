import { Component } from "react";

import Layout from "../components/Layout";

class CounterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countValue: 0,
      isEven: true,
    };
  }

  componentDidUpdate(_, previousState) {
    const currentValue = this.state.countValue;

    if (previousState.countValue !== currentValue) {
      this.setState({ isEven: currentValue % 2 === 0 });
    }
  }

  handleIncrement = () => {
    this.setState({ countValue: this.state.countValue + 1 });
  };

  handleDecrement = () => {
    if (this.state.countValue > 0) {
      this.setState({ countValue: this.state.countValue - 1 });
    }
  };

  handleReset = () => {
    this.setState({ countValue: 0 });
  };

  render() {
    const { state, handleDecrement, handleReset, handleIncrement } = this;
    const { countValue, isEven } = state;
    return (
      <Layout
        countValue={state.countValue}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleReset={handleReset}
        isEven={state.isEven}
      />
    );
  }
}
export default CounterContainer;
