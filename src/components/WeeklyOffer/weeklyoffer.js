import React from 'react';
import './weeklyoffer.css';
import { Icon, Select } from 'antd';
import 'antd/dist/antd.css';





const WeeklyOffer = () => {
     return <div className='container text-center'>
            <h2 className='text-center week-offer-heading'>Best Offers This Week</h2>
            <p className='text-center weekly-sub-heading'>Lorem ipsum dolor sit amet, atqui sanctus delectus in duo. Purto fuisset sed et.</p>
             <div className='container-fluid justify-content-center text-center'>
              <div className='row col '>

                <div className='col-sm-8'>
                    <img src='03.jpg' className='img-size'/>
                </div>

                <div className='col-sm-4'>
                <img src='04.jpg' className='img-size'/>
                </div>

              </div>
             </div>
            </div>
}
export default WeeklyOffer;
