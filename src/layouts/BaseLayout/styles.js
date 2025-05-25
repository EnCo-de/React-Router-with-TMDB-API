import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: white;
  cursor: pointer;
}

img {
  max-width: 100%;
}

button {
  all: unset;
  line-height: 0;
  cursor: pointer;
}

ul {
  list-style: none;
}

body {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  --scrollerGrey: 219, 219, 219;
  --lightGrey: 227, 227, 227;
  --darkerGrey: 200, 200, 200;
  --vibrantDarkBlue: 6, 37, 65;
  --vibrantLightBlue: 0, 118, 241;
  --tmdbDarkBlue: 3, 37, 65;
  --tmdbLightBlue: 1, 180, 228;
  --tmdbLighterGreen: 192, 254, 207;
  --tmdbLightGreen: 30, 213, 169;
  --tmdbLogoGreen: 144, 206, 161;
  --tmdbLogoOrange: 253, 193, 112;
  --tmdbLogoRed: 217, 59, 99;
  --accountSilver: 149, 149, 149;
  --accountPink: 234, 20, 140;
  --accountPurple: 128, 91, 231;
  --accountGreen: 1, 210, 119;
  --accountTeal: 1, 198, 172;
  --accountLightBlue: 1, 180, 228;
  --accountBlue: 1, 119, 210;
  --accountOrange: 210, 119, 1;
  --accountYellow: 210, 144, 1;
  --accountRed: 212, 2, 66;
  --imageBorderRadius: 0.5rem;
  --maxPrimaryPageWidth: 1400px;

  --white: #fff;
  --b-color: #dee2e6;
  --header: 4rem;
  --filters-width: 16.25rem;

  font-family: "Source Sans 3", Arial, sans-serif;
  font-size: 1rem;
}

`

export default GlobalStyle
