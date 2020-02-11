import React from 'react';
import './footer.css';
import { Icon,  Input } from 'antd';
import 'antd/dist/antd.css';





const Footer = () => {
     return <div className='container-fluid footer-bg'>
     <div className='row col cont'>
         <div className='col-md-5'>
         <div className='logo-footer'>
          <img className='logo-img' src='logo-light.png' />
         </div>
         <p className='logo-text logos'>rit in vulputate velit esse molestie consequat, vel illum dolore</p>
         <button className='btn read'>Read More  ></button>
         </div>

         <div className='col-md-3 contactus'>
          <h6 className='contact '>Contact Us</h6>
          <p className='logo-text'>774 NE 84th St Miami, FL 33879</p>
          <p className='logo-text'>Call us FREE +1 (800) 990 8877</p>
          <p className='logo-text'>office@example.com</p>
          <button className='btn read'>Contact Us  ></button>

         </div>

         <div className='col-md-4 newsletter'>
           <h6 className='contact'>Newsletter Subscribe</h6>
           <div className='row'>
            <Input placeholder="Enter your email" className='col  footer-input'/>
            <button className='footer-submit col btn'>Submit</button>
           </div>
           <p className='logo-text logos-text'>Don’t forget to follow us on:</p>
           <Icon type="twitter" className='brand'/> <Icon type="instagram" className='brand' /> <Icon type="facebook" className='brand'/>
         </div>
       </div>
       <div className='bottom container-fluid '>
       <div className='text-center copyright'>Copyright © Mikado Themes 2017 All Rights Reserved</div>
       </div>
            </div>
}
export default Footer ;
