import styled from 'styled-components';

export const Item = styled.li`
  height: 240px;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadow};
  cursor: pointer;
`;

export const Image = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: ${p => p.theme.radii.normal};

  &:hover,
  &:focus {
    box-shadow: ${p => p.theme.shadow};
  }
`;
