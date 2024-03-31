import { Outlet } from "react-router-dom";
import Header from "./Components/Common/Header";
import "./index.css"
import { Fragment } from "react";
import appStore from "./redux/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={appStore}>
      <div className="box-border">
        <Header />
        <Outlet />
      </div>
    </Provider>

  );
}

export default App;
