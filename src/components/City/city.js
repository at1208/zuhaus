import React from 'react';
import './city.css';
import { Icon } from 'antd';
import 'antd/dist/antd.css';





const City = () => {
     return <div className='container-fluid'>
    <h2 className='text-center city-heading'>Select a city to begin exploring its neighborhoods</h2>
    <p className='text-center city-sub-heading'>Lorem ipsum dolor sit amet, atqui sanctus delectus in duo. Purto fuisset sed et.</p>
    <div className='container-fluid'>
     <div className='row col justify-content-center'>
         <div className='col-md-2 card city-container shadow'>
         <img className="city-img" src=' '/>
         </div>

         <div className='col-md-2 card city-container shadow'>
         <img className="city-img" src=' '/>

         </div>

         <div className='col-md-2 card city-container shadow'>
         <img className="city-img" src=' '/>

         </div>
         <div className='col-md-2 card city-container shadow'>
         <img className="city-img" src=' '/>

         </div>
         <div className='col-md-2 card city-container shadow'>
         <img className="city-img" src=' '/>

         </div>
       </div>
       </div>

  <div className='city-bg text-center'>
           <h1 className='text-center city-heading'>Special Offers Every Day</h1>
           <p className='text-center city-sub-heading'>Lorem ipsum dolor sit amet, atqui sanctus delectus in duo. Purto fuisset sed et.</p>
            <button className='btn search-button col-md-2 '>PURCHASE</button>
  </div>

  <div className='corousel'>
  <h2 className='text-center'>Special Offers Every Day</h2>
  <p className='special-offer text-center'>Lorem ipsum dolor sit amet, atqui sanctus delectus in duo. Purto fuisset sed et.</p>
  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
     <div className='row col justify-content-center'>
       <div className='col-md-3 text-center box1'>
         <img className=" " src="https://zuhaus.qodeinteractive.com/wp-content/uploads/2017/11/h1-testimonials-1.png" alt="First slide" />
         <p>"Duis autem vel eum iriure dolor in hendrerit in vulpu velit esse molestie conse quat, vel illum dolore blandit praesent lupta tum del enit augue dolore lorem litte rarum"</p>
       </div>
       <div className='col-md-3 text-center'>
         <img className=" " src="https://zuhaus.qodeinteractive.com/wp-content/uploads/2017/11/h1-testimonials-2.png" alt="First slide" />
         <p>"Duis autem vel eum iriure dolor in hendrerit in vulpu velit esse molestie conse quat, vel illum dolore blandit praesent lupta tum del enit augue dolore lorem litte rarum"</p>

       </div>
     </div>

    </div>
    <div className="carousel-item">
    <div className='row col justify-content-center'>
      <div className='col-md-3 text-center'>
        <img className=" " src="https://zuhaus.qodeinteractive.com/wp-content/uploads/2017/11/h1-testimonials-1.png" alt="First slide" />
        <p>"Duis autem vel eum iriure dolor in hendrerit in vulpu velit esse molestie conse quat, vel illum dolore blandit praesent lupta tum del enit augue dolore lorem litte rarum"</p>

      </div>
      <div className='col-md-3 text-center'>
        <img className=" " src="https://zuhaus.qodeinteractive.com/wp-content/uploads/2017/11/h1-testimonials-2.png" alt="First slide" />
        <p>"Duis autem vel eum iriure dolor in hendrerit in vulpu velit esse molestie conse quat, vel illum dolore blandit praesent lupta tum del enit augue dolore lorem litte rarum"</p>

      </div>
    </div>
    </div>
    <div className="carousel-item">
    <div className='row col justify-content-center'>
      <div className='col-md-3 text-center'>
        <img className=" " src="https://zuhaus.qodeinteractive.com/wp-content/uploads/2017/11/h1-testimonials-4.png" alt="First slide" />
        <p>"Duis autem vel eum iriure dolor in hendrerit in vulpu velit esse molestie conse quat, vel illum dolore blandit praesent lupta tum del enit augue dolore lorem litte rarum"</p>

      </div>
      <div className='col-md-3 text-center'>
        <img className=" " src="https://zuhaus.qodeinteractive.com/wp-content/uploads/2017/11/h1-testimonials-3.png" alt="First slide" />
        <p>"Duis autem vel eum iriure dolor in hendrerit in vulpu velit esse molestie conse quat, vel illum dolore blandit praesent lupta tum del enit augue dolore lorem litte rarum"</p>

      </div>
    </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
  </div>
            </div>
}
export default City ;
