import { Route, Routes } from "react-router-dom";
import Layout from "./src/Layout/Layout";
import Home from "./src/pages/Discover/Home";
import Profile from "./src/pages/Profile/Profile";
import Upload from "./src/pages/Upload/Upload";
import Item from "./src/pages/Item/Item";
import Faq from "./src/pages/Faq/Faq";
import EditProfile from "./src/pages/Profile/Edit-profile/Edit-profile";
import ConnectWallet from './src/pages/Wallet/Connect-wallet';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/home/upload" element={<Upload />} />
        <Route path="/item/1" element={<Item />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/connect-wallet" element={<ConnectWallet />} />
        <Route path="/profile/edit-profile" element={<EditProfile />} />
        <Route path="/faq" element={<Faq />} />
      </Route>
    </Routes>
  );
}

export default App;
