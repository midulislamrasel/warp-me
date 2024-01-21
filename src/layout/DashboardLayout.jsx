import Navbar from "../Components/Navbar/Navbar";
import RootLayout from "./RootLayout";

function DashboardLayout({ children }) {
  return (
    <>
      <div className="bg-[#F4F5F5]">
        <div className="  ">
          <div className="flex">
            <div className="w-[200px] h-full ">
              <Navbar />
            </div>
            <div className="w-full h-full ">
              <RootLayout>
                {" "}
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatibus, sint!
                </p>
              </RootLayout>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;

{
  /* <Welcome /> */
}
