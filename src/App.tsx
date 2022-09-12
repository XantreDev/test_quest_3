import styled from "@emotion/styled";
import { COLORS } from "./colors";
import { BurgerMenu } from "./components/BurgetMenu";
import { Card } from "./components/Card";
import { Header, HEADER_HEIGHT } from "./components/Header";
import { CARDS_DATA } from "./data";
import { isMobileQuery } from "./hooks/useIsMobile";

export const Root = styled.div`
  background-color: ${COLORS.background};
  min-height: 100vh;
  max-width: 100vw;
`;

const MainWrapper = styled.div`
  min-height: calc(100vh - ${HEADER_HEIGHT});
  display: flex;
  flex-direction: row;
`;

const ContentWrapper = styled.main`
  margin-inline: 16px;
  isolation: isolate;

  border-radius: 50px 50px 0 0;
  border: 1px solid black;
  flex-grow: 1;
  box-shadow: 0px 4px 4px 0px #00000040;
  background-color: ${COLORS.contentBackground};
  display: grid;
  grid-template-columns: repeat(auto-fill, 119px);
  align-content: baseline;
  gap: 35px;
  justify-content: center;

  padding-top: 10%;
  padding-bottom: 80px;
  padding-left: 10%;
  padding-right: 5%;

  ${isMobileQuery} {
    padding-left: 16px;
    padding-right: 16px;
    column-gap: 20px;
  }
  @media screen and (max-width: 360px) {
    padding-left: 8px;
    padding-right: 8px;
    column-gap: 12px;
  }
`;

export const App = () => (
  <Root>
    <Header />
    <MainWrapper>
      <BurgerMenu />
      <ContentWrapper>
        {CARDS_DATA.map(({ people, ...mainData }, index) => (
          <Card key={index}>
            <Card.Header {...mainData} />
            <Card.List>
              {people.map(({ name, ...listItemData }, index) => (
                <Card.ListItem key={index} {...listItemData}>
                  {name}
                </Card.ListItem>
              ))}
            </Card.List>
          </Card>
        ))}
      </ContentWrapper>
    </MainWrapper>
  </Root>
);
