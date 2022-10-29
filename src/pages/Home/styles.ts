import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4.5rem;
  padding: 1rem 2rem;
`

export const HomeContent = styled.div`
  max-width: 864px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const PostList = styled.div`
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
    gap: 2rem;
  
  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`
