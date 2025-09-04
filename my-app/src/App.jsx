import { Routes,Route } from "react-router-dom";
import Home from "./Components/Home";
import Reg from "./Components/Signup";
import Login from "./Components/Login";
import Details from "./Components/Profile";


function App()
{
  return(
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/register" element={<Reg/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/profile" element={<Details/>}></Route>
    </Routes>
  )
}

export default App;


