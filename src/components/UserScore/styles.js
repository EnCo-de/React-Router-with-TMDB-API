import styled, { css } from "styled-components"

const UserScoreChart = styled.div`
  color: var(--white);
  grid-area: consensus;
  display: inline-flex;
  width: ${(props) => (props.$chartSize === "L" ? "2.75rem" : "2.375rem")};
  height: ${(props) => (props.$chartSize === "L" ? "2.75rem" : "2.375rem")};
  line-height: 1;
  border-radius: 50%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  line-height: 0.9;
  justify-self: right;
  background-image: radial-gradient(
      rgb(8, 28, 34) 53%,
      transparent 55% 62%,
      rgb(8, 28, 34) 64%
    ),
    conic-gradient(
      ${(props) => props.$barColor} ${(props) => props.$consensus}%,
      ${(props) => props.$trackColor} 0deg
    );

  ${(props) =>
    props.$chartSize === "L" &&
    css`
      transition: transform 0.2s;
      transform: scale(1);

      &:hover {
        transform: scale(1.1);
      }
    `};

  @media only screen and (${(props) => props.theme.device.tablet}) {
    width: ${(props) => (props.$chartSize === "L" ? "4.25rem" : "2.375rem")};
    height: ${(props) => (props.$chartSize === "L" ? "4.25rem" : "2.375rem")};
  }
`

export default UserScoreChart
