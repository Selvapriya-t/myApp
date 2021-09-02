import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'
import { FaUserMd } from 'react-icons/fa'
import { FaUserNurse } from 'react-icons/fa'
import { FaUserInjured } from 'react-icons/fa'
import { FaVial } from 'react-icons/fa'
import { RiBankCardFill } from 'react-icons/ri'
import { AiOutlinePoweroff } from 'react-icons/ai'
import { BiCalendarCheck } from 'react-icons/bi'
import physioApp_logo from '../Images/hospital.png';
import { FaUserShield } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md'
import {Nav, NavDropdown} from 'react-bootstrap';
import './dist/react-sidenav.css';
// import './menubar.css'
import './Nav.css';
import './menu.css'
import './../Navbar.css'
// Be sure to include styles at some point, probably during your bootstraping
// import '@trendmicro/react-sidenav/dist/react-sidenav.css';



const Navbars = (props) => {
  console.log('isAuthenticated' + props.isAuthenticated);
  return !props.isAuthenticated ? (
    <>

    </>
  ) : (
    
<div>
       <div className="login-main-header">
        <div className="login-top-header">
          <div>
            <img
              className="general_logo_login_page"
              src={physioApp_logo}
              alt="physio logo"
            ></img>
          </div>
          {/* <div>
            <img
              className="physio_logo_login_page"
              src={physio_logo}
              alt="Physio logo"
            ></img>
          </div> 
          */}

          <div className="login-welcome-main">
            <div className="welcome-text-top">HELLO PHYSIO</div>
          </div>
          </div>

         <div>
          <div className="app-menu">
            <ul>
              <li> 
              <a><FaHome size='30'/></a>
              </li>
              <li>
                <a><FaUserMd size='30'/></a>
                <ul>
                  <li>
                    <NavLink to="/AddDoc">
                      <span>ADD DOCTOR</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/ListDoc">
                      <span>DOCTOR LIST</span>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <a><FaUserNurse size='30' /></a>
                <ul>
                  <li>
                    <NavLink to="/AddStaff">
                      <span>ADD STAFF</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/ListStaff">
                      <span>STAFF LIST</span>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <a> <FaUserInjured size='30'/></a>
                <ul>
                  <li>
                    <NavLink to="/patient">
                      <span>ADD PATIENT</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/ListPatient">
                      <span>PATIENT LIST</span>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <a><BiCalendarCheck size='30'/></a>
                <ul>
                  <li>
                    <NavLink to="/Schedule">
                      <span>ADD APPOINTMENT</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/Listsched">
                      <span>APPOINTMENT LIST</span>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <a><FaVial size='30'/></a>
                <ul>
                  <li>
                    <NavLink to="/AddTest">
                      <span>ASSIGN TEST</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/ListTest">
                      <span>TEST LIST</span>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <a><RiBankCardFill size='30'/></a>
                <ul>
                  <li>
                    <NavLink to="/total">
                      <span>PAYMENT</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/Expense">
                      <span>EXPENSES</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/billing">
                      <span>RECEIPT</span>
                    </NavLink>
                  </li>
                </ul>
              </li>

            </ul>
            <a></a>
            <ul>

            </ul>
          </div>

          <div className="app-menu-right">
            <br />
            <FaUserShield size="30px" color="black" style={{ marginLeft: '580px' }} />
            <MdSettings size="30px" color="black" style={{ marginLeft:'25px' }} />
            <AiOutlinePoweroff size="30px" color="black" style={{ marginLeft:'15px' }} />
          </div>
        </div>
        <div>


</div>
</div>
      </div>
     








  );
};
export default Navbars;