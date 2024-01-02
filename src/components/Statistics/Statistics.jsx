import css from './Statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {   
    return (
       
        <ul className={css.textList}>
            <li className={css.item}>
                <p className={css.text}>Good: { good }</p>
            </li>
            <li className={css.item}>
                <p className={css.text}>Neutral: { neutral }</p>
            </li>
            <li className={css.item}>
                <p className={css.text}>Bad: { bad }</p>
            </li>
            <li className={css.item}>
                <p className={css.text}>Total: { total }</p>
            </li>
            <li className={css.item}>
                <p className={css.text}>Positive feedback: { positivePercentage }%</p>
            </li>
        </ul>
    )
}


export default Statistics