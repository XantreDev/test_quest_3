import { useEffect, useState } from "react";
import { useConstant } from "./useConstant";

export const useMediaQuery = (queryString: string) => {
  const mediaQuery = useConstant(() => window.matchMedia(queryString));

  const [isQuery, setIsQuery] = useState(mediaQuery.matches);

  useEffect(() => {
    const abortController = new AbortController();

    mediaQuery.addEventListener(
      "change",
      (event) => setIsQuery(event.matches),
      { signal: abortController.signal }
    );

    return () => abortController.abort();
  }, []);

  return isQuery;
};
