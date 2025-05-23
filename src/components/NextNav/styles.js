import styled, { css } from "styled-components"

const NextNavWrapper = styled.nav`
  width: 100%;
  margin-bottom: 1.25rem;
`

const NextNavButton = styled.button`
  font-family: sans-serif;
  font-weight: 300;
  line-height: 1em;
  outline: none;
  border: none;
  border-radius: var(--imageBorderRadius);
  margin-left: 0.25rem;
  padding: 5px 4px 4px;
  color: #000;
  background: transparent;

  cursor: ${(props) => (props.as === "span" ? "default" : "pointer")};

  &:disabled {
    color: #d8d8d8;
  }

  ${(props) =>
    props.$current &&
    css`
      background-color: #e1e1e1;
      color: #000;
      padding: 0.3125rem 0.5rem 0.25rem;
    `};
`

export { NextNavWrapper, NextNavButton }
