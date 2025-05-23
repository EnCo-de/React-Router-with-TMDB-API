import styled from "styled-components"

const StyledSearchField = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  border-top: 1px solid rgba(var(--lightGrey), 1);
  border-bottom: 1px solid rgba(var(--lightGrey), 1);
  color: #212529;
  background-color: #ffffff;
  width: 100%;
  height: 2.75rem;
  display: ${(props) => (props.$isHidden ? "none" : "flex")};
  align-items: center;
`

export default StyledSearchField
