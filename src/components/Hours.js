import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../components/styles/Hours.css';
import LocationOnIcon from '@mui/icons-material/LocationOn'; 


function Hours() {
  return (
    <div>
      <Navbar /> 
      <div className='booth'>
         <div className='info'>
          <div className='location'>
            <h1>LOCATION</h1>
            <div>
              21305 Windmill Parc
              </div>
              <div>
               Dr. Unit 140 Sterling,
              </div>
              <div> VA, 20166
              </div>
            
          </div>
          <div className='hours'>
            <h1>HOURS</h1>
            <div>
              Monday - Thursday 11 am to 8.30 pm
              </div>
              <div>
              Friday - Saturday 11 am to 10 pm
              </div>
              <div>
              Sunday 11 am to 8 pm
            </div>
          </div> 
        </div>
      </div>
      <div className='horloc'>
        <button className='hor-button'>
        <LocationOnIcon/>
        <p>FIND US ON GOOGLE</p>
        </button>
      </div>
      <Footer/>
    </div>
    
  );
}

export default Hours;
