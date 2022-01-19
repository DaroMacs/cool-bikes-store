import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import { useState } from "react"

function App() {

  const [items, setItems] = useState([
    {id: 1, name: 'Play Station', price: 10, image:'image here'},
    {id: 2, name: 'Xbox', price: 15, image:'image here'},
    {id: 3, name: 'Nintendo', price: 12, image:'image here'},
    {id: 4, name: 'Play ', price: 9, image:'image here'},
    {id: 5, name: 'Play5 ', price: 8, image:'image here'}
  ])
  
  return (
    <>
    <NavBar />
    <ItemListContainer 
      items = {items}
      setItems = {setItems}
    />
    </>
  )

}
export default App
