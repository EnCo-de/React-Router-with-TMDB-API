import styled from "styled-components"

const StyledChart = styled.div`
  color: var(--white);
  grid-area: consensus;
  display: inline-flex;
  width: 2.75rem;
  height: 2.75rem;
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

  @media only screen and (width >= 50rem) {
    width: ${(props) => props.$chartSize};
    height: ${(props) => props.$chartSize};
  }
`

export default StyledChart
