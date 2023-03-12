import { Route, Routes } from "react-router-dom"
import Layout from "./src/Layout/Layout"
import Discover from "./src/pages/Discover/Discover"
import Faq from "./src/pages/faq"
import Profile from "./src/pages/Profile"
import Upload from "./src/pages/Upload"
import Wconnect from './src/pages/Wconnect';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="" element={<Discover/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/upload" element={<Upload/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/connectwallet" element={<Wconnect/>}/>
      </Route>
    </Routes>
  )
}

export default App
