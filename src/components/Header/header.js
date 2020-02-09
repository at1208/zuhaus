import React from 'react';
import './header.css';
import { Icon } from 'antd';
import 'antd/dist/antd.css';





const Header = () => {
     return <div className='container-fluid header'>
           <div className='row'>
               <div className='logo'>
                <img className='logo-img' src='logo-light.png' />
               </div>
               <div className='buttons'>
                  <button className='btn header-button'>HOME</button>
                  <button className='btn header-button'>PAGES</button>
                  <button className='btn header-button'>LISTINGS</button>
                  <button className='btn header-button'>BLOG</button>
                  <button className='btn header-button'>SHOP</button>
                  <button className='btn header-button'>ELEMENTS</button>
               </div>
               <div className='add-listing-button'>
                 <button className='add-listing btn'>Add Listing <i className='fas fa-plus plus-icon'></i></button>
                 <button className='btn user-login'><i className='fas user-login-icon'>&#xf007;</i></button>

               </div>
           </div>
            </div>
}
export default Header;
