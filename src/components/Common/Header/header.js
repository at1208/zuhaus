import React, { useState } from 'react';
import './header.css';
import { Icon, Modal, Input , Checkbox, Select, Menu} from 'antd';
import 'antd/dist/antd.css';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';


const { Option } = Select;
const { SubMenu } = Menu;


const Header = () => {

const  handleClick = e => {
   console.log('click ', e);
 };

 const toggleValue = () => {
   if(menu){
     setMenu(false)
   }else{
     setMenu(true)
   }
 }

const [menu, setMenu] = useState(false)

const [buttonClick, setbuttonClick] = useState(false)
  function onPropChange(value) {
    console.log(`selected ${value}`);
  }

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' })
    const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })


if(isTabletOrMobile){
  return <div className='container-fluid header'>
        <div className=''>

            <div className='logo col row'>
              <Icon type="menu" className='menu-icon col-4' onClick={toggleValue}/>
              <div className='col-6'>
                 <Link to='/'><img className='logo-img text-center' src='logo-light.png' /></Link>
              </div>
            </div>
{menu && <Menu
onClick={handleClick}
style={{ width: 256 }}
// defaultSelectedKeys={['1']}
// defaultOpenKeys={['sub1']}
mode="inline"
>
<SubMenu
key="sub1"
title={
<span>

  <span className='navi'>ABOUT US </span>
</span>
}
>
<Menu.Item key="setting:1"><Link to='/aboutUs'>OUR SERVICES</Link></Menu.Item>
<Menu.Item key="setting:2"><Link to='/aboutUs'>OUR MISSION & VISION</Link></Menu.Item>
<Menu.Item key="setting:3"><Link to='/aboutUs'>OUR TEAM</Link></Menu.Item>
</SubMenu>
<SubMenu
key="sub2"
title={
<span>

  <span className='navi'>BUY</span>
</span>
}
>
<Menu.Item key="setting:1">RESIDENTIAL</Menu.Item>
<Menu.Item key="setting:2">COMMERCIAL</Menu.Item>
<Menu.Item key="setting:3">INDUSTRIAL</Menu.Item>
<Menu.Item key="setting:3">AGRICULTURE</Menu.Item>
</SubMenu>

<SubMenu
key="sub1"
title={
<span>

  <span className='navi'>LANDOWNERS</span>
</span>
}
>
 
</SubMenu>
</Menu>
}

        </div>
         </div>
} else return <div className='container-fluid header'>
           <div className='row col'>
               <div className='logo col-md-1'>
                 <Link to='/'><img className='logo-img' src='logo-light.png' /></Link>
               </div>
               <div className='buttons col-md-6 row'>

              <div className='col-3'>
              <Menu mode="horizontal">
              <SubMenu
              title={
              <span className=" ">
            ABOUT US
              </span>
              }
              >

              <Menu.Item key="setting:1"><Link to='/aboutUs'>OUR SERVICES</Link></Menu.Item>
              <Menu.Item key="setting:2"><Link to='/aboutUs'>OUR MISSION & VISION</Link></Menu.Item>
              <Menu.Item key="setting:3"><Link to='/aboutUs'>OUR TEAM</Link></Menu.Item>

              </SubMenu>

              </Menu>
              </div>


              <div className='col-3'>
              <Menu mode="horizontal">
              <SubMenu
              title={
              <span className="submenu-title-wrapper">

            BUY
              </span>
              }
              >
              <Menu.Item key="setting:1">RESIDENTIAL</Menu.Item>
              <Menu.Item key="setting:2">COMMERCIAL</Menu.Item>
              <Menu.Item key="setting:3">INDUSTRIAL</Menu.Item>
              <Menu.Item key="setting:3">AGRICULTURE</Menu.Item>
              </SubMenu>

              </Menu>
              </div>



              <div className='col-3'>
              <Menu mode="horizontal">
              <SubMenu
              title={
              <span className="submenu-title-wrapper">

        LANDOWNERS
              </span>
              }
              >

              </SubMenu>

              </Menu>
              </div>



               </div>
               <div className='login col'>
               <div className='add-listing-button float-right'>
                 <button className='add-listing btn'>Add Listing <i className='fas fa-plus plus-icon'></i></button>
                 <button className='btn user-login'  data-toggle="modal" data-target="#exampleModalCenter"><i className='fas user-login-icon'>&#xf007;</i></button>
               </div>
               </div>
           </div>
           <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
   <div className="modal-dialog modal-dialog-centered" role="document">
     <div className="modal-content">
       <div className="modal-header">
         <div className='col'>
           <button className='btn col-6 login-button' onClick={() => setbuttonClick(false)}>Login</button>
           <button className='btn col-6 register-button' onClick={() => setbuttonClick(true)}>Register</button>
         </div>
         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>
       <div class="modal-body">

{buttonClick===false && <div className=''>
         <div className='input-box text-center'>
         <Input placeholder='User Name' className='input-style'/>
         </div>
         <div className='input-box text-center'>
         <Input placeholder='Password' className='input-style'/>
         </div>

         <div className='padd-box'>
         <Checkbox>Remember me</Checkbox>
         </div>

         <div className='padd-box'>
         Lost Your Password?
         </div>

         <div className='text-center '>
        <button className='btn  btn-block sub-btn'>Submit</button>
         </div>

         <div className='text-center social padd-box'>
        <p>Connect with social network</p>
      <Icon type="facebook" className='padd-box fb-icon'/>
      <p>By creating an account you are accepting our Terms & Conditions</p>
       </div>
</div>}

{buttonClick && <div className='text-center'>
<div className='input-box'>
<Input placeholder='User Name' className='input-style'/>
</div>
<div className='input-box'>
<Input placeholder='Email' className='input-style'/>
</div>
<div className='input-box'>
<Input placeholder='Password' className='input-style'/>
</div>
<div className='input-box'>
<Input placeholder='Repeat Password' className='input-style'/>
</div>
<div className='input-box'>
<Select defaultValue="all location"   className='inputs input-style' onChange={onPropChange}>
<Option value="all location">Owner/Buyer</Option>
<Option value="chicago">Agent</Option>
<Option value="miami">Agency</Option>
</Select>
</div>

<div className='text-center input-box'>
<button className='btn  btn-block sub-btn'>Submit</button>
</div>
</div>
}
 </div>
     </div>
   </div>
 </div>
            </div>
}
export default Header;
