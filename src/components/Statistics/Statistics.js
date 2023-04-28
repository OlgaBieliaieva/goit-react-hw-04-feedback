import shortid from 'shortid';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({ ...props }) {
  const fields = Object.keys(props);

  return (
    <ul className={css.statList}>
      {fields.map(field => {
        const fieldId = shortid.generate();

        return (
          <li key={fieldId}>
            {field !== 'positivePercentage'
              ? `${field[0].toUpperCase() + field.slice(1)}: ${props[field]}`
              : `Positive feedback: ${props[field]}%`}
          </li>
        );
      })}
    </ul>
  );
}

Statistics.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired,
      positivePercentage: PropTypes.number.isRequired,
    })
  ),
};
