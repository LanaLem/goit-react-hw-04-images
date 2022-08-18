import { FeedbackName } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <li>
        <p>
          <FeedbackName>Good: </FeedbackName>
          {good}
        </p>
      </li>
      <li>
        <p>
          <FeedbackName>Neutral: </FeedbackName>
          {neutral}
        </p>
      </li>
      <li>
        <p>
          <FeedbackName>Bad: </FeedbackName>
          {bad}
        </p>
      </li>
      <li>
        <p>
          <FeedbackName>Total: </FeedbackName>
          {total}
        </p>
      </li>
      <li>
        <p>
          <FeedbackName>Positive feedback: </FeedbackName>
          {positivePercentage}%
        </p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
