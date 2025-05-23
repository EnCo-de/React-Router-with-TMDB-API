import styled from "styled-components"

const SubLink = styled.li`
  font-weight: 400;
  font-size: 0.9em;
  color: #000;
  padding: 0.5rem 3rem 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    color: #212529;
    background-color: #dee2e6;
  }
`

const SubNavHoverDeck = styled.div`
  position: absolute;
  background-color: #fff;

  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border: 1px solid rgba(33, 37, 41, 0.2);
  border-radius: 0.375rem;
`

/*  Details 
    site 
    styles */
const DetailsNavbar = styled.nav`
  width: 100%;
  margin: var(--header) auto 0;
  height: 46px;
  background-color: #fff;
  overflow-x: auto;
`
const DetailsNav = styled.ul`
  display: flex;
  gap: 1.25rem;
  margin-right: 3rem;
`

const SubNavLink = styled.li`
  margin: 0.5rem;
  gap: 0.5rem;
  white-space: nowrap;
  cursor: pointer;
`
