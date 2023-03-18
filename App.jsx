import { Route, Routes } from "react-router-dom";
import Layout from "./src/Layout/Layout";
import Home from "./src/pages/Discover/Home";
import Profile from "./src/pages/Profile/Profile";
import Upload from "./src/pages/Upload/Upload";
import Item from "./src/pages/Item/Item";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/home/upload" element={<Upload />} />
        <Route path="/item/1" element={<Item />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
