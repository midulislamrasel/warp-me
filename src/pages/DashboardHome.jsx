import Banner from "../Components/Bannner/Banner";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import RecentCallSection from "../Components/RecentCallSection/RecentCallSection";
import StateTaskCall from "../Components/StateTaskCall/StateTaskCall";
import Stats from "../Components/Stats/Stats";
import MYTasks from "../Components/Tasks/MYTasks";
import UpcomingWarp from "../Components/UpcomingWarp/UpcomingWarp";
import Welcome from "../Components/Welcome/Welcome";
import DashboardLayout from "../layout/DashboardLayout";

function DashboardHome() {
  return (
    <>
      <DashboardLayout>
        <Banner />
        <Header />
        <Navbar />
        <RecentCallSection />
        <StateTaskCall />
        <Stats />
        <MYTasks />
        <UpcomingWarp />
        <Welcome />
      </DashboardLayout>
    </>
  );
}

export default DashboardHome;
