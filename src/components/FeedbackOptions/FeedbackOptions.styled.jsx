import styled from 'styled-components';

export const FeedbackButtom = styled.button`
  padding: ${props => props.theme.space[3]}px;
  border: none;
  border-radius: ${props => props.theme.radii.normal};
  background-color: ${props => props.theme.colors.pink};
  box-shadow: ${props => props.theme.shadow};

  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition-duration: 250ms;
  }
`;
