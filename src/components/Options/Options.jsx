import css from "./Options.module.css"
const Options = ({updateFeedback, totalFeedback, resetFeedback}) => {
  return (
    <ul className={css.listFeedback}>
        <li><button type="button" className={css.feedbackButton} onClick={()=> updateFeedback("good")}>Good</button></li>
        <li><button type="button" className={css.feedbackButton} onClick={()=> updateFeedback("neutral")}>Neutral</button></li>
        <li><button type="button" className={css.feedbackButton} onClick={()=> updateFeedback("bad")}>Bad</button></li>
        {totalFeedback > 0 && (<li><button type="button" className={css.feedbackButton} onClick={resetFeedback}>Reset</button></li>)}
    </ul>
  )
}

export default Options