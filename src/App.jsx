import React, { Component } from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = e => {
    const { title } = e.target;
    this.setState(prevState => ({
      [title]: prevState[title] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    return result.toFixed();
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const result = (good * 100) / (good + neutral + bad);
    return result.toFixed();
  };

  render() {
    return (
      <main className="appContainer">
        <Section text="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleFeedback}
          ></FeedbackOptions>
        </Section>
        <Section text="Statistics">
          {Object.values(this.state).some(value => value > 0) ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification text="There is no feedback"></Notification>
          )}
        </Section>
      </main>
    );
  }
}

export default App;
