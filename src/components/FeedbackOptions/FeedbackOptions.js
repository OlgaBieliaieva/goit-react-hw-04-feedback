import shortid from 'shortid';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const getBtnColor = title => {
    switch (title) {
      case 'good':
        return 'green';
      case 'neutral':
        return '#e0a607';
      case 'bad':
        return 'red';
      default:
        return 'red';
    }
  };

  return (
    <ul className={css.btnList}>
      {options.map(option => {
        const btnId = shortid.generate();

        return (
          <li key={btnId}>
            <button
              className={css.button}
              type="button"
              title={option}
              style={{ backgroundColor: getBtnColor(option) }}
              onClick={onLeaveFeedback}
            >
              {option.toUpperCase()}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
