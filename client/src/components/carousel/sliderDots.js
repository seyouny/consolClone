import React, {useState} from 'react';
import {Slides} from './slides';
import './style.css';

export const SliderDots = ({slides}) => {

    const [current, setCurrent] = useState(0);
    const length = Slides.length;
    const dot = <div className="indicator"></div>;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    console.log(current);

    if (!Array.isArray(Slides) || Slides.length <= 0) {
        return null;
    }

    return (
            <section>

            {Slides.map((index) => {

                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>

                            {
                                index === current && (<div className="indicator">{index}</div>)
                            }
                        </div>
                        )

                })
            }


            </section>
    )
}
