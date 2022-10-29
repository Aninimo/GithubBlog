import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'


export const ContentPost = styled.div`
  max-width: 864px;
  width: 100%;
  padding: 2.5rem;
  white-space: pre-wrap;
  color: #AFC2D4;

  a{
    color: #3294F8;
  }
`

export const Markdown = styled(ReactMarkdown)`
  margin-top: 20px;
  font-weight: 700;
  font-size: 1rem;
  line-height: 160%;

  pre{
    background: #112131;
    
    code {
      span {
        font-family: "Fira Code";
      }
    }
  }
`
