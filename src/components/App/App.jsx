import { Box } from '../../constants';
import { GlobalStyle } from './App.styled';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import { ImageGallery } from '../../components/ImageGallery/ImageGallery';
import { Loader } from '../../components/Loader/Loader';
import { Button } from '../../components/Button/Button';
import { fetchGallery } from '../../services/galleryApi';
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export class App extends Component {
  state = {
    search: '',
    page: 1,
    gallery: [],
    status: Status.IDLE,
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.setState({ status: Status.PENDING });

      fetchGallery(search, page)
        .then(gallery => {
          if (gallery.length === 0) {
            this.setState({ status: Status.REJECTED });
            toast('Вибачте, немає зображень за Вашим запитом :(');
            return;
          }

          if (gallery.length > 0) {
            const galleryArray = gallery.map(
              ({ id, webformatURL, largeImageURL, tags }) => {
                return { id, webformatURL, largeImageURL, tags };
              }
            );

            this.setState(prevState => ({
              gallery: [...prevState.gallery, ...galleryArray],
              status: Status.RESOLVED,
            }));
          }
        })
        .catch(error => {
          this.setState({ status: Status.REJECTED });
          toast(error);
        });
    }
  }

  handleSearchbar = ({ search }, action) => {
    this.setState({
      search: search.trim(),
      page: 1,
      gallery: [],
      status: Status.IDLE,
    });

    action.resetForm();
  };

  handlePageChange = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { gallery, status } = this.state;
    return (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        pb={4}
      >
        <GlobalStyle />

        <Searchbar handleSearchbar={this.handleSearchbar} />
        <ImageGallery gallery={gallery} />
        {status === 'pending' && <Loader />}
        {status === 'resolved' && gallery.length % 12 === 0 && (
          <Button handlePageChange={this.handlePageChange} />
        )}
        <ToastContainer />
      </Box>
    );
  }
}
