import CounterView from "commonComponents/CounterView";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const Layout = ({
  counters,
  handleCounterCreate,
  handleReset,
  handleRemove,
  handleIncrement,
  handleDecrement,
  handleCounterReset,
  totalSum,
}) => {
  const average = counters.length > 0 ? totalSum / counters.length : 0;

  return (
    <div>
      <h1>Counters Manager</h1>
      <div className={styles.stats}>
        <p>TOTAL: {totalSum}</p>
        <p>AVERAGE: {average}</p>
        <p>COUNTERS AMOUNT: {counters.length}</p>
      </div>
      <div>
        <button onClick={handleCounterCreate}> Create counter</button>
        <button onClick={handleReset}> Reset</button>
      </div>
      <div className={styles.countersArea}>
        {counters.map(({ id, countValue }) => (
          <CounterView
            id={id}
            key={id}
            handleReset={handleCounterReset}
            counterValue={countValue}
            handleIncrement={handleIncrement}
            handleRemove={handleRemove}
            handleDecrement={handleDecrement}
          />
        ))}
      </div>
    </div>
  );
};
Layout.propTypes = {
  counters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      countValue: PropTypes.number,
    }).isRequired
  ).isRequired,
  handleCounterCreate: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
};

export default Layout;
