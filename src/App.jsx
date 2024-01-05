import FeedbackOptions from './components/Feedback/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';
import { useState } from 'react';

import css from './App.module.css'

const App = () => {

	const [score, setScore] = useState({
		good: 0,
		neutral: 0,
		bad: 0,
	});

	const onLeaveFeedback = (type) => {
		setScore((prev) => ({ ...prev, [type]: prev[type] + 1}));
	};

	const countTotalFeedback = () => { 
		return score.good + score.neutral + score.bad;
    }
    
    const countPositiveFeedbackPercentage = () => { 
		return Math.round((score.good * 100) / countTotalFeedback());
    }

	return (
		<div className={css.wrapper}>
			<Section title={'Please leave your feedback:'}>
				<FeedbackOptions options={Object.keys(score)} onLeaveFeedback={onLeaveFeedback} />
			</Section>
			<Section title={'Statistics:'}>
				{countTotalFeedback() > 0 ?
					<Statistics good={score.good} neutral={score.neutral} bad={score.bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}></Statistics> :
					<Notification message={'There is no feedback'}></Notification>}
			</Section>
		</div>
	)
}


export default App