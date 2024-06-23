import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
const NavLinkItem = ({ children, to }) => {
  return (
    <>
      <NavLink
        to={to}
        className={` no-underline hover:text-primary `}
      >
        {children}
      </NavLink>
    </>
  );
};
export default NavLinkItem;