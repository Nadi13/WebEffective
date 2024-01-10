import {useState } from 'react';
import css from './Block5.module.scss';
import strings from '../../myTools/strings.tsx';
import Line from '../Line/Line';

const Block5 = () => {

    const review_data = [
        {image: "/src/assets/user.png", name: strings.NameUser1, role: strings.Role, review: strings.Review1},
        {image: "/src/assets/user.png", name: strings.NameUser1, role: strings.Role, review: strings.Review2},
        {image: "/src/assets/user.png", name: strings.NameUser1, role: strings.Role, review: strings.Review3},
        {image: "/src/assets/user.png", name: strings.NameUser1, role: strings.Role, review: strings.Review4},
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const isLastSlide = currentIndex === review_data.length - 1;

    const handleNext = () => {
        setCurrentIndex(prevIndex => prevIndex < review_data.length - 1 ? prevIndex + 1 : prevIndex);
    };

    const handlePrev = () => {
        setCurrentIndex(prevIndex => prevIndex > 0 ? prevIndex - 1 : prevIndex);
    };

    return <>
        <div className = {css.container}>
            <img src="/src/assets/group_two.png" className={css.twoPoints}/>
            <div className = {css.wrapper}>
            <div className = {css.content}>
            <img src="/src/assets/group.png" className={css.threePoints}/>
                <div className = {css.title}>{strings.Review}</div>
                <div className = {css.divider}>
                        <Line light = {true}/>
                </div>
                <div className = {css.reviewBlock}>
                    <div className={css.imageUser}>
                        <img className={css.img} src={review_data[currentIndex].image}></img>
                    </div>
                    <div className={css.userInfo}> 
                        <div className={css.name}>{review_data[currentIndex].name}</div>
                        <div className={css.role}>{review_data[currentIndex].role}</div>
                    </div>
                    <div className={css.review}>{review_data[currentIndex].review}</div>
                </div>
            </div>
            <div className={css.controls}>
                <img src="/src/assets/arrow_left.png" alt="Previos" onClick={handlePrev} className={`${css.arrow} ${currentIndex === 0 ? css.disabled : ''}`}/>
                <div className={css.dots}>
                {review_data.map((_, index) => (
                    <div key={index} className={`${css.dot} ${index === currentIndex ? css.active : ''}`}></div>
                ))}
                </div>
                <img src="/src/assets/arrow_right.png" alt="Next" onClick={handleNext} className={`${css.arrow} ${isLastSlide ? css.disabled : ''}`}/>
            </div>
            </div>
        </div>
    </>
}

export default Block5;