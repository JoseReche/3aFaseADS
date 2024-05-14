import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

const Teste  = () =>{
    return(
        <>
            <p>Teste</p>
        </>
    )
}
