import { StatisticsP } from "components/Feedback/Feedback.style";

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
      <div>
        <StatisticsP>good: {good}</StatisticsP>
        <StatisticsP>neutral: {neutral}</StatisticsP>
        <StatisticsP>bad: {bad}</StatisticsP>
        <StatisticsP>Total: {total}</StatisticsP>
        <StatisticsP>Positive feedback: {positivePercentage}%</StatisticsP>
      </div>
    );
  };
  