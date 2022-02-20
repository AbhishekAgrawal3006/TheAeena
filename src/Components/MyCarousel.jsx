import React, {useState,useEffect} from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from 'mdb-react-ui-kit';

export default function MyCarousel(props) {
  return (
    <MDBCarousel showIndicators showControls interval={5000} className="carousel">
      <MDBCarouselInner className="carousel-inner">
        {props.li.map((val,index) => {
            return <MDBCarouselItem className={index===0?'active':'none'}>
          <MDBCarouselElement className="img-fluid" src={val} alt='...' />
        </MDBCarouselItem>
        })}
      </MDBCarouselInner>
    </MDBCarousel>
  );
}