import Web3 from "web3";

export const loadWeb3 = () => {
  const ethereum = window.ethereum;
  var web3 = window.web3;

  if (ethereum) {
    web3 = new Web3(ethereum);
    ethereum.enable().catch((e) => {
      console.log(e);
    });
  } else if (web3) {
    web3 = new Web3(web3.currentProvider);
  } else {
    window.alert(`meatamask 필요!!`);
  }

  return ethereum;
};
