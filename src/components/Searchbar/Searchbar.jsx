import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import {
  Header,
  InputSearchbar,
  FormSearchbar,
  IconSearch,
  SearchbarWrap,
  ButtonForm,
} from './Searchbar.styled';

const initialValues = { search: '' };
const schema = yup.object().shape({
  search: yup.string().required(toast('Уведіть запит, будь ласка :)')),
});

export const Searchbar = ({ handleSearchbar }) => {
  return (
    <Header>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSearchbar}
      >
        <FormSearchbar>
          <ButtonForm type="submit">
            <span>Search</span>
          </ButtonForm>

          <SearchbarWrap>
            <IconSearch />
            <InputSearchbar
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              name="search"
            />
          </SearchbarWrap>
        </FormSearchbar>
      </Formik>
    </Header>
  );
};

Searchbar.propTypes = {
  handleSearchbar: PropTypes.func.isRequired,
};
