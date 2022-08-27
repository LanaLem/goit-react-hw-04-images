import { LoadMore } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ handlePageChange }) => {
  return (
    <LoadMore type="button" onClick={handlePageChange}>
      Load more
    </LoadMore>
  );
};

Button.propTypes = {
  handlePageChange: PropTypes.func.isRequired,
};
