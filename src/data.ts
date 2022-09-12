type NavItem = Record<"icon" | "text", string> &
  Partial<Record<"disabled" | "active", boolean>>;

export const NAV_ITEMS: NavItem[] = [
  { icon: "home", text: "Дашборд" },
  { icon: "discuss", text: "Биржа активности" },
  { icon: "group", text: "Биржа блогеров" },
  { icon: "like", text: "Взаимопиар" },
  { icon: "some_mans", text: "Моя структура", active: true },
  { icon: "company", text: "Магазин", disabled: true },
  { icon: "rocket", text: "Марафон" },
  { icon: "landings", text: "Лендинги" },
];
// type CardData = Record<"photoUrl" | "text", string> &
//   Partial<Record<"isAnfalovaCountFour", boolean>>;
export type CardMainData = Record<"paymentLevel" | "partnerCount", number>;
type DeclarativeCardData = CardMainData &
  Partial<Record<"isAnfalovaCountFour", boolean>>;

export type CardItemMan = Record<"photoUrl" | "name" | "link", string>;

export const declarativeCardsScheme: DeclarativeCardData[] = [
  { paymentLevel: 1, partnerCount: 133, isAnfalovaCountFour: true },
  { paymentLevel: 2, partnerCount: 129 },
  { paymentLevel: 3, partnerCount: 5455 },
  { paymentLevel: 4, partnerCount: 4500 },
  { paymentLevel: 5, partnerCount: 43233 },
  { paymentLevel: 6, partnerCount: 4500 },
  { paymentLevel: 7, partnerCount: 43233 },
  { paymentLevel: 14, partnerCount: 133 },
  { paymentLevel: 13, partnerCount: 129 },
  { paymentLevel: 12, partnerCount: 5455 },
  { paymentLevel: 11, partnerCount: 4500 },
  { paymentLevel: 10, partnerCount: 43233 },
  { paymentLevel: 9, partnerCount: 4500 },
  { paymentLevel: 8, partnerCount: 43233 },
];

export const CARDS_DATA = declarativeCardsScheme.map(
  ({ isAnfalovaCountFour, ...rest }) => ({
    ...rest,
    people: Array(isAnfalovaCountFour ? 4 : 20)
      .fill(undefined)
      .map(
        () =>
          ({
            photoUrl: "/images/anfalova.png",
            link: "#",
            name: "kris_anfalova",
          } as CardItemMan)
      ),
  })
);
