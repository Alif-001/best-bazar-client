import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home/Home";
import ForgetPassword from "./pages/Login/ForgetPassword/ForgetPassword";
import Login from "./pages/Login/Login/Login";
import Registration from "./pages/Login/Registration/Registration";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Footer from "./pages/Shared/Footer/Footer";
import ProductDetails from "./pages/Shared/ProductDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
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
        <Footer />
      </Router>
    </>
  );
}

export default App;
