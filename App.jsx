import { Route, Routes } from "react-router-dom"
import Layout from "./src/Layout/Layout"
import Home from "./src/pages/Discover/Home"
import Faq from "./src/pages/faq"
import Profile from "./src/pages/Profile"
import Upload from "./src/pages/Upload/Upload"
import Wconnect from './src/pages/Wconnect';
import Item from './src/pages/Item/Item';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="" element={<Home/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/home/upload" element={<Upload/>}/>
        <Route path="/item/1" element={<Item/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/connectwallet" element={<Wconnect/>}/>
      </Route>
    </Routes>
  )
}

export default App
