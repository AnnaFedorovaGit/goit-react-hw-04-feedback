import FeedbackOptions from './components/Feedback/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';
import { Component } from 'react'

import css from './App.module.css'

class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0
	}

	onLeaveFeedback = (type) => {
		this.setState((prev) => ({
			[type]: prev[type] + 1,
		}));
	};

	countTotalFeedback = () => { 
		return this.state.good + this.state.neutral + this.state.bad;
    }
    
    countPositiveFeedbackPercentage = () => { 
		return Math.round((this.state.good * 100) / this.countTotalFeedback());
    }

	render() {
		return (
			<div className={css.wrapper}>
				<Section title={'Please leave your feedback:'}>
					<FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
				</Section>
				<Section title={'Statistics:'}>
					{this.countTotalFeedback() > 0 ?
						<Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}></Statistics> :
						<Notification message={'There is no feedback'}></Notification>}
				</Section>
			</div>
		)
	}
}


export default App