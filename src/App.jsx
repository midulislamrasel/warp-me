import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Welcome from "./Components/Welcome/Welcome";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex">
          <div className=" w-[240px] h-full ">
            <Navbar />
          </div>
          <div className="w-[1200px] h-full ">
            <Welcome />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
