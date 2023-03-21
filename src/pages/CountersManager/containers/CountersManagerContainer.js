import { v4 as uuid } from "uuid";
import { useCallback, useState } from "react";

import Layout from "../components/Layot";
import { isEven } from "../utils/isEven";

const CountersManagerContainer = () => {
  const [counters, setCounters] = useState([]);

  const handleCounterCreate = () => {
    const newCounter = {
      id: uuid(),
      countValue: 0,
    };
    setCounters((state) => {
      const updateCounters = state.map((counter) => {
        if (isEven(counter.countValue)) {
          return {
            ...counter,
            countValue: counter.countValue + 1,
          };
        }
        return counter;
      });

      updateCounters.push(newCounter);

      return updateCounters;
    });
  };

  const handleRemove = useCallback((counterId) => {
    setCounters((state) => {
      const countersCopy = structuredClone(state);
      const counterIndexToRemove = countersCopy.findIndex(
        ({ id }) => id === counterId
      );

      countersCopy.splice(counterIndexToRemove, 1);

      return countersCopy.map((counter) => {
        return {
          ...counter,
          countValue: !isEven(counter.countValue)
            ? counter.countValue - 1
            : counter.countValue,
        };
      });
    });
  }, []);

  const handleIncrement = useCallback((counterId) => {
    setCounters((state) => {
      const countersCopy = structuredClone(state);
      const foundCounter = countersCopy.find(({ id }) => id === counterId);

      foundCounter.countValue += 1;

      return countersCopy;
    });
  }, []);

  const handleDecrement = useCallback((counterId) => {
    setCounters((state) => {
      const countersCopy = structuredClone(state);
      const foundCounter = countersCopy.find(({ id }) => id === counterId);

      foundCounter.countValue -= 1;

      return countersCopy;
    });
  }, []);

  const handleCounterReset = useCallback((counterId) => {
    setCounters((state) => {
      const countersCopy = structuredClone(state);
      const foundCounter = countersCopy.find(({ id }) => id === counterId);

      foundCounter.countValue = 0;

      return countersCopy;
    });
  }, []);

  const handleRemoveAllCounters = () => {
    setCounters([]);
  };

  const totalSum = counters.reduce(
    (result, { countValue }) => countValue + result,
    0
  );

  return (
    <Layout
      counters={counters}
      handleCounterCreate={handleCounterCreate}
      handleRemove={handleRemove}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleCounterReset={handleCounterReset}
      handleReset={handleRemoveAllCounters}
      totalSum={totalSum}
    />
  );
};
export default CountersManagerContainer;
