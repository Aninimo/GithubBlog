import styled from 'styled-components'

export const ProfileContainer = styled.div`
  max-width: 864px;
  width: 100%;
  height: 212px;
  display: flex;
  background: #0B1B2B;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem;
  margin-top: -4.5rem;
  gap: 2rem;

  img {
    border-radius: 10px;
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      h1{
        color: #E7EDF4;
      }

      a{
        display: flex;
        align-items: center;
        gap: 1rem;
        color: #3294F8;
        text-trasnform: uppercase;
        font-size: 1.5rem;
      }
    }
  }

  p{
    color: #C4D4E3;
    margin-top: 1rem;
  }

  ul{
    display: flex;
    gap: 2rem;
    margin-top: 1rem;
  }

   li{
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #C4D4E3;

      svg{
        color: #3A536B;
      }
    } 

  @media (max-width: 950px){
    height: 26rem;
    display: block;
    
    img{
      width: 150px;
      margin-bottom: .5rem;
    }
    
    div{
      header{
        display: block;
      }
    }
    
    ul{
      display: block;
    }
  }
`
