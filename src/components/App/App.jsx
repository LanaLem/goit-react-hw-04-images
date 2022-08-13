import { Box } from '../../constants'; 
import { GlobalStyle } from './App.styled';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { Notification } from 'components/Notification/Notification';
import React, { Component } from "react";
  
export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  leaveFeedback = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 }
    })
  };
  
  countTotalFeedback = (good, neutral, bad) => {
    return bad + good + neutral;
  };

  countPositiveFeedbackPercentage = (good, total) => {
    return Math.round((100/total)*good);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback(good, neutral, bad);
    const positiveFeedback = this.countPositiveFeedbackPercentage(good, total);

    return (
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" p={4}>
        <GlobalStyle />

        <Section title="Please leave the feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.leaveFeedback} />
        </Section>

        <Section title="Statistics">
          {total ?
            <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positiveFeedback} /> :
            <Notification message="There is no feedback"></Notification>
          }
        </Section>
      </Box>
    );
  }
}