import React, {useState} from 'react';
import {Slides} from './slides';
import {SliderDots} from './sliderDots';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import $ from 'jquery';
import './style.css';

const ImageSlider = ({slides}) => {

    const [current, setCurrent] = useState(0);
    const length = Slides.length;

    const handleClickNext = () => {
        // stopAutoPlay();
        nextSlide();
    }

    const handleClickPrev = () => {
        // stopAutoPlay();
        prevSlide();
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    // const autoPlay = () => {
    //     setInterval(nextSlide, 4000)
    // }

    // function stopAutoPlay () {
    //     clearInterval(autoPlay);
    // }

    console.log(current);

    if (!Array.isArray(Slides) || Slides.length <= 0) {
        return null;
    }

    return (
            <section className="slider">
                <div className="overlay">

                <FaArrowAltCircleLeft className="left-arrow" onClick={handleClickPrev}/>
                <FaArrowAltCircleRight className="right-arrow" onClick={handleClickNext} />

            {Slides.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            
                            {
                                index === current && (<img src={slide.image} alt="alt value" className="heroImage" />)
                            }

                        </div>
                        )

                    })
            }
                </div>
            </section>
    )
}

export default ImageSlider
