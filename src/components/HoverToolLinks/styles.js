import styled from "styled-components"

export const HoverDeck = styled.div`
  @media only screen and (${({ theme }) => theme.device.tiny}) {
    position: absolute;
    width: 20%;
    min-width: 10rem;
    min-height: 20%;
    z-index: 2;

    border-radius: 0.375rem;
    margin: 0;
    outline: 0;
    padding-block: 0.25rem 0.5rem;

    font-weight: 600;
    color: #000;
    background-color: #fff;
    border: 1px solid rgba(33, 37, 41, 0.2);
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  }
`

export const HoverToolLi = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
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

export const HoverIcon = styled.img`
  width: 1rem;
  height: 1rem;
`
