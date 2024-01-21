import "./App.css";
// import RootLayout from "./layout/RootLayout";
import Navbar from "./Components/Navbar/Navbar";
import Welcome from "./Components/Welcome/Welcome";
function App() {
  return (
    <>
      {/* <RootLayout></RootLayout> */}
      <div className="bg-[#F4F5F5]">
        <div className="  ">
          <div className="flex">
            <div className="w-[200px] h-full ">
              <Navbar />
            </div>
            <div className="w-full h-full ">
              <Welcome />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

{
  /* <div className="bg-[#F4F5F5]">
<div className="  ">
  <div className="flex">
    <div className="w-[200px] h-full ">
      <Navbar />
    </div>
    <div className="w-full h-full ">
      <Welcome />
    </div>
  </div>
</div>
</div> */
}
