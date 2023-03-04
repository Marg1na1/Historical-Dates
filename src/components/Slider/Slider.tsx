import { FC } from 'react';
import { EventsModel } from '../../models';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import style from './Slider.module.scss';

const Slider: FC<EventsModel> = ({ items }) => {

    return (
        <>
            <Swiper
                className={style['slider']}
                spaceBetween={80}
                slidesPerView={3}
                modules={[Navigation]}
                navigation={{ nextEl: '.slider-next', prevEl: '.slider-prev' }}
            >
                {
                    items.map((obj, i) => (
                        <SwiperSlide key={i}>
                            <h2 className={style['date']}>{obj.date}</h2>
                            <p className={style['info']}>{obj.text}</p>
                        </SwiperSlide>
                    ))
                }
                <button
                    className='slider-next'>
                    <img src='src\assets\arrow.jpg' />
                </button>
                <button
                    className='slider-prev' >
                    <img src='src\assets\arrow.jpg' />
                </button>
            </Swiper>
        </>
    );
}

export default Slider;