import { ButtonList, Button } from 'components/Feedback/Feedback.style';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ButtonList>
        {options.map(option => (
          <Button key={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </Button>
        ))}
      </ButtonList>
    </>
  );
};
