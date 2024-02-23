import {
  Avatar,
  DarkThemeToggle,
  Dropdown,
  Flowbite,
  Navbar,
} from "flowbite-react";
import { IoMdCart } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { useEffect, useState } from "react";


function Nav() {

  const [profile , setProfile] = useState([])
  const userId = localStorage.getItem('user_id')

  useEffect(()=>{
    fetch(`https://fruitables-api.onrender.com/user/data/${userId}`)
    .then(res => res.json())
    .then(data => setProfile(data))
  },[])



  const [user,setUser ] = useState('') 

  useEffect(() => {

    const token = localStorage.getItem("token");
    const user_id = localStorage.getItem("user_id");
    console.log(token, user_id);
    setUser(user_id)


  });

  const handleLogout = ()=>{

    fetch("https://fruitables-api.onrender.com/user/logout",{
      method: "GET",
      headers: {'content-type': 'application/json'}
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })

    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    window.location.reload();
  }

  const [navclicked , setnavClicked] = useState(true)
  const handleNavToggle = ()=>{
    setnavClicked(!navclicked)
  }


  return (
    <Navbar className="w-10/12 dark:bg-gray-600 mx-auto flex justify-between items-center">
      <Navbar.Brand to="/">
        <span className="self-center whitespace-nowrap font-semibold dark:text-white text-rose-600 text-3xl">
          <Link to={"/"}>FruitAbles</Link>
        </span>
      </Navbar.Brand>

      <div className="flex items-center md:order-2">
        <NavLink to={"/addtocart"}>
          <IoMdCart className="text-3xl mr-3" />
        </NavLink>
        {/* <div>
          <Flowbite>
            <DarkThemeToggle />
          </Flowbite>
        </div> */}
       {
        !user && <Link
        to={"/login"}
        className="flex font-semibold bg-blue-600 cursor-pointer p-2 rounded text-white gap-2"
      >
        <CiUser className="text-2xl" /> Sign In
      </Link> 
      }

    {
      user &&     
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
          <span className="block text-sm">{profile?.first_name} {profile?.last_name}</span>
          <span className="block truncate text-sm font-medium">
          {profile?.email}
          </span>
        </Dropdown.Header>
        <Dropdown.Item>
          {" "}
          <CiUser className="mr-2" /> <Link to={'/dashboard'}>Dashboard</Link>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
      </Dropdown>

    }
        <Navbar.Toggle onClick={handleNavToggle} />
      </div>

      <div className="md:flex hidden  gap-4 font-semibold">
        <NavLink to={"/shop"}>Shop</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </div>

      <div className={`absolute ${navclicked ? 'hidden': 'block'} w-9/12 top-16  bg-gray-200 md:hidden  gap-4 font-semibold`}>
        <NavLink className="block ml-2 w-full py-2 cursor-pointer" to={"/shop"}>Shop</NavLink>
        <NavLink className="block ml-2 w-full py-2 cursor-pointer" to={"/about"}>About</NavLink>
        <NavLink className="block ml-2 w-full py-2 cursor-pointer" to={"/contact"}>Contact</NavLink>
      </div>

    </Navbar>
  );
}

export default Nav;
