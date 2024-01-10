import css from './Button.module.scss'
import { FC } from "react";

interface ButtonInterface {
    text: string,
    imageSrc?: string;
}

const Button: FC<ButtonInterface> = ({text, imageSrc}) => {

    return <>
        <button className={css.button}>
            {text}
            {imageSrc && <img src={imageSrc} alt="иконка" />}
        </button>
    </>
}

export default Button;