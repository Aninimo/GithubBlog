import { BrowserRouter } from 'react-router-dom'
import { Routers } from './Routers'
import { GlobalStyles } from './styles/global'

export default function App() {
  return (
    <BrowserRouter>
      <Routers/>
      <GlobalStyles/>
    </BrowserRouter>
  )
}
