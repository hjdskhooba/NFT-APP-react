import React from "react";
import walletIcon1 from "../../../images/wallet/icon.svg";
import walletIcon2 from "../../../images/wallet/icon-1.svg";
import walletIcon3 from "../../../images/wallet/icon-2.svg";
import walletIcon4 from "../../../images/wallet/icon-3.svg";
import qrCode from "../../../images/wallet/barcode-qr 1.svg";

const ConnectWallet = () => {
  return (
    <div className="connect-wallet">
      <div className="container">
        <div className="wallet__inner">
          <h2 className="title disflex acenter">
            <b className="prev"></b> Connect your wallet
          </h2>
          <div className="disflex">
            <div className="wallet__choice">
              <div>
                <div>
                  <img src={walletIcon1} alt="" />
                  <p className="subtitle">Coinbase Wallet</p>
                </div>
                <b className="next arr"></b>
              </div>
              <div>
                <div>
                  <img src={walletIcon2} alt="" />
                  <p className="subtitle">Coinbase Wallet</p>
                </div>
                <b className="next arr"></b>
              </div>
              <div>
                <div>
                  <img src={walletIcon3} alt="" />
                  <p className="subtitle">Coinbase Wallet</p>
                </div>
                <b className="next arr"></b>
              </div>
              <div>
                <div>
                  <img src={walletIcon4} alt="" />
                  <p className="subtitle">Coinbase Wallet</p>
                </div>
                <b className="next arr"></b>
              </div>
            </div>
            <div className="wallet__code">
              <h2 className="title">Scan to connect</h2>
              <small className="likegray f400 poppins">
                Powered by UI8.Wallet
              </small>
              <div className="qr-code">
                <div>
                    <img src={qrCode} alt="" />
                </div>
              </div>
              <button className="btn-blue tcenter poppins f600">Don't have a wallet app?</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
