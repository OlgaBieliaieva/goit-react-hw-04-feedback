import React, { Component } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.string.isRequired,
    positivePercentage: PropTypes.string.isRequired,
  };

  render() {
    const statFields = Object.keys(this.props);

    return (
      <ul className={css.statList}>
        {statFields.map(field => {
          const fieldId = shortid.generate();

          return (
            <li key={fieldId}>
              {field !== 'positivePercentage'
                ? `${field[0].toUpperCase() + field.slice(1)}: ${
                    this.props[field]
                  }`
                : `Positive feedback: ${this.props[field]}%`}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Statistics;
