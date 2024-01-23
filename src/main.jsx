import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter basename="/car-rental">
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <App />
        <ToastContainer autoClose={1000} />
      </Provider>
    </PersistGate>
  </BrowserRouter>
  // {/* </React.StrictMode> */}
);
