import { ethers } from 'ethers';
import axios from 'axios';

async function requestAccount() {
console.log('Requesting account...');

if(window.ethereum) {
    console.log('detected');
    try {
    const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
    });
        console.log(accounts[0]);
    } catch (error) {
        console.log('Error connecting...');
    }

    } else {
        alert('Meta Mask not detected');
    }
}

export async function connectWallet() {
    if(typeof window.ethereum !== 'undefined') {
        await requestAccount();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
    }
}

export async function getOpenseaItems()  {
    //https://api.opensea.io/api/v1/assets?owner=WALLETADDRESS&order_direction=desc&offset=0&limit=50
    axios
      .get(`https://api.opensea.io/api/v1/assets?owner=0x0d2e83712ec165b90f3316d5441d7dee55b5794a&order_direction=desc&offset=0&limit=50`)
      .then(res => {
        console.log({nfts: res.data.assets})
    })
    .catch(err => console.error(err));
}