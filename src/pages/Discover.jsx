import React from 'react'

const Discover = () => {
  return (
    <main>
        <div className="title__block">
            <div className="container">
                <div className="title__inner">
                    <p className="title__inner-topText poppins f700">Create, explore, & collect digital art NFTs.</p>
                    <h1 className="title__inner-center dmsans cht2">The new creative economy.</h1>
                    <div className="title__inner-bottom">
                        <button className="title__inner-bottom-btn dmsans f700 border2">Start your search</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="auction__block">
            <div className="container">
                <div className="auction__inner">
                    <div className="auction__inner-left tcenter">
                        <img src="./images/first-painting.png" className="auction__inner-left-img" alt=""/>
                        <audio src="" controls className="auction__inner-left-player"></audio>
                    </div>
                    <div className="auction__inner-right">
                        <h2 className="auction__inner-right-title dmsans cht2">the creator network®</h2>
                        <div className="auction__inner-right-acc disflex">
                            <div className="auction__inner-right-acc-left disflex">
                                <div className="austin-avatar"></div>
                                <div className="austin-right poppins">
                                    <small className="austin-info-top likegray">Creator</small>
                                    <br/>
                                    <small className="austin-info-bottom cht2">Enrico Cole</small>
                                </div>
                            </div>
                            <div className="auction__inner-right-acc-left disflex">
                                <div className="austin-avatar icon"></div>
                                <div className="austin-right poppins">
                                    <small className="austin-info-top f400 likegray">Instant price</small>
                                    <br/>
                                    <small className="austin-info-bottom f500 cht2">3.5 ETH</small>
                                </div>
                            </div>
                        </div>
                        <div className="auction__inner-right-middle tcenter border2">
                            <p className="auction__inner-right-middle-topText poppins f500 cht2">Current Bid</p>
                            <h2 className="cht4 dmsans f700">1.00 ETH</h2>
                            <h4 className="likegray poppins f600">$3,618.36</h4>
                            <div className="auction__inner-right-middle-bottom">
                                <p className="poppins cht2 f500">Auction ending in</p>
                                <div className="auction__inner-right-middle-timer tcenter disflex">
                                    <div className="hours">
                                        <h3 className="f700 dmsans cht4">19</h3><small
                                            className="likegray poppins">Hrs</small>
                                    </div>
                                    <div className="minutes">
                                        <h3 className="f700 dmsans cht4">24</h3><small
                                            className="likegray poppins">mins</small>
                                    </div>
                                    <div className="secs">
                                        <h3 className="f700 dmsans cht4">19</h3><small
                                            className="likegray poppins">secs</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="auction__inner-right-bottom">
                            <button className="auction__inner-right-bottom-btn-blue dmsans f700 tcenter likewhite">
                                Place a bid
                            </button>
                            <button className="auction__inner-right-bottom-btn-white dmsans f700 tcenter">
                                View item
                            </button>
                            <div className="auction__inner-right-bottom-arrows">
                                <b className="auction__inner-right-bottom-arrows-prev poppins f700">&#8592;</b>
                                <b className="auction__inner-right-bottom-arrows-next poppins f700">&#8594;</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="feed__block">
            <div className="container">
                <div className="feed__fordf disflex">
                    <div className="feed__block__inner disflex">
                        {/* <!-- --- --> */}
                        <div className="feed__block__inner-left">
                            <div className="feed__block__inner-left-img">
                                {/* <!-- background-image --> */}
                            </div>
                            <div className="feed__block__inner-left-info disflex">
                                <div className="feed__block__inner-left-info-acc disflex">
                                    <div className="avatar"></div>
                                    <div className="avatar-right poppins">
                                        <h4 className="avatar-info-top poppins f600">The future of ETH®</h4>
                                        <small className="avatar-info-bottom poppins f500">18 in stock</small>
                                    </div>
                                </div>
                                <div className="feed__block__inner-left-info-right">
                                    <p className="feed__block__inner-left-info-right-p1 poppins f400 likegray">Highest
                                        bid</p>
                                    <p className="feed__block__inner-left-info-right-p2 poppins f700">1.125 ETH</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- --- --> */}
                        <div className="feed__block__inner-middle">
                            <div className="feed__block__inner-middle-top disflex acenter">
                                <img src="/images/info-mid-1.png" className="feed__block__inner-middle-top-img" alt=""/>
                                <div className="feed__block__inner-middle-top-descrip">
                                    <h4 className="poppins f500 cht2">ETH never die</h4>
                                    <div className="disflex acenter">
                                        <div className="avatar24"></div>
                                        <p className="feed__block__inner-left-info-right-p2 scrrra poppins f700">0.27
                                            ETH</p>
                                        <p className="ptwoforthis poppins f400 likegray">1 of 12</p>
                                    </div>
                                    <button className="dmsans f600 cht2">Place a bid</button>
                                </div>
                            </div>
                            <div className="feed__block__inner-middle-middle disflex acenter">
                                <img src="/images/info-mid-2.png" className="feed__block__inner-middle-top-img" alt=""/>
                                <div className="feed__block__inner-middle-top-descrip">
                                    <h4 className="poppins f500 cht2">Future coming soon</h4>
                                    <div className="disflex acenter">
                                        <div className="avatar24"></div>
                                        <p className="feed__block__inner-left-info-right-p2 scrrra poppins f700">0.27
                                            ETH</p>
                                        <p className="ptwoforthis poppins f400 likegray">1 of 3</p>
                                    </div>
                                    <button className="dmsans f600 cht2">Place a bid</button>
                                </div>
                            </div>
                            <div className="feed__block__inner-middle-bottom disflex acenter">
                                <img src="/images/info-mid-3.png" className="feed__block__inner-middle-top-img" alt=""/>
                                <div className="feed__block__inner-middle-top-descrip">
                                    <h4 className="poppins f500 cht2">Elon Musk silver coin 3d print</h4>
                                    <div className="disflex acenter">
                                        <div className="avatar24"></div>
                                        <p className="feed__block__inner-left-info-right-p2 scrrra poppins f700">0.27
                                            ETH</p>
                                        <p className="ptwoforthis poppins f400 likegray">1 of 4</p>
                                    </div>
                                    <button className="dmsans f600 cht2">Place a bid</button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- --- --> */}
                    </div>
                    <div className="feed__block__inner-right">
                        <p className="poppins likegray f600">Latest upload from creators 🔥</p>
                        <div className="feed__block__inner-right-column">
                            <div className="feed__block__inner-right-column-item one acenter disflex">
                                <div className="feed__block__inner-right-column-item-left"><span
                                        className="shesterka poppins f600">6</span></div>
                                <div className="feed__block__inner-right-column-item-right poppins">
                                    <p className="f500 cht2">Payton Harris</p>
                                    <small className="poppins disflex">2.456 <p className="likegray"> ETH</p></small>
                                </div>
                            </div>
                            <div className="feed__block__inner-right-column-line"></div>
                            <div className="feed__block__inner-right-column-item two acenter disflex">
                                <div style="background-color: aquamarine;"
                                    className="feed__block__inner-right-column-item-left"><span
                                        className="shesterka poppins f600">3</span></div>
                                <div className="feed__block__inner-right-column-item-right poppins">
                                    <p className="f500 cht2">Anita Bins</p>
                                    <small className="poppins disflex">2.456 <p className="likegray"> ETH</p></small>
                                </div>
                            </div>
                            <div className="feed__block__inner-right-column-line"></div>
                            <div className="feed__block__inner-right-column-item three acenter disflex">
                                <div className="feed__block__inner-right-column-item-left"><span
                                        className="shesterka poppins f600">1</span></div>
                                <div className="feed__block__inner-right-column-item-right poppins">
                                    <p className="f500 cht2">Joana Wuckert</p>
                                    <small className="poppins disflex">2.456 <p className="likegray"> ETH</p></small>
                                </div>
                            </div>
                            <div className="feed__block__inner-right-column-line"></div>
                            <div className="feed__block__inner-right-column-item four acenter disflex">
                                <div style="background-color: #EF466F;"
                                    className="feed__block__inner-right-column-item-left"><span
                                        className="shesterka poppins f600">12</span></div>
                                <div className="feed__block__inner-right-column-item-right poppins">
                                    <p className="f500 cht2">Lorena Ledner</p>
                                    <small className="poppins disflex">2.456 <p className="likegray"> ETH</p></small>
                                </div>
                            </div>
                            <div className="feed__block__inner-right-column-button disflex acenter tcenter">
                                <p className="dmsans f700 cht2">Discover more</p>&#8594;
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
)}
export default Discover