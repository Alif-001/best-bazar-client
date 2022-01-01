import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import global from "./styles/global.scss";

function App() {
  return (
    <>
      <div className={`${global.app}App`}>
        <h3>Hello Team</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          voluptates officiis inventore laudantium maxime quam dolorem eius
          nulla, deserunt ratione dignissimos consequuntur perspiciatis nesciunt
          blanditiis corrupti repellat sequi obcaecati quasi!
        </p>
        <button>Welcome</button>
      </div>
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
  );
}

export default App;
