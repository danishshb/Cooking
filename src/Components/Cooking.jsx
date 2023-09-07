import React from 'react';
import HeaderSec from './HeaderSec';
import Aboutus from './AboutUs';
import Foodgallery from './FoodGallery';
import Sepcialty from './Specialty';
import FooterSec from './FooterSec';

function cooking() {
  return (
  <div>
    {/* HeaderSec */}
    <HeaderSec />
    {/* About Us */}
      <Aboutus />
    {/* Food Gallery */}
      <Foodgallery />
    {/* Our Specialty */}
      <Sepcialty />
    {/* footer */}
      <FooterSec />
  </div>

  )
}

export default cooking