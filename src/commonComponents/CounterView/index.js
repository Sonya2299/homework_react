import { memo } from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const CounterView = ({
  id,
  counterValue,
  handleIncrement,
  handleDecrement,
  handleReset,
  handleRemove,
}) => {
  const isEven = counterValue % 2 === 0;
  return (
    <div
      className={styles.wrapper}
      style={{ background: isEven ? "#fadfdd" : "#888bf2" }}
    >
      <div className={styles.display}>{counterValue}</div>
      <div className={styles.display}>{isEven ? "Even" : "Odd"}</div>

      <div className={styles.controlButtons}>
        <button
          disabled={counterValue === 0}
          className={styles.controlButton}
          onClick={() => handleDecrement(id)}
        >
          -
        </button>
        <button
          className={styles.controlButton}
          onClick={() => handleReset(id)}
        >
          Reset
        </button>
        <button
          className={styles.controlButton}
          onClick={() => handleIncrement(id)}
        >
          +
        </button>
      </div>
      <button
        onClick={() => handleRemove(id)}
        style={{ background: "#c61b2e" }}
      >
        Remove
      </button>
    </div>
  );
};

CounterView.propTypes = {
  id: PropTypes.string.isRequired,
  counterValue: PropTypes.number.isRequired,
  isEven: PropTypes.bool.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default memo(CounterView);
