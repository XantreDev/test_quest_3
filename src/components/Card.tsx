import styled from "@emotion/styled";
import { mix, transparentize } from "polished";
import { PropsWithChildren } from "react";
import { COLORS } from "../colors";
import { CardItemMan, CardMainData } from "../data";

const Root = styled.div`
  position: relative;
  background-color: ${mix(0.5, COLORS.contentBackground, COLORS.cardColor)};
  padding: 10px 15px 25px 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 230px;
  border-radius: 20px;

  &::after,
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-color: transparent;
    transition: opacity 100ms;
    border-radius: inherit;
    opacity: 0;
  }

  &:after {
    filter: blur(4px);
    z-index: -1;
    transform: translateY(4px);
    background-color: black;
  }

  &:hover:after {
    opacity: 0.25;
  }

  &:before {
    border: 1px solid black;
  }
  &:hover:before {
    opacity: 0.5;
  }
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  row-gap: 2px;

  grid-template-areas:
    ". ."
    "divider divider"
    ". .";

  &:after {
    content: "";
    grid-area: divider;

    height: 1px;
    background-color: ${transparentize(0.2, "#707d96")};
  }
`;

const HeaderTitle = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
`;

const HeaderSubheader = styled.div`
  font-size: 8px;
  font-weight: 400;
  line-height: 10px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 130px;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;

  scroll-snap-type: y mandatory;
  & > * {
    scroll-snap-align: start;
  }


  &::-webkit-scrollbar {
    width: 1px;
    appearance: none;
  }
  &::-webkit-scrollbar-track,
  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb {
    border-radius: 15px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #707D96;
  }
  &::-webkit-scrollbar-track {
    background-color: #192233;
  }
`;

const ListItemStyled = styled.a`
  display: flex;
  gap: 5px;
  align-items: center;

  font-size: 8px;
  font-weight: 400;
  line-height: 10px;
  color: ${transparentize(0.5, "#FFFFFF")};

  & > img {
    width: 25px;
    height: 25px;
    object-fit: cover;
    outline: 1px solid white;
    outline-offset: -1px;
    border-radius: 100vmax;
    opacity: 0.5;
    transition: opacity 150ms;
    display: block;
  }
  &:hover > img {
    opacity: 1;
  }
`;

const ListItem = ({
  link,
  photoUrl,
  children,
}: PropsWithChildren<Omit<CardItemMan, "name">>) => (
  <li style={{ display: "contents" }}>
    <ListItemStyled href={link}>
      <img alt="person avatar" src={photoUrl} />
      {children}
    </ListItemStyled>
  </li>
);

export type CardHeaderProps = CardMainData;

const CardHeader = ({ partnerCount, paymentLevel }: CardHeaderProps) => (
  <Header>
    <HeaderTitle>{paymentLevel}</HeaderTitle>
    <HeaderTitle>{partnerCount}</HeaderTitle>
    <HeaderSubheader>Уровень выплат</HeaderSubheader>
    <HeaderSubheader>Активных партнеров</HeaderSubheader>
  </Header>
);

export const Card = Object.assign(Root, {
  Header: CardHeader,
  List,
  ListItem,
});
