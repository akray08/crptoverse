import React from 'react'
import { useEffect, useState } from "react";
import Binance from './Binance';
import Bitcoin from "./Bitcoin";
import USDC from "./USDC";
import Caradona from './Caradona';
import Ethereum from "./Ethereum";
import Navbar from "./Navbar";
import Tether from "./Tether";

const Main = () => {
  const [coin, setCoin] = useState("selectDreamCoin");
  const [ethereumContentVisible, setEthereumContentVisible] = useState(false);
  const [tetherContentVisible, setTetherContentVisible] = useState(false);
  const [bitcoinContentVisible, setBitcoinContentVisible] = useState(false);
  const [binanceContentVisible, setBinanceContentVisible] = useState(false);
  const [caradonaContentVisible, setcaradonaContentVisible] = useState(false);
  const [USDCContentVisible, setUSDCContentVisible] = useState(false);
  const coins = ["Ethereum", "Tether","Bitcoin","Binance","Caradona"];
  const Loader = (props) => {
    const { coins } = props;
    const [coinIndex, setcoinIndex] = useState(0);

    useEffect(() => {
      let timeout;
        timeout = setTimeout(() => setcoinIndex((coinIndex + 1)%coins.length), 1000);
      return () => {
        clearTimeout(timeout);
      };
    }, [coins, coinIndex]);
    return <div>{coins[coinIndex]}</div>;
  };
  useEffect(() => {
    coin === "ethereum"
      ? setEthereumContentVisible(true)
      : setEthereumContentVisible(false);
    coin === "tether"
      ? setTetherContentVisible(true)
      : setTetherContentVisible(false);
    coin === "bitcoin"
      ? setBitcoinContentVisible(true)
      : setBitcoinContentVisible(false);
    coin === "binance"
      ? setBinanceContentVisible(true)
      : setBinanceContentVisible(false);
    coin === "caradona"
      ? setcaradonaContentVisible(true)
      : setcaradonaContentVisible(false);
    coin === "USDC"
      ? setUSDCContentVisible(true)
      : setUSDCContentVisible(false);
  }, [coin]);

  const handleOnChange = (e) => {
    setCoin(e.target.value);
  };

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
  };
  
  return (
    <div className='Main bg-dark'>
      <div className='header'>
        <Navbar />
        <div className='banner text-center text-white bg-dark' >
          <h1 className="my-3 text-white display-1">CryptoVerse</h1>
          <p className='my-4 text-warning'>Welcome to the Metaverse of Crypto</p>
        </div>
      </div>
      <div className="my-3 container bg-dark text-warning">
        <div style={divStyle}>
          <p className='my-3'>Hello ,</p>
          <Loader coins={coins} />
        </div>
        <div className="Option bg-dark text-warning">
          <select className="text-white bg-dark form-select" value={coin} onChange={handleOnChange}>
            <option value="selectDreamCoin">Select coin</option>
            <option value="ethereum">Ethereum</option>
            <option value="tether">Tether</option>
            <option value="bitcoin">Bitcoin</option>
            <option value="binance">Binance</option>
            <option value="USDC">USDC</option>
            <option value="caradona">Caradona</option>
          </select>
        </div>
        {ethereumContentVisible && <Ethereum />}
        {tetherContentVisible && <Tether />}
        {bitcoinContentVisible && <Bitcoin />}
        {binanceContentVisible && <Binance />}
        {caradonaContentVisible && <Caradona />}
        {USDCContentVisible && <USDC />}
      </div>

    </div>
  )
}
export default Main
