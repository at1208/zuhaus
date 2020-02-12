import React from 'react';
import './howitwork.css';
import { Icon,  Input } from 'antd';
import 'antd/dist/antd.css';





const HowItWork = () => {
     return <div className='container-fluid howitwork'>
     <div className='mkdf-process-holder text-center'>
          <h2 className='text-center see-how'>See How It Works </h2>
          <p className='text-center weekly-sub-heading'>Lorem ipsum dolor sit amet, atqui sanctus delectus in duo. Purto fuisset sed et.</p>
          <div className='row col justify-content-center'>
            <div className='col-md-3'>
            <img width="250" height="177" src="https://zuhaus.qodeinteractive.com/wp-content/uploads/2017/10/home-process-img-1.png" class="attachment-full size-full" alt="a" />
            <h6 className='img-heading'>Choose a Category</h6>
            <p>Feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent</p>
            </div>
            <div className='col-md-3'>
            <img width="250" height="177" src="https://zuhaus.qodeinteractive.com/wp-content/uploads/2017/11/home-process-img-2.png" class="attachment-full size-full" alt="a"/>
            <h6 className='img-heading'>Find Real Estate</h6>
            <p>Feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent</p>
            </div>
            <div className='col-md-3'>
            <img width="250" height="177" src="https://zuhaus.qodeinteractive.com/wp-content/uploads/2017/10/home-process-img-3.png" class="attachment-full size-full" alt="a" />
            <h6 className='img-heading'>Take the Keys</h6>
            <p>Feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent</p>
            </div>
          </div>
            </div>
                  </div>
}
export default HowItWork ;
