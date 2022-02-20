import React, {useEffect, useState} from 'react';
import UseStorage, {useStorageBytes} from './Firebase/UseStorage';
import MyCarousel from './MyCarousel';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from 'mdb-react-ui-kit';
import CarouselItem from './CarouselItem';
function IntroCarousel() {
  const [imgs,setImgs]=useState([]);
  const temp=UseStorage("carousel/");
  useEffect( () => {
    setImgs(temp);
  },[temp.length])
  return (
    <MyCarousel li={imgs}/>
  );
}
export default IntroCarousel