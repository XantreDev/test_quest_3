type AbortCallback = () => void;

export const setTimeoutAbort = (
  handler: TimerHandler,
  timeout?: number
): AbortCallback => {
  const id = setTimeout(handler, timeout);

  return () => clearTimeout(id);
};
