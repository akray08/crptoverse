import { useEffect, useState } from "react";
import Axios from "axios";
const Bitcoin = () => {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    Axios.get(`https://api.coinlore.net/api/ticker/?id=90`).then((res) => {
      console.log(res.data, "result");
      setResponse(res.data[0]);
    });
  }, []);
  return (
    <div className="mt-4">
      <div className="fs-3">
      {/* <img width="2%" className="rounded" src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="bitcoin" /> */}
        <strong>{ response.name}, </strong>
        
        {/* could not find any good Api which directly share coin description  */}

        with total supply {response.tsupply} is the first successful internet
        money based on peer-to-peer technology; whereby no central bank or
        authority is involved in the transaction and production of the Bitcoin
        currency.
      </div>
     
    </div>
  );
};

export default Bitcoin;
