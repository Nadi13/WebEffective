import css from "./Line.module.scss";


interface LineInterface {
    light?: boolean
}

const Line = ({light = false}: LineInterface) => {

    return <>
        <div className={`${css.line} ${light ? css.light : css.dark}`}></div>
    </>
}

export default Line;