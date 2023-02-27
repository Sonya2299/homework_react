import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const CounterView = ({
  counterValue,
  isEven,
  handleIncrement,
  handleDecrement,
  handleReset,
}) => {
  return (
    <div
      className={styles.wrapper}
      style={{ backgroundColor: isEven ? "#de666c" : "#86ba94" }}
    >
      <div className={styles.display}>{counterValue}</div>
      <div className={styles.display}>{isEven}</div>

      <div className={styles.controlButtons}>
        <button className={styles.controlButton} onClick={handleDecrement}>
          -
        </button>
        <button className={styles.controlButton} onClick={handleReset}>
          Reset
        </button>
        <button className={styles.controlButton} onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

CounterView.propTypes = {
  counterValue: PropTypes.number.isRequired,
  isEven: PropTypes.bool.isRequired,
  handleIncremen: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default CounterView;
