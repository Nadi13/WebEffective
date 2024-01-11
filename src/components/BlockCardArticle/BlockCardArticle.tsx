import css from './BlockCardArticle.module.scss'
import { FC } from "react";
import strings from '../../myTools/strings.tsx';

interface BlockCardArticleInterface {
    image: string,
    title: string,
    text: string
}

const BlockCardArticle: FC<BlockCardArticleInterface> = ({image, title, text}) => {

    return <>
        <div className={css.blockCard}>
            <div className={css.img}>
                <img src={image} className={css.imgArt} />
            </div>
            <div className={css.textBlock}>
                <div className={css.title}>{title}</div>
                <div className={css.text}>{text}</div>
                <button className={css.button}>
                    {strings.ReadMore}
                    <img src= "/src/assets/arrow_right.png" alt="иконка" />
                </button>
            </div>
        </div>
    </>
}

export default BlockCardArticle;