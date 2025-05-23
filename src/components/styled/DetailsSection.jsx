import styled from "styled-components"

export const StyledDetailsSection = styled.div`
  min-height: 100vh;
  padding: 1.25rem;
  background: rgb(210, 170, 18)
    url(https://media.themoviedb.org/t/p/w1000_and_h450_multi_faces${(props) =>
      props.$backdrop_path})
    calc((((100vw / 2.222222) - 20px) / 1.5) / 2) 0 / 100%
    calc((100vw / 2.222222) + 2.5rem) no-repeat;
  display: flex;
  gap: 1.25rem;
  flex-direction: column;

  @media ${(props) => props.theme.device.tablet} {
    background-color: lightgreen;
    padding: 1.875rem 2.5rem;
    background-size: 100% calc((100vw / 2.222222) + 3.75rem);
    flex-direction: row;
    gap: 2.5rem;
  }
`
