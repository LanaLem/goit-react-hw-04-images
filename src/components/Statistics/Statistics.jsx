import {
  FeedbackName,
  StatisticList,
  StatisticItem,
} from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticList>
      <StatisticItem>
        <FeedbackName>Good: </FeedbackName>
        {good}
      </StatisticItem>
      <StatisticItem>
        <FeedbackName>Neutral: </FeedbackName>
        {neutral}
      </StatisticItem>
      <StatisticItem>
        <FeedbackName>Bad: </FeedbackName>
        {bad}
      </StatisticItem>
      <StatisticItem>
        <FeedbackName>Total: </FeedbackName>
        {total}
      </StatisticItem>
      <StatisticItem>
        <FeedbackName>Positive feedback: </FeedbackName>
        {positivePercentage}%
      </StatisticItem>
    </StatisticList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
