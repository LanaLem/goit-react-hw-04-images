import styled from 'styled-components';

export const Message = styled.p`
  color: ${props => props.theme.colors.red};
  font-weight: ${props => props.theme.fontWeights.bold};
  text-shadow: ${props => props.theme.shadow};
`;
