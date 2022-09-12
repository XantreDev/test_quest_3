import { useCallback, useState } from "react";

export const useToggle = (initialValue?: () => boolean | boolean) => {
  const [isToggled, setIsToggled] = useState(initialValue ?? false);

  const toggle = useCallback(
    (value?: boolean | unknown) =>
      setIsToggled((currentToggleState) =>
        typeof value === "boolean" ? value : !currentToggleState
      ),
    []
  );

  return [isToggled, toggle] as const;
};
