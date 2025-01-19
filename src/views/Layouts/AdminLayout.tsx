import { useEffect, useState } from "react";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import Sidebar from "../shared/Sidebar";

const Dashboard = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  
    const toggleSidebar = () => {
      setIsSidebarVisible(!isSidebarVisible);
    };
  
    // Add or remove the toggle-sidebar class on body
    useEffect(() => {
      if (!isSidebarVisible) {
        document.body.classList.add('toggle-sidebar');
      } else {
        document.body.classList.remove('toggle-sidebar');
      }
    }, [isSidebarVisible]);
    return (
        <>
        <Header onToggleSidebar={toggleSidebar} />
              <Sidebar/>     
            <Footer></Footer></>
    )
}
export default Dashboard;