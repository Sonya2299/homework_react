import CounterView from "commonComponents/CounterView";
import { useCounter } from "hooks";

const FunctionalCounterContainer = () => {
  const { countValue, handleDecrement, handleIncrement, handleReset } =
    useCounter(0);

  const isDisabled = countValue === 0;

  return (
    <CounterView
      counterValue={countValue}
      handleIncrement={handleIncrement}
      handleDecrement={isDisabled ? () => {} : handleDecrement}
      handleReset={handleReset}
    />
  );
};

export default FunctionalCounterContainer;
