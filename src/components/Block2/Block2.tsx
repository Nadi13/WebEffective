import css from './Block2.module.scss';
import strings from '../../myTools/strings.tsx';
import Line from '../Line/Line';
import BlockCard from '../BlockCard/BlockCard';
import Button from '../Button/Button';

const Block2 = () => {

    let card_data = [
        { id: 1, image: "/src/assets/Frame1.png", title: strings.SearchDoctor, text: strings.SearchDoctorDescription},
        { id: 2, image: "/src/assets/Frame2.png", title: strings.Online, text: strings.OnlineDescription},
        { id: 3, image: "/src/assets/Frame3.png", title: strings.Consultation, text: strings.ConsultationDescription},
        { id: 4, image: "/src/assets/Frame4.png", title: strings.Details, text: strings.DetailsDescription},
        { id: 5, image: "/src/assets/Frame5.png", title: strings.EmergencyCare, text: strings.EmergencyCareDescription},
        { id: 6, image: "/src/assets/Frame6.png", title: strings.Tracking, text: strings.TrackingDescription},
    ]

    return <>
        <div className = {css.container}>
            <div className = {css.textBlock}>
                <h1 className = {css.title}>{strings.Our}</h1>
                <div className = {css.divider}>
                    <Line/>
                </div>
                <p className = {css.text}>{strings.Text2}</p>
            </div>
            <div className={css.cards}>
                {card_data.map(({ id, image, title, text }) => (
                    <BlockCard key={id} image={image} title={title} text={text} />
                ))}
            </div>
            <div className={css.background}>       
                <img className={css.img} src='src/assets/Vector.png'></img>
                <img className={css.points} src='src/assets/five_points.png'></img>
            </div> 
            <div className={css.button}>
                <Button text={strings.LearnMore} />
            </div>
        </div>
    </>
}

export default Block2;