import styled from 'styled-components';

export const Message = styled.p`
  color: ${props => props.theme.colors.darkRed};
  font-weight: ${props => props.theme.fontWeights.bold};
  text-shadow: ${props => props.theme.shadow};
`;
