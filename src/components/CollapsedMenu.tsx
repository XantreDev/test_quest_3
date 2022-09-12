import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { lighten, transparentize } from "polished";
import { MENU_WIDTH } from "../constants";
import { useScrollLock } from "../hooks/useScrollLock";
import { useToggle } from "../hooks/useToggle";
import { useUnmountDelay } from "../hooks/useUnmountDelay";
import { Navbar } from "./Navbar";
import { Portal } from "./Portal";

const Root = styled.nav`
  width: ${MENU_WIDTH.mobile};
  padding: 10px;
  margin-right: -16px;
`;

const fade = keyframes`
  from {
    background-color: ${transparentize(1, "#000")}
  }
  to {
    background-color: ${transparentize(0.7, "#000")}
  }
`;

const appearFromLeft = keyframes`
  from {
    transform: translate(-100%);
  }
  to {
    transform: translate(0%);
  }
`;

type UnmountingProps = Partial<Record<"data-unmounting", boolean>>;

const ToggleButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;

  img {
    object-fit: cover;
    filter: invert(100);
  }
`;

const MenuWrapper = styled.div<UnmountingProps>`
  position: fixed;
  inset: 0;
  display: flex;
  animation: 500ms ${fade} 1 250ms forwards;

  &[data-unmounting="true"] {
    animation: 500ms ${fade} 1 250ms forwards,
      250ms ${fade} 250ms reverse forwards;
  }
`;

const AppearingMenu = styled(Navbar)<UnmountingProps>`
  background-color: ${lighten(0.15, "black")};
  height: 100%;
  padding-top: 20px;
  padding-right: 20px;
  margin-right: 0;

  animation: 500ms ${appearFromLeft} forwards;

  &[data-unmounting="true"] {
    animation: 500ms ${appearFromLeft} forwards, 500ms ${appearFromLeft} reverse forwards;
  }
`;

export const CollapsedMenu = () => {
  const [isMenuShown, toggleMenu] = useToggle();
  const { isNeedToShow: isNeedToShowWithDelay, isUnmounting } = useUnmountDelay(
    isMenuShown,
    500
  );
  useScrollLock(isNeedToShowWithDelay);

  return (
    <Root>
      <ToggleButton onClick={toggleMenu}>
        <img src="/icons/menu.svg" />
      </ToggleButton>
      {isNeedToShowWithDelay && (
        <Portal>
          <MenuWrapper data-unmounting={isUnmounting} onClick={toggleMenu}>
            <AppearingMenu
              data-unmounting={isUnmounting}
              onClick={(e) => e.stopPropagation()}
            />
          </MenuWrapper>
        </Portal>
      )}
    </Root>
  );
};
