import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <div className="border-b shadow-md dark:bg-gray-600">
        <Nav></Nav>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
