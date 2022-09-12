import { useIsMobile } from "../hooks/useIsMobile";
import { useToggle } from "../hooks/useToggle";
import { CollapsedMenu } from "./CollapsedMenu";
import { Navbar } from "./Navbar";

export const BurgerMenu = () => {
  const isMobile = useIsMobile();

  return isMobile ? <CollapsedMenu /> : <Navbar />;
};
