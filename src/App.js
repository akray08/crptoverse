import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Main from './Components/Main';
import Error from './Components/Error'

function App() {
  // const getCoin = () =>{
  //   Axios.get(" https://api.coinlore.net/api/ticker/?id=90/").then((response)=>{
  //     console.log(response);
  //     setCoin(response.data.setup+"...."+response.data)
  //   })
  // }
  return (
   <BrowserRouter>
    <div className="App">
      {/* <button onClick={getCoin}>Get coin</button> */}
      <Routes>
      <Route path="/" element={<Navigate to="/main" replace/>}/>
      <Route exact path = "/main" element={<Main/>}/>
      <Route exact path = "*" element={<Error/>}/>
      </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;
