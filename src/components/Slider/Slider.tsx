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
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6 6L1 11" stroke="#3877EE" stroke-width="2" />
                    </svg>
                </button>
                <button
                    className='slider-prev' >
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6 6L1 11" stroke="#3877EE" stroke-width="2" />
                    </svg>
                </button>
            </Swiper>
        </>
    );
}

export default Slider;