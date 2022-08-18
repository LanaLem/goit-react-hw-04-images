import styled from 'styled-components';

export const StatisticList = styled.ul`
  display: flex;
  width: 360px;
  flex-direction: column;
`;

export const StatisticItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: ${props => props.theme.space[2]}px;

  &:hover,
  &:focus {
    outline: 2px solid ${props => props.theme.colors.pink};
    border-radius: ${props => props.theme.radii.normal};
  }
`;

export const FeedbackName = styled.span`
  font-weight: ${props => props.theme.fontWeights.bold};
`;
