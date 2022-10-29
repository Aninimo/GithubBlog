import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PostContainer = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;
  background: #112131;
  height: 260px;
  overflow: hidden;
  
  strong{
    color: #E7EDF4;
  }

  p{
    color: #AFC2D4;
  }
`
