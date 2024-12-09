import logo from "../assets/Ely-Logo.png";

import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";



const Navbar = () => {
  return <nav className=" mb-20 flex items-center justify-between py-6">
    <div className='flex flex-shrink-0 items-center'>
        <img className=" mx-2 w-12" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href=""><FaLinkedin /></a>
        <a href="https://www.facebook.com/elymae.pascual.3?mibextid=ZbWKwL"><FaFacebook /></a>
        <FaSquareXTwitter />
        <FaInstagram />
    </div>
  </nav>
  
};

export default Navbar
