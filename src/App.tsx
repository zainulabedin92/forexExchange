import { useEffect, useState } from 'react';
import Footer from './views/shared/Footer';
import Header from './views/shared/Header';
import Sidebar from './views/shared/Sidebar';
import AppRoutes from './Routes/AppRoutes';

  const App: React.FC = () => {
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
     <AppRoutes />
    <Footer></Footer>
    </>
  )
}

export default App
