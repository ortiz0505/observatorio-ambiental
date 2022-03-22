import React from 'react'
import  'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';

import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';

const carousel = () => {
  return (
    <div className='flex justify-center box-content w-3/5 p-5'>
      <Carousel autoPlay='true' infiniteLoop='true'>
        <div>
            <img src={img1} alt='slide1' />
        </div>
        <div>
            <img src={img2} alt='slide2'/>
        </div>
        <div>
            <img src={img3} alt='slide3'/>
        </div>
        <div>
            <img src={img4} alt='slide4'/>
        </div>
        <div>
            <img src={img3} alt='slide3'/>
        </div>
        <div>
            <img src={img4} alt='slide4'/>
        </div>
    </Carousel>
    </div>
  )
}

export default carousel