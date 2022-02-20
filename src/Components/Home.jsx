import React from "react"
import IntroCarousel from "./IntroCarousel"
import ScrollAnimation from 'react-animate-on-scroll';

function Home()
{
    return (
        <div>
                <div id="section1">
                    {/* <Parallax strength={500}> */}
                    <ScrollAnimation delay={700} animateIn="fadeIn" animateOnce={true}>
                        <IntroCarousel/>
                    </ScrollAnimation>
                    {/* </Parallax> */}
                </div>
        </div>        
    )
}

export default Home