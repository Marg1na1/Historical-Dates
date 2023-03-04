import { FC, useEffect, useState } from 'react';
import { EventsModel } from '../../models';
import { clsx } from 'clsx';
import style from './TimeStamp.module.scss';

const TimeStamp: FC<EventsModel> = ({ items }) => {

    const [timeStamp, setTimeStamp] = useState({ min: +items[0].date, max: +items[items.length - 1].date });

    //понимаю что это жесть, но делал на скорую руку. На всякий случай тут плавно меняются цифры точнее их значение
    useEffect(() => {
        if (+items[0].date > timeStamp.min && +items[items.length - 1].date > timeStamp.max) {
            setTimeout(() => setTimeStamp({ min: timeStamp.min + 1, max: timeStamp.max + 1 }), 20)
        } else if (+items[0].date < timeStamp.min && +items[items.length - 1].date < timeStamp.max) {
            setTimeout(() => setTimeStamp({ min: timeStamp.min - 1, max: timeStamp.max - 1 }), 20)
        } else if (+items[0].date !== timeStamp.min) {
            if (+items[0].date > timeStamp.min) {
                setTimeout(() => setTimeStamp({ min: timeStamp.min + 1, max: timeStamp.max }), 20)
            } else if (+items[0].date < timeStamp.min) {
                setTimeout(() => setTimeStamp({ min: timeStamp.min - 1, max: timeStamp.max }), 20)
            }
        } else if (+items[items.length - 1].date !== timeStamp.max) {
            if (+items[items.length - 1].date > timeStamp.max) {
                setTimeout(() => setTimeStamp({ min: timeStamp.min, max: timeStamp.max + 1 }), 20)
            } else if (+items[items.length - 1].date < timeStamp.max) {
                setTimeout(() => setTimeStamp({ min: timeStamp.min, max: timeStamp.max - 1 }), 20)
            }
        } else {
            null
        }
    }, [timeStamp, items])


    return (
        <div className={style['container']}>
            <h1 className={clsx(style['title'], style['title--violet'])}>{timeStamp.min}</h1>
            <h1 className={clsx(style['title'], style['title--purple'])}>{timeStamp.max}</h1>
        </div>
    );
}

export default TimeStamp;