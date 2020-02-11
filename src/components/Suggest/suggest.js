import React from 'react';
import './suggest.css';
import { Icon } from 'antd';
import 'antd/dist/antd.css';





const Suggest = () => {
     return <div className='container-fluid suggest-city'>
            <div className='row col justify-content-center text-suggestion'>
               <h3 className='text-center col-md-8'>Don’t see the city you were looking for? Help us out by suggesting!</h3>
               <button className='btn search-button col-md-2 text-center'>SUGGEST CITY</button>
            </div>
            </div>
}
export default Suggest ;
