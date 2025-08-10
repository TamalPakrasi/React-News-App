import { Navbar, BrowseNews } from "./components";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <BrowseNews />
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
