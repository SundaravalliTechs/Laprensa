import './App.css';
import { Link } from "react-router-dom";
import Footer  from './components/Footer';
import Navbar from './components/Navbar';
import videoBg from './video/videoBg.mp4';
import Bowls from './assest/Bowls.jpg';
import Starters from './assest/Starters.jpg';  
import Tacos from './assest/Tacos.jpg';
import Q from './assest/Q.jpg';
import Enchukadas from './assest/Enchukadas.jpg';    
import Tamales from './assest/Tamales.jpg';
import Tapas from './assest/Tapas.jpg';
import Kids from './assest/Kids.jpg';
import Postres from './assest/Postres.jpg';
import Cocktails from './assest/Cocktails.jpg';
import BannerImage from './assest/Burger.jpg';
import charcuterieplate from './assest/charcuterieplate.jpg';
import maestrobox from './assest/maestrobox.jpg';
import tacobar from './assest/tacobar.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
    return(
        <div className='App'>
        <Navbar />  
    
        <div className='Main'>
      <video src={videoBg}autoPlay loop muted playsInline></video>
      
      <div className='img1'> 
      
      <div className='a'>
        <img src={Bowls}  alt="Background" />
        <p>BOWLS</p>
        <ul>
        <li>
          <Link to="/order now">ORDER NOW</Link>
        </li>
        </ul>
        
      </div>

      <div className='b'>
      <img src={Starters} alt="Background" />
      <p>STARTERS</p>
      <ul>
        <li>
          <Link to="/order now">ORDER NOW</Link>
        </li>
        </ul>
      </div>

      <div className='c'>
      <img src={Tacos} alt="Background" />
      <p>TACOS</p>
      <ul>
        <li>
          <Link to="/order now">ORDER NOW</Link>
        </li>
        </ul>
      </div>

      </div>

      <div className='img2'>

      <div className='d'>
      <img src={Q} alt="Background"/>
      <p>QUESADILLA</p>
      <ul>
      <li>
          <Link to="/order now">ORDER NOW</Link>
        </li>
        </ul>
      </div>

      <div className='e'>
      <img src={Enchukadas} alt="Background" />    
      <p>ENCHILADAS</p>
      <ul>
      <li>
          <Link to="/order now">ORDER NOW</Link>
        </li>
        </ul>
      </div>
      
      <div className='f'> 
      <img src={Tamales} alt="Background"/>
      <p>TAMALES</p>
      <ul>
      <li>
          <Link to="/order now">ORDER NOW</Link>
        </li>
        </ul>
      </div> 
      </div>

      <div className='img3'>

        <div className='g'>
      <img src={Tapas} alt='Tapas'/>
      <p>TAPAS</p>
      <ul>
      <li>
          <Link to="/order now">ORDER NOW</Link>
        </li>
        </ul>
      </div>

      <div className='h'>
      <img src={Kids} alt='Kids' />
      <p>KID'S MENU</p>
      <ul>
      <li>
          <Link to="/order now">ORDER NOW</Link>
        </li>
        </ul>
      </div> 
      </div>

      <div className='img4'>

        <div className='i'>
        <img src={Postres} alt='postres'/>
      
        <p>POSTRES</p>
        <ul>
      <li>
          <Link to="/order now">ORDER NOW</Link>
        </li>
        </ul>
        </div>

        <div className='j'>
        <img src={Cocktails} alt='cocktails'/>
       
        <p>COCKTAILS</p>
        <ul>
      <li>
          <Link to="/order now">ORDER NOW</Link>
        </li>
        </ul>
        </div>
      </div>

<div className='main1'>

      <div className='cook'>
         <h2>COOKING CLASSES</h2>
         <p>
            Please join a 2-hour cooking class hosted by Chef de Cuisine Tomas Lobato. 
            You’ll learn how to use a Prensa to make your tortillas, how to make 2 salsas
            from scratch, and what the secrets are to marinating your proteins perfectly. 
            Enjoy 3 tacos and a cocktail to finish off your class. $75 per person.
        </p>
      </div>


<div className='cocktail'>
  <h2>COCKTAIL MAKING CLASSES</h2>
  <p>
  Please join a 2 hour cocktail making class hosted by our house mixologist. The class 
  includes a tequila and mezcal tasting. You’ll learn how to make 3 margaritas from scratch. 
  Enjoy 3 tacos and a cocktail to finish off your class. $75 per person
  </p>

</div>

<div className='happy'>
  <h2>HAPPY HOUR</h2>
  <p>
  Join our Hora Feliz! Monday through Friday 4pm to 6pm.
   $3 CLASSIC TACOS 
   $4 DRAFT BEER
   $6 WHITE OR RED SANGRIA
   $8 CLASSIC MARGARITA
  </p>
</div>
<div className='to'>
  <h2>TO GO COCKTAILS</h2>
  <p>
  Virginia is for Drink Lovers!
Grab a cocktail to go!
Most popular options: Classic Margarita, Hibiscus Margarita, Blueberry Mojito
  </p>
</div>
</div>

  <div className='bur'>
  <div
  className="contain"
  style={{ backgroundImage: `url(${BannerImage})` }}>  

    <h1>ONLY THE BEST PARTIES HAVE TACOS & TAPAS</h1>
    <p>MOST POPULAR CATERING OPTIONS:</p>
    <Link>
    <button>VIEW CATERING MENU</button>
    </Link>
    <div className='back'>
      <div className='x'>
    <img src={charcuterieplate} alt='char'/>
      <p>CHARCUTERIEPLATE</p>
      </div>

      <div className='y'>
      <img src={maestrobox} alt='maestro'/>
      <p>MAESTROBOX</p> 
      </div>

      <div className='z'>
      <img src={tacobar} alt='taco'/>
       <p>TACOBAR</p> 
      </div>
      </div>  
    </div>
  </div>
  </div>

    
     <div className='app1'>
      <p>Follow Us On Instagram</p>
     </div>
     <div className="connect-button">
        <button>Connect</button>
      </div>
      <Footer />
     
      </div>
             
    )

}

export default App;




