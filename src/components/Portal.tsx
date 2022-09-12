import { useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import { useConstant } from "../hooks/useConstant";

export const Portal = ({ children }: React.PropsWithChildren<unknown>) => {
  const element = useConstant(() => {
    const res = document.createElement("div");
    res.style.display = "contents";

    return res;
  });

  useLayoutEffect(() => {
    document.body.append(element);

    return () => element.remove();
  }, [element]);

  return ReactDOM.createPortal(children, element);
};
