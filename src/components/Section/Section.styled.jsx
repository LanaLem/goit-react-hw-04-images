import styled from 'styled-components';

export const SectionWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-bottom: ${props => props.theme.space[2]}px; ;
`;

export const SectionTitle = styled.h2`
  padding-bottom: ${props => props.theme.space[3]}px;
  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.l};
`;
