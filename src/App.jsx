import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";

import Header from "./pages/header";
import Login from "./pages/login";
import Register from "./pages/register";
import { Toaster } from "react-hot-toast";
function App() {

  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
      <Toaster />
      
    </Router>
  )
}

export default App;
