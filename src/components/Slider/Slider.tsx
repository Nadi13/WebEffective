import css from './Slider.module.scss';

const SliderPoints = (props: {num: number, numActive: number}) => {

    return <>
        <div className={css.points}>
            {
                Array.from({length: props.num}, (_, i) => 
                    <div className={`${css.point} ${props.numActive==i ? css.active : ''}`} key={i}></div>
                )
            }
        </div>
    </>
}

export default SliderPoints;