import styled from 'styled-components';

export const SectionTitle = styled.h2`
  padding-bottom: ${props => props.theme.space[3]}px;
  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.l};
`;
