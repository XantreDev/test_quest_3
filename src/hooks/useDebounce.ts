import { useEffect, useState } from "react";
import { setTimeoutAbort } from "../utils";

export const useDebounce = <T>(value: T, timeout: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => setTimeoutAbort(() => setDebouncedValue(value), timeout),
    [value]
  );

  return debouncedValue;
};
