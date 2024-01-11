import css from './Footer.module.scss'
import strings from '../../myTools/strings.tsx';

const Footer = () => {
    return <>
        <footer className = {css.footer}>
        <div className={css.columns}>
                <div className={css.info}>
                    <div className={css.companyInfo}>
                        <div className={css.logo}>
                            <div className={css.logoCircle}>
                                <span className={css.logoLetter}>{strings.T}</span>
                            </div>
                            <span className={css.logoTitle}>{strings.HealthCare}</span>
                        </div>
                        <p className={css.textBlock}>{strings.Description}</p>
                    </div>
                    <span className={css.rights}>{strings.Info}</span>
                </div>
                <div className={css.column}>
                    <span className={css.title}>{strings.Company}</span>
                    <div className={css.text}>{strings.About}</div>
                    <div className={css.text}>{strings.Testimonials}</div>
                    <div className={css.text}>{strings.FindDoc}</div>
                    <div className={css.text}>{strings.Apps}</div>
                </div>
                <div className={css.column}>
                    <span className={css.title}>{strings.Region}</span>
                    <div  className={css.text}>{strings.Indonesia}</div>
                    <div className={css.text}>{strings.Singapore}</div>
                    <div className={css.text}>{strings.Hongkong}</div>
                    <div className={css.text}>{strings.Canada}</div>
                </div>
                <div className={css.column}>
                    <span className={css.title}>{strings.Help}</span>
                    <div className={css.text}>{strings.HelpCenter}</div>
                    <div className={css.text}>{strings.Contact}</div>
                    <div className={css.text}>{strings.Instructions}</div>
                    <div className={css.text}>{strings.Works}</div>
                </div>
            </div>
            <img className={css.pointsBg} src='src/assets/points_background2.svg'></img>
        </footer>
    </>
}

export default Footer;