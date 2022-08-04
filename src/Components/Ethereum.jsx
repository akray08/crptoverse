import { useEffect, useState } from "react";
import Axios from "axios";
const Ethereum = () => {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    Axios.get(`https://api.coinlore.net/api/ticker/?id=80`).then((res) => {
      console.log(res.data, "result");
      setResponse(res.data[0]);
    });
  }, []);
  return (
    <div className="mt-4">
      <div className="fs-3">
        <strong>{response.name}, </strong>

        {/* could not find any good Api which directly share coin description  */}

        with total supply {response.tsupply} is the Ethereum is a smart contract
        platform that enables developers to build tokens and decentralized
        applications (dapps). currency.
      </div>
    </div>
  );
};

export default Ethereum;
