import { useCallback, useState, useEffect } from "react";

const useCounter = (initialValue, trackCountChanges) => {
  const [countValue, setCountValue] = useState(initialValue);

  const handleIncrement = useCallback(() => {
    setCountValue((state) => state + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCountValue((state) => state - 1);
  }, []);

  const handleReset = useCallback(() => {
    setCountValue(0);
  }, []);

  return {
    countValue,
    handleIncrement,
    handleDecrement,
    handleReset,
  };
};

export default useCounter;
