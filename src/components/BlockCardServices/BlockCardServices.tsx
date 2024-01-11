import css from './BlockCardServices.module.scss'
import { FC } from "react";

interface BlockCardInterface {
    image: string,
    title: string,
    text: string
}

const BlockCard: FC<BlockCardInterface> = ({image, title, text}) => {

    return <>
        <div className={css.blockCard}>
            <div className={css.img}>
                <img src={image} />
            </div>
            <div className={css.title}>{title}</div>
            <div className={css.text}>{text}</div>

        </div>
    </>
}

export default BlockCard;