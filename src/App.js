import { Outlet } from "react-router-dom";
import Header from "./Components/Common/Header";

function App() {
  return (
    <div className="App">
      <h1 className="text-blue-500 font-bold text-xl">Hello Youtube</h1>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
