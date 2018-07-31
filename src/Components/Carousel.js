import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import'react-responsive-carousel/lib/styles/carousel.min.css';
import 'tachyons';
import photo from '../Img/Carousel/CarImg1.jpg';
 
class ImageCarousel extends Component {
  render() {
    return (
      <div>
        <Carousel
          autoPlay = {true}
          showStatus = {false} 
          showArrows = {false} 
          showThumbs = {false}
          infiniteLoop = {true}
          stopOnHover = {false}
          interval = {5000}
          transitionTime = {450}
          >
          <div>
            <img src={photo} alt='img'/>
          </div>
          <div>
            <img src={photo} alt='img'/>
          </div>
          <div>
            <img src={photo} alt='img'/>
          </div>
        </Carousel>
      </div>
    );
  }
};

export default ImageCarousel;