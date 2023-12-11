import React from 'react';
import Navbar from '../components/Navbar';
import videoBg from '../video/videoBg.mp4';
import cocktailmakingclass from '../assest/cocktailmakingclass.jpeg';
import '../components/styles/Classes.css';
import humburger from '../assest/hamburger.jpg';
import LocationOnIcon from '@mui/icons-material/LocationOn'; 
import dsc1 from '../assest/dsc1.jpeg';
import dsc2 from '../assest/dsc2.jpeg';
import dsc3 from '../assest/dsc3.jpeg';
import Footer from '../components/Footer';

function Classes() {
  return (
    
    <div className='lie'>
  <Navbar />  

    <div className='clsv'>
  <video src={videoBg}autoPlay loop muted playsInline></video>
</div>
<div className='para'> 
<img
   src={cocktailmakingclass}
   alt='cock'/>
   
   <div className='cocop'>
    <p>Cooking and Cocktail Making Classes</p>
    <div className='che'>
      Check out the schedule for our cooking and cocktail making classes. 
        The classes are fun, educational, and a great way to improve your culinary touch.
        </div>
        <div className='incl'>
        Cooking class includes a chef guided 2 hour lesson, where you'll learn how to make 
        the masa for your tortillas from scratch. You will also learn how to make our 
        signature salsa roja and signature salsa verde from scratch. Lastly, our chef will 
        teach you how to marinate your proteins. You also get to enjoy 3 tacos and a cocktail
        once you've completed the lesson.
        </div> 
        <div className='mak'>
          Cocktail making class includes a guided 
        tequila and mezcal tasting. Our mixologist will teach you tips and tricks on how 
        to make the perfect margarita. You'll learn 3 variations of the Margarita cocktail. 
        You will also get to enjoy 3 tacos and a cocktail once you've completed the lesson.
        </div>
   </div>
   </div>

   
  <div className='belcomn'>
  <div
  className="cute"
  style={{ backgroundImage: `url(${humburger})` }}>  

    <h1>HOST WITH US</h1>
    <p>Baby Shower, Bachelorette Party, Birthday Celebration...
       and many more occasions that need to be celebrated. 
       Contact us to host a party at the restaurant.</p>
       <div className='clloc'>
       <button className='custom-button'>
        <LocationOnIcon/>
        <p>FIND US ON GOOGLE</p>
        </button>
      </div> 

       <div className='shower'> 
       <div className='fam'>
             <img src={dsc1} alt='dsc1'/>
       </div>
     <div className='par'>
      <img src={dsc2} alt='dsc2'/>
     </div>
    <div className='drin'>
   <img src={dsc3} alt='dsc3'/>
      </div> 
    </div>
    
    </div>
  </div>

<div className='inquiry'>
  <h1>SEND US YOUR INQUIRY</h1>
  <form className="full-width">
    <div className="input-row">
      <label htmlFor="name"></label>
      <input type="text" id="name" name="name" placeholder="Name" required />
      <label htmlFor="phone"></label>
      <input type="tel" id="phone" name="phone" placeholder="Phone" required />
    </div>
    <div className="input-column">
      <label htmlFor="email"></label>
      <input type="email" id="email" name="email" placeholder="Email" required />
    </div>
    <div className="input-column">
      <label htmlFor="message"></label>
      <textarea id="message" name="message" rows="4" placeholder="Message" required></textarea>
    </div>
    <input type="submit" value="Send" />
  </form>
</div>
<Footer />
  </div>
  
)
}

export default Classes;


