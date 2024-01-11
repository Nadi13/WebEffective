import css from './ForYou.module.scss'
import strings from '../../myTools/strings.tsx';

const Block1 = () => {
    return <>
        <div className = {css.container}>
            <img className={css.threePoints} src='src/assets/three_points.png'></img>
            <div className = {css.content}>
            <div className = {css.textBlock}>
                <div className = {css.title}>{strings.Virtual}</div>
                <div className = {css.text}>{strings.Text1}</div>
                <button className={css.buttonFilled}>{strings.Consult}</button>
            </div>
            <img className={css.mainPage} src='src/assets/main_page.png'></img>
            </div>

        </div>
    </>
}

export default Block1;
