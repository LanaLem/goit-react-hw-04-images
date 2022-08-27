import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';
import { Form, Field } from 'formik';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${p => p.theme.space[3]}px;

  background-color: ${p => p.theme.colors.pink};
`;

export const FormSearchbar = styled(Form)`
  width: 360px;
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

export const SearchbarWrap = styled.div`
  display: flex;
  width: 100%;
  border: 2px solid ${p => p.theme.colors.pink};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.white};
  &:hover,
  &:focus {
    border-color: ${p => p.theme.colors.darkPink};
  }
`;

export const IconSearch = styled(HiSearch)`
  font-size: 38px;
  color: ${p => p.theme.colors.pink};
  ${SearchbarWrap}:hover & {
    color: ${p => p.theme.colors.darkPink};
  }
  ${SearchbarWrap}:focus & {
    color: ${p => p.theme.colors.darkPink};
  }
`;

export const InputSearchbar = styled(Field)`
  width: 100%;
  padding: ${p => p.theme.space[3]}px;
  border: none;
  outline: none;
`;

export const ButtonForm = styled.button`
  padding: ${p => p.theme.space[3]}px;
  margin-right: ${p => p.theme.space[3]}px;
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
