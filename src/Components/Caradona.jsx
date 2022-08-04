import { useEffect, useState } from "react";
import Axios from "axios";
const Caradona = () => {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    Axios.get(`https://api.coinlore.net/api/ticker/?id=257`).then((res) => {
      console.log(res.data, "result");
      setResponse(res.data[0]);
    });
  }, []);
  return (
    <div className="mt-4">
      <div className="fs-3">
        <strong>{response.name}, </strong>

        {/* could not find any good Api which directly share coin description  */}
        
        with total supply {response.tsupply} is a decentralised platform that will allow complex programmable transfers of value in a secure and scalable fashion.
      </div>
    </div>
  );
};

export default Caradona;
