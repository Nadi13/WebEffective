import css from './Button.module.scss'
import { FC } from "react";

interface ButtonInterface {
    text: string
}

const Button: FC<ButtonInterface> = ({text}) => {

    return <>
        <button className={css.button}>{text}</button>
    </>
}

export default Button;