import styled from 'styled-components';

export const LoadMore = styled.button`
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  border: none;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.pink};
  box-shadow: ${p => p.theme.shadow};
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.darkPink};
  }
`;
