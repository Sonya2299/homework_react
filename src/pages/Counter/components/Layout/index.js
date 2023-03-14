import CounterView from "../../../../commonComponents/CounterView";

const Layout = ({
  handleDecrement,
  handleIncrement,
  handleReset,
  countValue,
  isEven,
}) => {
  return (
    <div>
      <CounterView
        handleReset={handleReset}
        counterValue={countValue}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        isEven={isEven}
      />
    </div>
  );
};

export default Layout;
