import { useEffect, useState } from 'react';
/**
 * The `useDebounce` function is a custom hook in TypeScript that returns a debounced value based on
 * the input value and delay.
 * @param {T} value - The value that you want to debounce. This can be of any type (T).
 * @param {number} delay - The `delay` parameter is the amount of time in milliseconds that the value
 * should be debounced for. It determines how long the code should wait after the value changes before
 * updating the debounced value.
 * @returns The `useDebounce` function returns the debounced value of the input `value`.
 */
export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
