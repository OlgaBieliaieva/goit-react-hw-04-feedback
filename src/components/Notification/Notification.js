import PropTypes from 'prop-types';
import css from './Notification.module.css';

const Notification = ({ text }) => {
  return (
    <>
      <p className={css.notification}>{text}</p>
    </>
  );
};

export default Notification;

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};
