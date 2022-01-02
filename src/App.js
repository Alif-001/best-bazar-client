import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import Home from "./pages/Home/Home/Home";
import global from "./styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <>
      <Home/>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
    </BrowserRouter>
    
  );
}

export default App;
