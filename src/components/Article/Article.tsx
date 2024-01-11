import css from './Article.module.scss';
import strings from '../../myTools/strings.tsx';
import Line from '../Line/Line.tsx';
import BlockCardArticle from '../BlockCardArticle/BlockCardArticle.tsx';
import { useState } from 'react';
import Button from '../Button/Button.tsx';

const Block6 = () => {
    let card_data = [
        {image: "/src/assets/Article1.png", title: strings.ArtickeTitle1, text: strings.ArticleText1},
        {image: "/src/assets/Article2.png", title: strings.ArticleTitle2, text: strings.ArticleText2},
        {image: "/src/assets/Article3.png", title: strings.ArticleTitle3, text: strings.ArticleText3},
        {image: "/src/assets/Article1.png", title: strings.ArtickeTitle1, text: strings.ArticleText1},
        {image: "/src/assets/Article2.png", title: strings.ArticleTitle2, text: strings.ArticleText2},
        {image: "/src/assets/Article3.png", title: strings.ArticleTitle3, text: strings.ArticleText3},
    ]

    const articlesInRow = 3;
    const [isExpanded, setIsExpanded] = useState(false);

    const viewAllHandler = () => {
        setIsExpanded(!isExpanded);
    };

    const visibleCardItems = card_data.slice(0, isExpanded ? card_data.length : articlesInRow).map((item, i) => (
        <BlockCardArticle image={item.image} title={item.title} text={item.text} key={i} />
    ));

    return (
        <div className={css.container}>
            <div className={css.background}>
                <img className={css.points} src='src/assets/five_points.png'></img>
                <img className={css.img} src='src/assets/Vector2.png'></img>
            </div>
            <div className={css.textBlock}>
                <div className={css.title}>{strings.CheckArticle}</div>
                <div className={css.divider}>
                    <Line/>
                </div>
            </div>
            <div className={css.cards}>
                {visibleCardItems}
            </div>
            <div className={css.button}>
                <Button text={isExpanded ? 'Hide' : 'View all'} onClick={viewAllHandler} />
            </div>
            <img className={css.fivePoints} src='src/assets/five_points.png'></img>
        </div>
    );
}

export default Block6;