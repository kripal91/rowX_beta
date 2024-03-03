// Updated Navbar.js
import React, { useState } from "react";
import { FaHome,FaRegBookmark, FaRegHeart, FaBriefcase, FaUsers, FaNetworkWired } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { PiNotePencil } from "react-icons/pi";
import { TiTicket } from "react-icons/ti";
import { RiUserLine, RiMoreLine } from "react-icons/ri";
import { TbTargetArrow } from "react-icons/tb";
import { MdHomeFilled } from "react-icons/md";
import logo from "../images/logo.png"
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`container ${isMenuOpen ? "sidebar-open" : ""}`}>
      <div className="sidebar">
      <div className="LogoCont">
        <img src={logo} alt="logo"></img>
        </div> 
        <ul className="sidebar-links">
          <li>
            <NavLink to="/" className="link" activeClassName="active">
              <div className="links-div">
              <div className="NavIcon">
                <MdHomeFilled className="icon" />
              </div>
              <div className="Navname">Home</div>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Opportunities" className="link" activeClassName="active">
            <div className="links-div">
              <div className="NavIcon">
                <TbTargetArrow className="icon" />
              </div>
              <div className="Navname">Opportunities</div>
            </div>
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/Community" className="link" activeClassName="active">
            <div className="links-div">
              <div className="NavIcon">
                <FaUsers className="icon" />
              </div>
              <div className="Navname">Community</div>
            </div>
            </NavLink>
          </li> */}
          {/* <li>
            <NavLink to="/network" className="link" activeClassName="active">
            <div className="links-div">
              <div className="NavIcon">
                <FaNetworkWired className="icon" />
              </div>
              <div className="Navname">Network</div>
            </div>
            </NavLink>
          </li> */}
          <hr className="divider"></hr>
          <h2>You</h2>
          <li>
            <NavLink to="/Opportunities" className="link" activeClassName="active">
            <div className="links-div">
              <div className="NavIcon">
                <PiNotePencil className="icon" />
              </div>
              <div className="Navname">Registration</div>
            </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Opportunities" className="link" activeClassName="active">
            <div className="links-div">
              <div className="NavIcon">
                <HiOutlineUserGroup className="icon" />
              </div>
              <div className="Navname">Your Team</div>
            </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Opportunities" className="link" activeClassName="active">
            <div className="links-div">
              <div className="NavIcon">
                <TiTicket className="icon" />
              </div>
              <div className="Navname">Your Passes</div>
            </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Opportunities" className="link" activeClassName="active"
            >
            <div className="links-div">
              <div className="NavIcon">
                <FaRegBookmark className="icon" />
              </div>
              <div className="Navname" >Your Interest</div>
            </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Opportunities" className="link" activeClassName="active">
            <div className="links-div">
              <div className="NavIcon">
                <FaRegHeart className="icon" />
              </div>
              <div className="Navname">Saved</div>
            </div>
            </NavLink>
          </li>
        </ul>
        <div className="creator-card ">
        <h3>Become a Creator</h3>
        <p>It's eassy, we'll help you</p>
        <button>Create Opportunity</button>
      </div>
      <p>©️RowX 2024</p>
      </div>
      
      <div className="content">
        {/* Rest of your content goes here */}
      </div>
    </div>
  );
};

export default Navbar;
