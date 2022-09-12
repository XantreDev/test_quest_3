import styled from "@emotion/styled";
import { math } from "polished";
import React, { ReactNode } from "react";
import { NAV_ITEMS } from "../data";

const Root = styled.nav`
  display: flex;
  gap: 27px;
  flex-direction: column;
  padding-left: 32px;

  &[aria-hidden] {
    display: none;
  }
  margin-right: -${math(`16px - 13.3px`)};
`;

const Item = styled.a`
  display: flex;
  align-items: center;
  position: relative;
  color: inherit;
  text-decoration: none;
  gap: 21px;

  &[aria-current]:before {
    content: "";
    position: absolute;
    inset: -1px auto -1px -30px;
    background-color: #6781f7;
    width: 4px;
  }
  &[aria-disabled] {
    color: #8b97ae80;
  }
`;

const NavbarItemLayer = ({
  active,
  icon,
  children,
  disabled,
}: React.PropsWithChildren<{
  icon: ReactNode;
  active?: boolean;
  disabled?: boolean;
}>) => (
  <Item
    aria-disabled={disabled ? "true" : undefined}
    aria-current={active ? "page" : undefined}
    href="#"
  >
    <div>{icon}</div>
    {children}
  </Item>
);

export const Navbar = (props: React.ComponentProps<"nav">) => (
  <Root {...props}>
    {NAV_ITEMS.map(({ icon, text, ...props }, index) => (
      <NavbarItemLayer
        key={index}
        icon={<img alt={icon.replace("_", "")} src={`/icons/${icon}.svg`} />}
        {...props}
      >
        {text}
      </NavbarItemLayer>
    ))}
  </Root>
);
