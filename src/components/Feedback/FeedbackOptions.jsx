import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => { 
    
    const Option = () => { 
        return options.map((option, index) => (
            <li className={css.item} key={index}>
                <button className={css.btn} type='button' onClick={() => onLeaveFeedback(option)}>{ option }</button>
            </li>)
        )
    }

    return (
        <ul className={css.btnList}>
            <Option></Option>
        </ul>
    )
}


export default FeedbackOptions