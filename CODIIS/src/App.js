import { HashRouter,  Route, Routes } from "react-router-dom";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Components/Registration";
import Nav from "./Components/Nav"
import Login from "./Components/Login"
// import Calculator from "./components/Calculator";
//import Card from "./Card/Card";
import Upload from "./Components/Upload";
// 
import Addplan from "./Components/Addplan";
export default function App() {
  return (
    <>
    <div>
 <HashRouter>
        <Nav/>
       
          <Routes>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/register" element={<Register />} />
          {/* <Route exact path="/Card" element={<Card />} />  */}
          <Route exact path="/upload" element={<Upload/>} />
         
          </Routes>
      
      </HashRouter>
      </div>
{/* //<Addplan/> */}
    </>
  );
}