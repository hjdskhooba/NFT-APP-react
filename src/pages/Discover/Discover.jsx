import React from "react";
import Title from "./Title/Title";
import Auction from "./Auction/Auction";
import Feed from './Feed/Feed';
import TopCreators from "./TopCreators/TopCreators";
import Hotbid from "./Hotbid/Hotbid";

const Discover = () => {
  return (
    <main>
      {/* ----------Main Title---------- */}
        <Title/>
      {/* ----------Auction block---------- */}
        <Auction/>
      {/* ----------Feed Block---------- */}
        <Feed/>
      {/* Теперь буду давать классы согласно БЭМ ! */}
        <TopCreators/>
      {/* ----------Hot Bid---------- */}
        <Hotbid/>
    </main>
  );
};
export default Discover;