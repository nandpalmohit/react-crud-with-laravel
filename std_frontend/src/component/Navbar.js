import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav-xl lt-bg-danger text-danger cn-left">
      <div className="brand">
        <a className="active-danger Sans bold-700 size-16">TopCollege.com</a>
      </div>
      <label htmlFor="navbarToggle" className="toggle">
        <i className="fas fa-grip-lines" aria-hidden="true"></i>
      </label>
      <input type="checkbox" id="navbarToggle" className="navbar-toggle" />
      <div className="navbar ">
        <Link
          to="/"
          className="btn cl-btn-danger ripple Sans small bold-600 mx1"
        >
          Home
        </Link>
        <Link
          to="/addstudent"
          className="btn cl-btn-danger ripple Sans small bold-600 mx1"
        >
          Add New Student
        </Link>
        <Link
          to="/viewstudent"
          className="btn cl-btn-danger ripple Sans small bold-600 mx1"
        >
          View New Student
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
