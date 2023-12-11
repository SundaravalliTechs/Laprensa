import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import videoBg from '../video/videoBg.mp4';
import burritobox from '../assest/burritobox.jpeg';
import cuteburger from '../assest/cuteburger.jpg';
import '../components/styles/Catering.css';

function Catering() {
  return (
    <div>
      <Navbar />
      <div className='Main' style={{ position: 'relative' }}>
        <video src={videoBg} autoPlay loop muted playsInline style={{ width: '100%', height: 'auto' }}></video>
        <div className="order-button" style={{ 
          position: 'absolute', 
          top: '90%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#28A428',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '20px',
        }}>
          <button style={{ background: 'none', border: 'none', color: '#fff' }}>BEGIN ONLINE ORDERING</button>
        </div>
      </div>

      <div className='cont'>
        <div className='image-box'>
          <img
            src={burritobox}
            alt='burrito'
            style={{
              width: '600px',
              height: 'auto',
              marginTop: '200px',
              marginRight:'100px',
            }}
          />
        </div>
        <div className='text-box'>
          <h1>BURRITO BOX</h1>
          <div>Minimum order for</div>
          <p>Chicken or Steak, Garlic Rice,
            Black Beans, 
            Shredded Cheese, 
           Salsa Roja or Verde, Chips, 
           House Salsa, Guacamole,
           and Sour Cream on the side
         </p>
         <div className='bur'>
           <p>$10/per burrito *</p> 
          </div>
          <select className="select-dropdown">
            <option value="choose">Choose an option</option>
            <option value="mini">Minimum order for 10 people</option>
            <option value="10">10 people</option>
            <option value="15">15 people</option>
            <option value="20">20 people</option>
            <option value="25">25 people</option>
            <option value="30">30 people</option>
            <option value="35">35 people</option>
            <option value="40">40 people</option>
            <option value="45">45 people</option>
            <option value="50">50 people</option>
            <option value="55">55 people</option>
            <option value="60">60 people</option>
            <option value="65">65 people</option>
            <option value="70">70 people</option>
            <option value="75">75 people</option>
            <option value="80">80 people</option>
            <option value="85">85 people</option>
            <option value="90">90 people</option>
            <option value="95">95 people</option>
            <option value="100">100 people</option>
          </select>
         
        </div>
        </div>

        {/* <div className='cute-burger'>
        <img src={cuteburger}
        style={{
  
        }}
        > */}
<div className='cute-burger' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}> 
  <div style={{ 
  
  }}>
    <p style={{   textAlign: 'center', 
    fontSize: '50px',
    fontWeight: 'bold',
    marginTop: '70px' }}>STARTERS & SIDES</p>
    <h1 style={{
      fontSize: '30px'
    }}>Order the perfect crowd-pleasing spread for any occasion
24 hours advance notice to order</h1>
  </div>
  <img src={cuteburger} alt="Cute Burger" style={{ width: '100%', height: 'auto' }} />
</div>




      <Footer/>
    </div>
  
  );
}

export default Catering;