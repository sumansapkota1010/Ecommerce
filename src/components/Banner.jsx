import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from "../assets/images/banner1.png"
import banner2 from "../assets/images/banner2.png"
import banner3 from "../assets/images/banner3.png"
import CarouselItem from './CarouselItem ';




const Banner = () => {




    return (

        <>
            <section>
                <Carousel showThumbs={false} swipeable={true} emulateTouch={true}>

                    <CarouselItem banner="bg-banner-1" />
                    <CarouselItem banner="bg-banner-2" />
                    <CarouselItem banner="bg-banner-3" />









                </Carousel>
                <div className='container'></div>
            </section>

        </>
    )
}

export default Banner