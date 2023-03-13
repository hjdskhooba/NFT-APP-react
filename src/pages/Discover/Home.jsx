import React from "react";
import Title from "./Title/Title";
import Auction from "./Auction/Auction";
import Feed from './Feed/Feed';
import TopCreators from "./TopCreators/TopCreators";
import Hotbid from "./Hotbid/Hotbid";
import Hotcollections from "./Hotcollections/Hotcollections";
import Discover from "./Discover/Discover";

const Home = () => {
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
      {/* ----------Hot Collections---------- */}
        <Hotcollections/>
      {/* ----------Hot Collections---------- */}
        <Discover/>
    </main>
  );
};
export default Home;