import { AllRoutes } from "./AllRoutes";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./connection.ts";

function App() {
  return (
    <>
      <div className={`theme w-full`}>
        <AllRoutes />
      </div>
    </>
  );
}

export default App;
