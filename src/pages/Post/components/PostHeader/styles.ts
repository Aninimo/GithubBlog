import styled from 'styled-components'

export const PostHeaderContent = styled.header`
  header{
    display: flex;
    align-items: center;
    justify-content: space-between;

    a{
      color: #3294F8;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 0.75rem;
      line-height: 160%;
    }
  }

  h1{
    color: #E7EDF4;
    margin-top: 1.5rem;
  }

  ul{
    display: flex;
    color: #C4D4E3; 
    margin-top: 1.5rem;
    gap: 2rem;
  }

  li{
    display: flex;
    align-items: center;
    gap: .5rem;
  }

  @media (max-width: 950px) {
    ul{
      display: block;
    }
  }
`
