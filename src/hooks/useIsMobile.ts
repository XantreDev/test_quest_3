import { useMediaQuery } from "./useMediaQuery";

const isMobileWidth = "(max-width: 450px)";

export const useIsMobile = () => useMediaQuery(isMobileWidth);

export const isMobileQuery = `@media ${isMobileWidth}`;
