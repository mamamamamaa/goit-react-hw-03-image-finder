import PropTypes from 'prop-types';

export const Modalpic = ({ path, tag }) => {
  return <img src={path} alt={tag} />;
};

Modalpic.propTypes = {
  path: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};
