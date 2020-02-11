import React from 'react';
import './search.css';
import { Icon, Select } from 'antd';
import 'antd/dist/antd.css';




const { Option } = Select;

function onLocationChange(value) {
  console.log(`selected ${value}`);
}

function onPropChange(value) {
  console.log(`selected ${value}`);
}

const Search = () => {
     return <div className='container-fluid bg-image mkdf-row-grid-section-wrapper mkdf-parallax-row-holder' data-parallax-bg-image="https://zuhaus.qodeinteractive.com/wp-content/uploads/2017/10/h1-title-img.jpg" data-parallax-bg-speed="1">
               <div className='search'>
                 <span>
                 <h1 className='text-center search-heading'>Find the Best Places to Be</h1>
                 </span>
                 <div className='container float-right icons'>
                 <div className='row col'>
                   <div className='col-sm'>

                   </div>
                   <div className='col-sm'>

                   </div>
                   <div className='col-sm'>


                   </div>
                   <div className='col-sm'>


                   </div>
                   <div className='col-sm'>


                   </div>
                   <div className='col-sm'>
                 
                   </div>
                   </div>
                 </div>
               </div>

              <div>
              <div className='container-fluid  search-bar'>
                <div className='row col justify-content-center'>
                  <div className='col-md-4'>
                  <Select defaultValue="all location"   className='inputs' onChange={onLocationChange}>
                  <Option value="all location">All Locations</Option>
                  <Option value="chicago">Chicago</Option>
                  <Option value="miami">Miami</Option>
                  <Option value="new york">New York</Option>
                  <Option value="san diego">San Diego</Option>
                  <Option value="san francisco">San Francisco</Option>
                  </Select>
                  </div>

                  <div className='col-md-4'>
                  <Select defaultValue="all location"   className='inputs' onChange={onPropChange}>
                  <Option value="all location">All Properties</Option>
                  <Option value="chicago">For Rent</Option>
                  <Option value="miami">For Sale</Option>
                  <Option value="new york">Just Sold</Option>
                  </Select>
                  </div>


                   <button className='btn search-button col-md-2'>SEARCH</button>

                </div>
              </div>
            </div>
            </div>
}
export default Search;
