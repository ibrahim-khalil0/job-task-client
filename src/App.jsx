
import { Outlet } from 'react-router-dom'
import Header from './sharedComponent/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <h1>hello this is app</h1>
      <Outlet></Outlet>
    </>
  )
}

export default App
