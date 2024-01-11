import css from './Header.module.scss'
import strings from '../../myTools/strings.tsx';

const Header = () => {
    return <>
        <header className = {css.header}>
            <div className={css.logo_block}>
                <div className={css.circle}>{strings.T}</div>
                <div className={css.light_text}>{strings.HealthCare}</div>
            </div>
            <nav className = {css.nav}> 
                <ul className = {css.ul}>
                <li><a href="" className = {css.selected}>{strings.Home}</a></li>
                <li><a href="" className = {css.a}>{strings.FindDoc}</a></li>
                <li><a href="" className = {css.a}>{strings.Apps}</a></li>
                <li><a href="" className = {css.a}>{strings.Testimonials}</a></li>
                <li><a href="" className = {css.a}>{strings.AboutUs}</a></li>
                </ul>
            </nav>
        </header>
    </>
}

export default Header;