import css from './Button.module.scss'
import { FC } from "react";

interface ButtonInterface {
    text: string,
    imageSrc?: string;
    onClick?: ()=>void;
}

const Button: FC<ButtonInterface> = ({text, imageSrc, onClick}) => {

    return <>
        <button className={css.button} onClick={onClick}>
            {text}
            {imageSrc && <img src={imageSrc} alt="иконка" />}
        </button>
    </>
}

export default Button;