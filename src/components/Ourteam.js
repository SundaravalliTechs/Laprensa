import React from 'react';
import Navbar from '../components/Navbar';
import table from '../assest/table.jpg';
import '../components/styles/Ourteam.css';
import Footer  from '../components/Footer';
import santhosh from '../assest/Santosh.jpeg';
import tomas from '../assest/tomas.jpg';
import Male from '../assest/Male.png';
import Malep from '../assest/Malep.png';


function Ourteam() {
  return (
    <div>
      <Navbar />
      <div className='ourt'>
        <img src={table} alt='tab' />
        <div className='team-text'>OUR TEAM</div>
      </div>
      <div className='team'>
      <h1>ABOUT US</h1>
      <p>We Believe that food is a conversation of life and want to recreate that dialogue through our ingredient-focused menu. Specializing in gourmet tacos, La Prensa offers an escape from the ordinary taco joint with an approachable and globally inspired menu featuring fresh ingredients with our signature adventurous mindset.
      The inspiration behind La Prensa came from studying the art and craft of the skilled cooks and chefs who have used the Prensa de Tortilla for generations. The skills they have passed down have allowed us to create delicious food that’s so freshly prepared it’s always Hot Off the Press.
      We’ve always believed that to create amazing tastes and flavors you only need a handful of fresh ingredients
      Whether you want tacos, tapas, or a little bit of both, we'll connect you with regional cuisine with an inspiring twist. We even provide the perfect complement to your meal with our exclusive bar program and its range of beers, wines, and freshly prepared cocktails.”</p>
    </div>


    <div className='santhocom'>
    <div className='santhoim'>
     <img src={santhosh} alt='santhosh'/>
     </div>
     <div className='tip'>
     <h1>Chef Santosh Tiptur</h1>
     <h2>Chef/Founder of The Conche and La Prensa Tacos and Tapas Bar</h2>
     <div >
     Born and raised in India, my passion for cooking was embedded during a young age helping my Mom. Studying culinary arts and specializing in bakery and confectionery technology, then pursuing a career in hospitality and working for the most prestigious establishments, working my way up to become Corporate Chef for leading hotels and Cruise lines.
     I have also always dreamed of opening up my own place someday. I came close several times to opening my own pastry shop or restaurant, but for some reason life always seemed to push me in another direction, and here I am with over three decades of experience having worked for some of the most luxurious brands and establishments with so much exposure and experience in regional and international cuisine . I have had the honor of traveling all over the world working with so many talented chefs and top hospitality leaders, and it’s exciting and almost surreal that it’s finally my time to shine as both the executive chef and owner.
     I am also so very humbled and honored to be able to share The Conche and La Prensa, my second restaurant, with everyone in the great state of Virginia, in Loudoun County, and beyond, and especially as a proud resident of Loudoun County I want La prensa as place where everyone can gather and enjoy our globally inspired tacos and tapas along with one of the best cocktail bar.
     </div>
    </div>
  
    </div>


    <div className='tomcom'>
      <div className='loca'>
    <h1>Tomas Lobato</h1>
    <h2>Chef de Cuisine</h2>
    <p>
    Tomas was born in Tlaxcala Mexico and raised by his mother and grandmother,
     which were a great influence in his career. “Everything I know about Mexican food is from them.
     I used to watch my mom and grandma prepare tacos, tamales, and many other delicious dishes from scratch. 
     All my love and passion for food comes from them. Please join us and let me introduce you to some of my 
     favorite dishes”. 
    </p>
    </div>
    <div className='tomimg'>
    <img src={tomas} alt='tomas'></img>
    </div>
    </div>


    <div className='malecom'>
      <div className='maleimg'>
        <img src={Male} alt='male'></img>
      </div>
      <div className='hanna'>
       <h1>Hannah Andrews</h1>
       <h2>General Manager</h2>
       <p>Hannah was born and raised in Virginia.
         She has always worked in the food industry and has made a passionate career out of it. 
         Starting off with her first job as a busser at Market Table Bistro in Lovettsville Va to
          a hostess at Travina Italian Kitchen in Leesburg Va, moving her way up to server and 
         catering manager and now her current position as a restaurant manager here with us at La Prensa. 
         She is always there to take care of others and be a team player so when you come to visit us we
         guarantee you’ll be in great hands.
</p>       
      </div>
    </div>

    <div className='samcome'>
    <div className='samaee'>
      <h1>Samet Yuksekgonul</h1>
      <h2>Managing Partner</h2>
      <p>
      Samet was born and raised in Offenbach, Germany. His family is originally from Turkey. 
      “Hospitality runs in my blood. I still remember all the family gatherings we had when I was a kid”.
       Samet has been in the hospitality industry for the past 15 years working at Co Co. 
       Sala, Bourbon Steak, Sotto, The Dupont Circle Hotel, and The Conche. “It’s my goal to make your
       experience memorable. You can grab food and drinks anywhere nowadays but the small details make the
       difference. Please join us and experience it yourself”.

      </p>
      </div>
      <div className='sam'>
        <img src={Malep} alt='malep'/>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default Ourteam;
