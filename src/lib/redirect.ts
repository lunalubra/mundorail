import { getCountry } from "./getCountry";

export const redirect = () => {
  // if (typeof window !== "undefined") {
  //   const domain =
  //     location?.host?.split(".")[location?.host?.split(".").length - 1];
  //   const isGlobalPage = domain === "com";
  //   const isMexicoPage = domain === "mx";
  //   const country = getCountry();
  //   const isInUSA = country === "United States of America";
  //   const isInMexico = country === "Mexico";
  //   if (isGlobalPage && (isInUSA || isInMexico)) {
  //     window.location.host = "www.mundorail.mx" + window.location.pathname;
  //   }
  //   if (isMexicoPage && (!isInUSA || !isInMexico)) {
  //     window.location.host = "www.mundorail.com" + window.location.pathname;
  //   }
  // }
};
