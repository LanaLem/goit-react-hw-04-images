import { Box } from '../../constants/Box';
import { SectionTitle } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <Box pb={4}>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
