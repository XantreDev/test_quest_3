import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { lighten, math } from "polished";
import { MENU_WIDTH } from "../constants";
import { isMobileQuery } from "../hooks/useIsMobile";
import { useToggle } from "../hooks/useToggle";
import { useUnmountDelay } from "../hooks/useUnmountDelay";
import { Portal } from "./Portal";

export const HEADER_HEIGHT = `100px`;

export const Root = styled.header`
  min-height: ${HEADER_HEIGHT};
  padding-bottom: ${math(`54px - 31px`)};
  padding-right: 32px;

  display: flex;
  flex-direction: row;

  align-items: center;
  & > * {
    flex: 0 1 50%;
  }
  margin-left: ${MENU_WIDTH.desktop};
  ${isMobileQuery} {
    margin-left: ${MENU_WIDTH.mobile};
  }
`;

export const Item = styled.button`
  outline: none;
  background-color: transparent;
  border: none;
  color: inherit;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: center;
  cursor: pointer;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

type UnmountProps = Partial<Record<"data-unmounting", boolean>>;

const ModalWrapper = styled.div<UnmountProps>`
  --mount-animation: 400ms ${fadeIn} forwards;
  --unmount-animation: 400ms ${fadeIn} reverse forwards;
  animation: var(--mount-animation);
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.2);
  display: grid;
  place-content: center;

  [data-unmounting="true"] {
    animation: var(--mount-animation), 400ms ${fadeIn} reverse forwards;
  }
`;

const ModalRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: ${lighten(0.2, "black")};
  border-radius: 20px;
  padding: 20px 15px;
`;

export const Header = () => {
  const [shouldShowModal, toggleModal] = useToggle();
  const { isNeedToShow, isUnmounting } = useUnmountDelay(shouldShowModal, 400);

  return (
    <Root>
      <Item onClick={toggleModal}>Мероприятия</Item>
      {isNeedToShow && (
        <Portal>
          <ModalWrapper data-unmounting={isUnmounting} onClick={toggleModal}>
            <ModalRoot onClick={(e) => e.stopPropagation()}>
              <input type="text" />
              <input type="text" />
              <button onClick={toggleModal}>Submit</button>
            </ModalRoot>
          </ModalWrapper>
        </Portal>
      )}
    </Root>
  );
};
