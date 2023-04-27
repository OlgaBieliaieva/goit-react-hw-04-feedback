import React, { Component } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    }),
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  getBtnColor = title => {
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

  render() {
    const feedbackBtns = Object.keys(this.props.options);

    return (
      <ul className={css.btnList}>
        {feedbackBtns.map(item => {
          const btnId = shortid.generate();

          return (
            <li key={btnId}>
              <button
                className={css.button}
                type="button"
                title={item}
                style={{ backgroundColor: this.getBtnColor(item) }}
                onClick={this.props.onLeaveFeedback}
              >
                {item.toUpperCase()}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default FeedbackOptions;
