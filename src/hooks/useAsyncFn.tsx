import { useCallback, useEffect, useRef, useState } from 'react';

type StateType = {
  isLoading: boolean;
  isError: boolean;
};

type Props = {
  fn: (...args: any[]) => any;
  isLoading?: boolean;
};
export const useAsyncFn = ({ fn, isLoading }: Props) => {
  const [state, setState] = useState<StateType>({
    isLoading: isLoading || false,
    isError: false,
  });
  const isLocked = useRef(false);
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const excuteFn = useCallback(
    async (...args: any[]) => {
      if (isLocked.current) return;

      isLocked.current = true;
      setState({ isLoading: true, isError: false });

      try {
        await fn(...args);
        if (!isMounted.current) return;
        setState({ isLoading: false, isError: false });
      } catch (error) {
        if (!isMounted.current) return;
        setState({ isLoading: false, isError: true });
        throw error;
      } finally {
        isLocked.current = false;
      }
    },
    [fn]
  );

  return {
    ...state,
    excuteFn,
  };
};
