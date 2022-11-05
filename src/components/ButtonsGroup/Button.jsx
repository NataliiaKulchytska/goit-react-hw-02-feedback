import PropTypes from 'prop-types';
import {CounterButton} from './Button.styled';

export const CounterButtons = ({ options, onLeaveFeedback }) => {
  return  Object.keys(options).map(option => (
      <CounterButton
      type='button'
      onClick={onLeaveFeedback(option)}
      key={option}>
        {option}
      </CounterButton>
   ))
  };

CounterButtons.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};