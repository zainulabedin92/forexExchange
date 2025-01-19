
import { Route, Routes } from "react-router";
import { Route_Names } from "../Utilities/RoutesPath";
import Dashboard from "../views/components/Dashboard";
import Users from "../views/components/Users/Users";
import Login from "../views/components/Login";
function AppRoutes() {
    return (
        <Routes>
            <Route path={Route_Names.LOGIN} element={<Login />} />
            <Route path={Route_Names.BASE_PATH} element={<Login />} />
            <Route path={Route_Names.Home} element={<Dashboard />} />
            <Route path={Route_Names.USERS} element={<Users />} />             
        </Routes>
        
    )
}
export default AppRoutes;