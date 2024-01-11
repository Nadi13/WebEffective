import css from './MobileApps.module.scss'
import strings from '../../myTools/strings.tsx';
import Line from '../Line/Line.tsx';
import Button from '../Button/Button.tsx';

const Block4 = () => {
    return <>
        <div className = {css.container}>
            <div className = {css.content}>
            <div className = {css.textBlock}>
                <h1 className = {css.title}>{strings.DownloadMobileApps}</h1>
                <div className = {css.divider}>
                        <Line/>
                </div>
                <p className = {css.text}>{strings.Text4}</p>
                <div className={css.button}>
                    <Button text={strings.Download} imageSrc = 'src/assets/arrow_to_down.png' />
                </div>
            </div>
            <img className={css.mainPage} src='src/assets/four_page.png'></img>
            </div>

        </div>
    </>
}

export default Block4;