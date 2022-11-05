import PropTypes from 'prop-types';
import {Stats, StatsInfo } from './Statistics.styled';


export const Statistics = ({good, neutral, bad, total, positiveFeedback }) => {
    return (       
            <Stats>
                <StatsInfo>Good: {good}</StatsInfo>
                <StatsInfo>Neutral: {neutral}</StatsInfo>
                <StatsInfo>Bad: {bad}</StatsInfo>
                <StatsInfo>Total: {total}</StatsInfo>
                <StatsInfo>Positive feedback: {positiveFeedback} %
                </StatsInfo>
            </Stats>
        )
          };

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback:PropTypes.number.isRequired,
}