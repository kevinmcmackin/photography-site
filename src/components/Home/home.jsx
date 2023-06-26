import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import one from '../../assets/1.jpg';
import two from '../../assets/2.jpg';
import three from '../../assets/3.jpg';
import headshot from '../../assets/headshot.jpeg';
import './home.css'

function Home() {

    // to make the __ background the same witdth of my headshot
    window.onload = () => {
        const headshotImg = document.querySelector('.home__headshot-img');
        const headshotBackground = document.querySelector('.home__headshot-background');
        const headshotForeground = document.querySelector('.home__headshot-foreground');

        if (headshotImg && headshotBackground) {
            headshotBackground.style.maxWidth = `${headshotImg.offsetWidth}px`;
            headshotBackground.style.maxHeight = `${headshotImg.offsetHeight}px`;
            headshotForeground.style.maxWidth = `${headshotImg.offsetWidth}px`;
            headshotForeground.style.maxHeight = `${headshotImg.offsetHeight}px`;
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
    };

    return (
        <div className='home__wrap-div'>
            <section className='home__slider-wrap'>
                <Slider {...settings}>
                    <div>
                        <img src={one} alt="Image 1" className='home__slider-img' />
                    </div>
                    <div>
                        <img src={two} alt="Image 2" className='home__slider-img' />
                    </div>
                    <div>
                        <img src={three} alt="Image 2" className='home__slider-img' />
                    </div>
                </Slider>
            </section>
            <section className="home__me-wrap">
                <div className='home__headshot-div'>
                    <div className="home__headshot-wrapper">
                        <img src={headshot} alt="logo of man" className='home__headshot-img home__headshot-group' />
                        <div className='home__headshot-background home__headshot-group'></div>
                        <div className='home__headshot-foreground home__headshot-group'></div>
                    </div>
                </div>
                <div className="home__me-info-div">
                    <p className='home__me-name'>About Kevin</p>
                    <p>...who doesn't seem to believe that talking in the third person is weird or conceted/cliche</p>
                </div>
            </section>
        </div>
    );
}

export default Home;