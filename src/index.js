import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import CartIcon from './components/CartIcon';
import Catering from './components/Catering';
import Classes from './components/Classes';
import Menu from './components/Menu';
import Ourteam from './components/Ourteam';
import Hours from './components/Hours';
import CustomItemPopup from './components/CustomItemPopup';

// const [isBackgroundColor, setIsBackgroundColor] = useState("white")

ReactDOM.render(
  <React.StrictMode>

  <Router>
          <CartProvider>      
      <Routes> 
      <Route exact path="" element={<App />} />
      <Route path='carticon' element={<CartIcon/>}/>
     <Route path="provider" element={<CartProvider/>}/> 
    <Route path="catering" element={<Catering/>}/> 
    <Route path='classes' element={<Classes/>}/>
    <Route path="menu" element={<Menu/>} />  
   <Route path="our-team" element={<Ourteam/>}/>
   <Route path="hours-location" element={<Hours/>}/>
     <Route path="/menu/:id" element={<CustomItemPopup/>} />
    
    {/* <Route path="/Laprensa/:id" component={<CustomItemPopup/>} />  */}

    </Routes>
   </CartProvider>       
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { CartProvider } from 'react-use-cart';
// import CartIcon from './components/CartIcon';
// import Catering from './components/Catering';
// import Classes from './components/Classes';
// import Menu from './components/Menu';
// import Ourteam from './components/Ourteam';
// import Hours from './components/Hours';


// function MainApp() {
// const [isColor,setIsColor] = useState(false)
// console.log(isColor)
//   return (
//     <div style={{backgroundColor:'grey'}}>

//       <Router>
//         <CartProvider>
//           <Routes>
//             <Route exact path="" element={<App />} />
//             <Route path='carticon' element={<CartIcon setIsColor={setIsColor} />} />
//              <Route path="provider" element={<CartProvider />} />
//             <Route path="catering" element={<Catering />} />
//             <Route path='classes' element={<Classes />} />
//             <Route path="menu" element={<Menu />} />
//             <Route path="our-team" element={<Ourteam />} />
//             <Route path="hours-location" element={<Hours />} />
//           </Routes>
//         </CartProvider>
//       </Router>
//     </div>
//   );
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <MainApp />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
