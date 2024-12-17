import { Link } from "react-router";

const Sidebar = () => {
    return(
    <>
    <aside id="sidebar"  className="sidebar" >

<ul  className="sidebar-nav" id="sidebar-nav">

  <li  className="nav-item">
    <Link to="Dashboard" className="nav-link">
    <i  className="bi bi-grid"></i>
      <span>Dashboard</span>
    </Link>
      
  </li> 

  <li  className="nav-item">
    <Link to="Users"  className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse">
      <i  className="bi bi-menu-button-wide"></i><span>All Clients</span>
    </Link>
  </li> 

  <li  className="nav-item">
    <a  className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
      <i  className="bi bi-journal-text"></i><span>Deposit Request</span>
    </a>
  </li> 

  <li  className="nav-item">
    <a  className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
      <i  className="bi bi-layout-text-window-reverse"></i><span>Withdrawl Request</span>
    </a>
  </li> 

  <li  className="nav-item">
    <a  className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
      <i  className="bi bi-bar-chart"></i><span>Deposit Setting</span><i  className="bi bi-setting ms-auto"></i>
    </a>
  </li> 

  <li  className="nav-item">
    <a  className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
      <i  className="bi bi-gem"></i><span>Icons</span><i  className="bi bi-chevron-down ms-auto"></i>
    </a>
    <ul id="icons-nav"  className="nav-content collapse " data-bs-parent="#sidebar-nav">
      <li>
        <a href="icons-bootstrap.html">
          <i  className="bi bi-circle"></i><span>Bootstrap Icons</span>
        </a>
      </li>
      <li>
        <a href="icons-remix.html">
          <i  className="bi bi-circle"></i><span>Remix Icons</span>
        </a>
      </li>
      <li>
        <a href="icons-boxicons.html">
          <i  className="bi bi-circle"></i><span>Boxicons</span>
        </a>
      </li>
    </ul>
  </li> 

  <li  className="nav-heading">Pages</li>

  <li  className="nav-item">
    <a  className="nav-link collapsed" href="users-profile.html">
      <i  className="bi bi-person"></i>
      <span>Profile</span>
    </a>
  </li> 

  <li  className="nav-item">
    <a  className="nav-link collapsed" href="pages-faq.html">
      <i  className="bi bi-question-circle"></i>
      <span>F.A.Q</span>
    </a>
  </li> 

  <li  className="nav-item">
    <a  className="nav-link collapsed" href="pages-contact.html">
      <i  className="bi bi-envelope"></i>
      <span>Contact</span>
    </a>
  </li> 

  <li  className="nav-item">
    <a  className="nav-link collapsed" href="pages-register.html">
      <i  className="bi bi-card-list"></i>
      <span>Register</span>
    </a>
  </li> 

  <li  className="nav-item">
    <a  className="nav-link collapsed" href="pages-login.html">
      <i  className="bi bi-box-arrow-in-right"></i>
      <span>Login</span>
    </a>
  </li> 

  <li  className="nav-item">
    <a  className="nav-link collapsed" href="pages-error-404.html">
      <i  className="bi bi-dash-circle"></i>
      <span>Error 404</span>
    </a>
  </li> 

  <li  className="nav-item">
    <a  className="nav-link collapsed" href="pages-blank.html">
      <i  className="bi bi-file-earmark"></i>
      <span>Blank</span>
    </a>
  </li> 

</ul>

</aside> </>)
}
export default Sidebar;