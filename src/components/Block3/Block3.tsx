import css from './Block3.module.scss'
import strings from '../../myTools/strings.tsx';
import Line from '../Line/Line';
import Button from '../Button/Button';

const Block3 = () => {
    return <>
        <div className = {css.container}>
            <div className = {css.content}>
                <img className={css.threePage} src='src/assets/three_page.png'></img>
                <div className = {css.textBlock}>
                    <div className = {css.title}>{strings.Providers}</div>
                    <div className = {css.divider}>
                        <Line/>
                    </div>
                    <div className = {css.text}>{strings.Text3}</div>
                    <div className={css.button}>
                        <Button text={strings.LearnMore} />
                    </div>
                </div>
            </div>
            <img className={css.threePoints} src='src/assets/three_points.png'></img>
        </div>
    </>
}

export default Block3;