import styled from "styled-components"

const Btn = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 100%;
  user-select: none;
`

const BtnBlue = styled(Btn)`
  height: 44px;
  border-radius: 20px;
  min-width: var(--filters-width, 16.25rem);
  width: 100%;
  align-content: center;
  color: var(--white, #fff);
  background: rgb(var(--tmdbLightBlue, (0, 118, 241)));
`

export const LoadBtn = styled(BtnBlue)`
  margin-top: 30px;
  grid-column: 1 / -1;
  height: 50px;
  border-radius: var(--imageBorderRadius);
`

export const LoadBtnText = styled.span`
  font-size: 1.5em;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: rgb(var(--tmdbDarkBlue));
  }
`

// Sort Filter Sticky Blue Button
export const SearchStickyBtnIndicator = styled.div`
  margin-top: 20px;
  min-width: 100%;
  min-height: 44px;
`

// Object
const stickyStyle = `
  &:not([disabled]) {
    border-radius: 0;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1;
  }
`

export const SortFilterButton = styled(BtnBlue).attrs((props) => ({
  type: "submit",
  disabled: props.disabled,
}))`
  font-size: 1.2em;
  line-height: 1;
  font-weight: 600;

  &:hover {
    background: rgb(var(--tmdbDarkBlue, (6, 37, 65)));
    cursor: pointer;
  }

  &:disabled,
  &:disabled:hover {
    background-color: rgba(228, 228, 228, 0.7);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    cursor: default;
    color: rgba(0, 0, 0, 0.5);
  }

  ${(props) => props.$isSticky && stickyStyle}
`
