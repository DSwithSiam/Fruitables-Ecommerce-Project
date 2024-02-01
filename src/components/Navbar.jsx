import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { IoMdCart } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { CiUser } from "react-icons/ci";


function Nav() {
  return (
    <Navbar className="w-10/12 mx-auto flex justify-between items-center" >

      <Navbar.Brand to="/">
        <span className="self-center whitespace-nowrap font-semibold dark:text-white text-rose-600 text-3xl">
          <Link to={'/'}>E-shop</Link>
        </span>
      </Navbar.Brand>

      <div className="flex items-center md:order-2">
        <NavLink to={'/addtocart'}>
          <IoMdCart className="text-3xl mr-3" />
        </NavLink>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item> <CiUser className="mr-2" /> Profile</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>

      <div className="flex gap-4 font-semibold">
         <NavLink to={'/shop'}>Shop</NavLink>
         <NavLink to={'/about'}>About</NavLink>
         <NavLink to={'/contact'}>Contact</NavLink>
      </div>

    </Navbar>
  );
}

export default Nav;
