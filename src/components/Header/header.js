import React from 'react';
import './header.css';
import { Icon } from 'antd';
import 'antd/dist/antd.css';
import { useMediaQuery } from 'react-responsive';




const Header = () => {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' })
    const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })


if(isTabletOrMobile){
  return <div className='container-fluid header'>
        <div className='row col'>
            <div className='logo col-md-1'>
             <img className='logo-img' src='logo-light.png' />
            </div>
        </div>
         </div>
} else return <div className='container-fluid header'>
           <div className='row col'>
               <div className='logo col-md-1'>
                <img className='logo-img' src='logo-light.png' />
               </div>
               <div className='buttons col-md-6'>
                  <button className='btn header-button'>HOME</button>
                  <button className='btn header-button'>PAGES</button>
                  <button className='btn header-button'>LISTINGS</button>
                  <button className='btn header-button'>BLOG</button>
                  <button className='btn header-button'>SHOP</button>
                  <button className='btn header-button'>ELEMENTS</button>
               </div>
               <div className='login col'>
               <div className='add-listing-button float-right'>
                 <button className='add-listing btn'>Add Listing <i className='fas fa-plus plus-icon'></i></button>
                 <button className='btn user-login'><i className='fas user-login-icon'>&#xf007;</i></button>
               </div>
               </div>
           </div>
            </div>
}
export default Header;
