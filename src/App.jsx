// import React, { Component } from 'react';
import { useState } from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

export default function App() {
  const [goodMark, setGoodMark] = useState(0);
  const [neutralMark, setNeutralMark] = useState(0);
  const [badMark, setBadMark] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const handleFeedback = e => {
    const { title } = e.target;

    switch (title) {
      case 'good':
        setGoodMark(state => state + 1);
        break;

      case 'neutral':
        setNeutralMark(state => state + 1);
        break;

      case 'bad':
        setBadMark(state => state + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const result = goodMark + neutralMark + badMark;
    return Number(result.toFixed());
  };

  const countPositiveFeedbackPercentage = () => {
    const result = (goodMark * 100) / (goodMark + neutralMark + badMark);
    return Number(result.toFixed());
  };

  return (
    <main className="appContainer">
      <Section text="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleFeedback}
        ></FeedbackOptions>
      </Section>
      <Section text="Statistics">
        {goodMark > 0 || neutralMark > 0 || badMark > 0 ? (
          <Statistics
            good={goodMark}
            neutral={neutralMark}
            bad={badMark}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification text="There is no feedback"></Notification>
        )}
      </Section>
    </main>
  );
}
