import styled from 'styled-components';
import { HiOutlineThumbUp } from 'react-icons/hi';

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
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: ${props => props.theme.fontWeights.bold};
`;

export const IconFeedback = styled(HiOutlineThumbUp)`
  margin-left: ${props => props.theme.space[2]}px;
  transition-duration: 500ms;
  transform: ${({ positive }) => {
    if (positive < 50) {
      return 'rotate(180deg)';
    }
    return 'rotate(0deg)';
  }};

  color: ${({ positive }) => {
    if (positive < 50) {
      return props => props.theme.colors.red;
    }
    return props => props.theme.colors.green;
  }};
`;
