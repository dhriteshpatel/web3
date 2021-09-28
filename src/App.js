import Web3 from "web3";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [ethname, setETHName] = useState("");
  const [myresult, setResult] = useState(null);
  const [web3, setWeb] = useState(new Web3());
  const getBalance = () => {
    web3.eth.getBalance(ethname, (err, result1) => {
      if (err) {
        console.log(err);
      } else {
        setResult(web3.utils.fromWei(result1, "ether"));
        console.log(myresult);
      }
    });
  };
  useEffect(() => {
    const web3 = new Web3(
      new Web3.providers.HttpProvider(
        "https://mainnet.infura.io/v3/e1e1503ef9c84471864cffb4f252ef66"
      )
    );
    setWeb(web3);
  }, []);
  return (
    <div className="bg-white-900 p-20 h-screen flex justify-center items-start flex-col">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto sm:max-w-xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <label
          className="block text-gray-700 text-sm font-bold mb-2 flex justify-center"
          htmlFor="username"
        >
          Ether Balance{" "}
        </label>{" "}
        <div className="m-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Wallet address or ETH Name{" "}
          </label>{" "}
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="text"
            id="username"
            onChange={(e) => setETHName(e.target.value)}
            value={ethname}
          />{" "}
        </div>{" "}
        <div className="m-4">
          <button
            className="bg-purple-600 bg-opacity-300 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            onClick={getBalance}
          >
            Show Balance Adress{" "}
          </button>{" "}
        </div>{" "}
        {myresult ? (
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            {`Your Balance : `} {myresult} {` ETH`}{" "}
          </label>
        ) : null}{" "}
      </form>{" "}
    </div>
  );
}

export default App;
