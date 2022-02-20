import React from "react"
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
  } from 'mdb-react-ui-kit';
function CarouselItem(props)
{
    return ( <div>
        <MDBCarouselItem>
            <MDBCarouselElement src={props.url} alt='...' key={props.index} className="img"/>
        </MDBCarouselItem>
    </div>)
}

export default CarouselItem