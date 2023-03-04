import { FC, useState } from 'react'
import { slides } from '../../data/slider.data';
import { Slider } from '../Slider';
import { TimeStamp } from '../TimeStamp';
import clsx from 'clsx';
import style from './Dates.module.scss';

const Dates: FC = () => {

    const [period, setPeriod] = useState(0)

    const arc = 2 * Math.PI * (1 / slides.length);

    const radius = 265;

    const renderMenu = slides.map((obj, i) => {

        const angle = i * arc;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return <li
            key={i}
            style={{ right: x + 22 + '%', bottom: y + 22 + '%' }}
            className={clsx(style['menu__item'], {
                [style['menu__item--active']]: period === i
            })}
        >
            <button onClick={() => setPeriod(i)}>
                <p>{i + 1}</p>
                <span>
                    {obj.title}
                </span>
            </button>
        </li>
    })

    const nextInterval = () => {
        if (period !== slides.length - 1) {
            setPeriod(prev => prev += 1)
        }
    }

    const prevInterval = () => {
        if (period !== 0) {
            setPeriod(prev => prev -= 1)
        }
    }

    return (
        <section className={style['root']}>
            <h1 className={style['title']}>Исторические даты</h1>
            <div className={style['circle']}>
                <ul className={style['container']}>
                    {renderMenu}
                    <TimeStamp {...slides[period]} />
                </ul>
            </div>
            <h1 className={style['data-period']}>{ }</h1> 
            <div className={style['progress']}>
                <p>0{period + 1} / 0{slides.length}</p>
                <div className={style['progress__btns']}>
                    <button className={clsx(style['progress__btn'], style['progress__btn--prev'], {
                        [style['progress__btn--disabled']]: period === 0
                    })} onClick={prevInterval}>
                        <svg width='10' height='14' viewBox='0 0 10 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M8.49988 0.750001L2.24988 7L8.49988 13.25' stroke='#42567A' strokeWidth='2' />
                        </svg>
                    </button>
                    <button className={clsx(style['progress__btn'], style['progress__btn--next'], {
                        [style['progress__btn--disabled']]: period === slides.length - 1
                    })} onClick={nextInterval}>
                        <svg width='10' height='14' viewBox='0 0 10 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M8.49988 0.750001L2.24988 7L8.49988 13.25' stroke='#42567A' strokeWidth='2' />
                        </svg>
                    </button>
                </div>
            </div>
            <Slider {...slides[period]} />
        </section >
    );
}

export default Dates