import React from "react";
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../components/styles/Footer.css'
import LocationOnIcon from '@mui/icons-material/LocationOn'; 


function Footer() {
    return(
       

<div className="hoo">
    <div>
      <div className="fo">
        <p>CONNECT WITH US</p>
      </div>
      <div className="socialMedia">
               
                    <InstagramIcon/>
                    <TwitterIcon />
                    <YouTubeIcon />
                    <FacebookIcon />                   
        </div>
    </div> 
    <div>
        <div className="fo1">
            <p>FIND US HERE</p>
        </div>
        <div className='locc'>
            <LocationOnIcon/>
          <p>FIND AS ON GOOGLE</p>
      </div>
    </div>
     
</div>
  
         
    )
}

export default Footer;




