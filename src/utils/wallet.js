import { saveSignature, getSignature } from "../../src/services/authService";
const Web3 = require("web3");
var web3 = new Web3(Web3.givenProvider);
var metamask = "https://metamask.app.link/dapp/destroy.wtf";

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const signature = await web3.eth.personal.sign(
        "https://destroy.wtf",
        addressArray[0]
      );
      saveSignature(signature);
      const obj = {
        status: true,
        address: addressArray[0],
        message: "👆🏽 Write a message in the text-field above.",
      };
      return obj;
    } catch (err) {
      return {
        status: true,
        address: "",
        message: "😥 " + err.message,
      };
    }
  } else {
    if (isMobile.any()) {
      window.location.replace(metamask);
    } else {
      return {
        status: false,
        address: "",
        message: (
          <span style={{ textAlign: "center", padding: "9% 12%" }}>
            <img
              src={
                "https://storage.googleapis.com/ishro.com/uploads/62679864512a7.svg"
              }
              style={{ width: "40%", margin: "10%" }}
            />
            <p style={{ lineHeight: "22px" }}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </p>
            <a target="_blank" href={`https://metamask.io/download.html`}>
              <button
                style={{
                  border: "0",
                  cursor: "pointer",
                  lineHeight: "1.75",
                  backgroundColor: "#FFCB3C",
                  borderRadius: "20px",
                  fontFamily: "Montserrat-Regular",
                  textTransform: "capitalize",
                  color: "#373535",
                  fontSize: "12px",
                  padding: "10px 30px",
                  margin: "8% 0.5%",
                }}
              >
                Install
              </button>
            </a>
          </span>
        ),
      };
    }
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (!getSignature()) {
        const signature = await web3.eth.personal.sign(
          "https://destroy.wtf",
          addressArray[0]
        );
        saveSignature(signature);
      }
      if (addressArray.length > 0) {
        return {
          status: true,
          address: addressArray[0],
          message: "👆🏽 Write a message in the text-field above.",
        };
      } else {
        return {
          status: false,
          address: "",
          message: (
            <span style={{ textAlign: "center", padding: "9% 12%" }}>
              <img
                src={
                  "https://storage.googleapis.com/ishro.com/uploads/62679864512a7.svg"
                }
                style={{ width: "40%", margin: "10%" }}
              />
              <p style={{ lineHeight: "22px" }}>
                Connect to Metamask using the top right button.
              </p>
              {/* <a target="_blank" href={`https://metamask.io/download.html`}>
                <button
                  style={{
                    border: "0",
                    cursor: "pointer",
                    lineHeight: "1.75",
                    backgroundColor: "#FFCB3C",
                    borderRadius: "20px",
                    fontFamily: "Montserrat-Regular",
                    textTransform: "capitalize",
                    color: "#373535",
                    fontSize: "12px",
                    padding: "10px 30px",
                    margin: "4% 0.5%",
                  }}
                >
                  Install
                </button>
              </a> */}
            </span>
          ),
        };
      }
    } catch (err) {
      return {
        status: true,
        address: "",
        message: "😥 " + err.message,
      };
    }
  } else {
    if (isMobile.any()) {
      // window.location.replace(metamask);
    } else {
      return {
        status: false,
        address: "",
        message: (
          <span style={{ textAlign: "center", padding: "9% 12%" }}>
            <img
              src={
                "https://storage.googleapis.com/ishro.com/uploads/62679864512a7.svg"
              }
              style={{ width: "40%", margin: "10%" }}
            />
            <p style={{ lineHeight: "22px" }}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </p>
            <a target="_blank" href={`https://metamask.io/download.html`}>
              <button
                style={{
                  border: "0",
                  cursor: "pointer",
                  lineHeight: "1.75",
                  backgroundColor: "#FFCB3C",
                  borderRadius: "20px",
                  fontFamily: "Montserrat-Regular",
                  textTransform: "capitalize",
                  color: "#373535",
                  fontSize: "12px",
                  padding: "10px 30px",
                  margin: "8% 0.5%",
                }}
              >
                Install
              </button>
            </a>
          </span>
        ),
      };
    }
  }
};

export const walletListener = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          status: true,
          address: addressArray[0],
          message: "👆🏽 Write a message in the text-field above.",
        };
      } else {
        return {
          status: false,
          address: "",
          message: (
            <span style={{ textAlign: "center", padding: "9% 12%" }}>
              <img
                src={
                  "https://storage.googleapis.com/ishro.com/uploads/62679864512a7.svg"
                }
                style={{ width: "40%", margin: "10%" }}
              />
              <p style={{ lineHeight: "22px" }}>
                Connect to Metamask using the top right button.
              </p>
              {/* <a target="_blank" href={`https://metamask.io/download.html`}>
                <button
                  style={{
                    border: "0",
                    cursor: "pointer",
                    lineHeight: "1.75",
                    backgroundColor: "#FFCB3C",
                    borderRadius: "20px",
                    fontFamily: "Montserrat-Regular",
                    textTransform: "capitalize",
                    color: "#373535",
                    fontSize: "12px",
                    padding: "10px 30px",
                    margin: "4% 0.5%",
                  }}
                >
                  Install
                </button>
              </a> */}
            </span>
          ),
        };
      }
    } catch (err) {
      return {
        status: false,
        address: "",
        message: "😥 " + err.message,
      };
    }
  } else {
    if (isMobile.any()) {
      // window.location.replace(metamask);
    } else {
      return {
        status: false,
        address: "",
        message: (
          <span style={{ textAlign: "center", padding: "9% 12%" }}>
            <img
              src={
                "https://storage.googleapis.com/ishro.com/uploads/62679864512a7.svg"
              }
              style={{ width: "40%", margin: "10%" }}
            />
            <p style={{ lineHeight: "22px" }}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </p>
            <a target="_blank" href={`https://metamask.io/download.html`}>
              <button
                style={{
                  border: "0",
                  cursor: "pointer",
                  lineHeight: "1.75",
                  backgroundColor: "#FFCB3C",
                  borderRadius: "20px",
                  fontFamily: "Montserrat-Regular",
                  textTransform: "capitalize",
                  color: "#373535",
                  fontSize: "12px",
                  padding: "10px 30px",
                  margin: "8% 0.5%",
                }}
              >
                Install
              </button>
            </a>
          </span>
        ),
      };
    }
  }
};

var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return (
      navigator.userAgent.match(/IEMobile/i) ||
      navigator.userAgent.match(/WPDesktop/i)
    );
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};
