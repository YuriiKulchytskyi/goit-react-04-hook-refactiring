import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { useState } from 'react';
import { Container, Wrapper } from './Feedback.style';


export const Feedback = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleLeaveFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const positive = feedback.good;
    if (total === 0) {
      return 0;
    }
    return Math.round((positive / total) * 100);
  };

  const options = Object.keys(feedback);
  const total = countTotalFeedback();

  return (
    <>
      <Container>
        <Wrapper>
          <h2>Please leave feedback</h2>
          <FeedbackOptions options={options} onLeaveFeedback={handleLeaveFeedback} />
        </Wrapper>
        <Wrapper>
          <h2>Statistics</h2>
          {total === 0 ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistics
              good={feedback.good}
              neutral={feedback.neutral}
              bad={feedback.bad}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Wrapper>
      </Container>
    </>
  );
};


