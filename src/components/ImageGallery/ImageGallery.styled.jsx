import styled from 'styled-components';

export const GalleryList = styled.ul`
  display: grid;
  align-items: center;
  gap: 1em;
  padding: ${p => p.theme.space[4]}px;
  grid-template-columns: repeat(4, 1fr);
`;
