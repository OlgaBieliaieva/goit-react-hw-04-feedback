import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ text, children }) => {
  return (
    <section className={css.sectionContainer}>
      <h1>{text}</h1>
      {children}
    </section>
  );
};

export default Section;

Section.propTypes = {
  text: PropTypes.string.isRequired,
};
