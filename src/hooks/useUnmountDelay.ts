import { useDebounce } from "./useDebounce";

export const useUnmountDelay = (isNeedToShow: boolean, delay: number) => {
  const debouncedIsNeedToShow = useDebounce(isNeedToShow, delay);

  return {
    isNeedToShow: debouncedIsNeedToShow,
    isUnmounting: debouncedIsNeedToShow !== isNeedToShow,
  };
};
