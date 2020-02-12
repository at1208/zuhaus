import React from 'react';
import './aboutus.css';
import Header from '../../Common/Header/header';
import Footer from '../../Common/Footer/footer';
import { Icon } from 'antd';

const AboutUs = ({ match }) => {
  console.log(match)
  return <div>
        <Header />
        <div className=''>
        <img src='https://zuhaus.qodeinteractive.com/wp-content/uploads/2017/10/title-img-1.jpg' className='aboutus-header'/>
        </div>

        <div className='container about-info'>
          <div className='row col'>
            <div className='col-md-6'>
            <img src='https://zuhaus.qodeinteractive.com/wp-content/uploads/2017/10/about-img-1.jpg' className='about-img'/>
            </div>
            <div className='col-md-6'>
              <h1>About Zuhaus</h1>
              <p>Dignissim qui blandit praesent luptatum</p>
              <p>Ut wisi enim ad minim veniam,
              quis nostrud exerci tation ullamcorper suscipit
              lobortis nisl ut aliquip ex ea commodo consequat.
              Duis autem delenit augue duis dolore te feugait
              nulla facilisi. vel eum iriure dolor in hendrerit
              in vulputate velit esse molestie consequat. Duis
              autem vel eum iriure dolor in hendrerit in vulputate
              velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero accumsan et iusto
              odio dignissim qui blandit praesent.</p>

              <p>Nam liber tempor cum soluta nobis eleifend option
               congue nihil imperdiet doming id quod mazim placerat
               facer possim assum. Investigationes demonstraverunt
               lectores legere.</p>

            </div>
          </div>
        </div>

        <div className='container about-info'>
          <div className='row col'>
            <div className='col-md-6'>
              <img src='https://zuhaus.qodeinteractive.com/wp-content/uploads/2017/10/about-img-2.jpg' className='about-img'/>
            </div>
            <div className='col-md-6'>
            <h1>Our Vision. Our Feel For Good Offers.</h1>
            <p>Dignissim qui blandit praesent luptatum</p>
            <p>Ut wisi enim ad minim veniam,
            quis nostrud exerci tation ullamcorper suscipit
            lobortis nisl ut aliquip ex ea commodo consequat.
            Duis autem delenit augue duis dolore te feugait
            nulla facilisi. vel eum iriure dolor in hendrerit
            in vulputate velit esse molestie consequat. Duis
            autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis at vero accumsan et iusto
            odio dignissim qui blandit praesent.</p>

            <p>Nam liber tempor cum soluta nobis eleifend option
             congue nihil imperdiet doming id quod mazim placerat
             facer possim assum. Investigationes demonstraverunt
             lectores legere.</p>
            </div>
          </div>
        </div>

        <div className='team-box'>
        <h1 className='text-center'>Our Professional Team </h1>
        <p className='text-center'>Tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat</p>
        <div className='container team-member text-center'>
          <div className='row col justify-content-center'>
           <div className='col-md-2 each-member'>
            <img src='https://zuhaus.qodeinteractive.com/wp-content/uploads/2017/10/team-img-1.png'/>
            <h6>Charlie Morton</h6>
            <h6 className='designation'>Office Manager</h6>
              <div>
                 <Icon type="twitter" className='team-social'/>
                 <Icon type="instagram" className='team-social' />
                 <Icon type="facebook" className='team-social'/>
              </div>
           </div>

           <div className='col-md-2 each-member'>
            <img src='https://zuhaus.qodeinteractive.com/wp-content/uploads/2017/10/team-img-2.png'/>
            <h6>Samuel Tucker</h6>
            <h6 className='designation'>Sales Manager</h6>
              <div>
                 <Icon type="twitter" className='team-social'/>
                 <Icon type="instagram" className='team-social' />
                 <Icon type="facebook" className='team-social'/>
              </div>
           </div>


           <div className='col-md-2 each-member'>
            <img src='https://zuhaus.qodeinteractive.com/wp-content/uploads/2017/10/team-img-3.png'/>
            <h6>Candice Jefferson </h6>
            <h6 className='designation'>CEO Founder</h6>
              <div>
                 <Icon type="twitter" className='team-social'/>
                 <Icon type="instagram" className='team-social' />
                 <Icon type="facebook" className='team-social'/>
              </div>
           </div>

           <div className='col-md-2 each-member'>
            <img src='https://zuhaus.qodeinteractive.com/wp-content/uploads/2017/10/team-img-4.png'/>
            <h6>Enrique Hodges</h6>
            <h6 className='designation'>Operater</h6>
              <div>
                 <Icon type="twitter" className='team-social'/>
                 <Icon type="instagram" className='team-social' />
                 <Icon type="facebook" className='team-social'/>
              </div>
           </div>

           <div className='col-md-2 each-member'>
            <img src='https://zuhaus.qodeinteractive.com/wp-content/uploads/2017/10/team-img-5.png'/>
            <h6>Sophia Anderson</h6>
            <h6 className='designation'>Office Manager</h6>
              <div>
                 <Icon type="twitter" className='team-social'/>
                 <Icon type="instagram" className='team-social' />
                 <Icon type="facebook" className='team-social'/>
              </div>
           </div>
          </div>
        </div>
        </div>

        <div className='services-container container'>
        <h1 className='text-center'>Above the Crowd</h1>
        <p className='text-center'>Tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat</p>
         <div className='container'>
          <div className='row col justify-content-center'>
            <div className='col-md-4'>
            <img src='https://zuhaus.qodeinteractive.com/wp-content/uploads/2017/10/about-img-3.jpg' className='services'/>
            <h6 className='service-title'>Beyond the sale</h6>
            <p>Feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te odio dignissim qui blandit praesent.</p>
            </div>

            <div className='col-md-4'>
            <img src='https://zuhaus.qodeinteractive.com/wp-content/uploads/2017/10/about-img-4.jpg' className='services'/>
            <h6>Dedicated to results</h6>
            <p>Feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te odio dignissim qui blandit praesent.</p>
            </div>

            <div className='col-md-4'>
            <img src='https://zuhaus.qodeinteractive.com/wp-content/uploads/2017/10/about-img-5.jpg' className='services'/>
            <h6>Solutions made easy</h6>
            <p>Feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te odio dignissim qui blandit praesent.</p>
            </div>
          </div>
         </div>
        </div>
        <Footer />
         </div>
}

export default AboutUs;
