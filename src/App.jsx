import NavBar from "./components/NavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import ErrorPage from "./pages/ErrorPage"

function App() {
  
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home /> }/>
        <Route path='/about' element={<About /> }/>
        <Route path='/products' element={<Products /> }/>
        <Route path='*' element={<ErrorPage /> }/>
      </Routes>
    </BrowserRouter>
  )

}
export default App
