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
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src={img2} alt='slide2'/>
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src={img3} alt='slide3'/>
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img src={img4} alt='slide4'/>
            <p className="legend">Legend 4</p>
        </div>
        <div>
            <img src={img3} alt='slide3'/>
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img src={img4} alt='slide4'/>
            <p className="legend">Legend 4</p>
        </div>
    </Carousel>
    </div>
  )
}

export default carousel