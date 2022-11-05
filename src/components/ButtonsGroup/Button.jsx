import PropTypes from 'prop-types';
import {CounterButton} from './Button.styled';

export const CounterButtons = ({ options, onLeaveFeedback }) => {
  return  Object.keys(options).map(key => (
      <CounterButton
        type='button'
        onClick={onLeaveFeedback(key)}
        key={key}>
        {key}
      </CounterButton>
   ))
  };

CounterButtons.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};