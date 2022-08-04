import { useEffect, useState } from "react";
import Axios from "axios";
const Tether = () => {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    Axios.get(`https://api.coinlore.net/api/ticker/?id=518`).then((res) => {
      console.log(res.data, "result");
      setResponse(res.data[0]);
    });
  }, []);
  return (
    <div className="mt-4">
      <div className="fs-3">
        <strong>{response.name}, </strong>

        {/* could not find any good Api which directly share coin description  */}
        
        with total supply {response.tsupply} Tether (USDT) is a cryptocurrency
        with a value meant to mirror the value of the U.S.
      </div>
    </div>
  );
};

export default Tether;
