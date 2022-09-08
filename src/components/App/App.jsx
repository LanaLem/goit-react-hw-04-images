import { Box } from '../../constants';
import { GlobalStyle } from './App.styled';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import { ImageGallery } from '../../components/ImageGallery/ImageGallery';
import { Loader } from '../../components/Loader/Loader';
import { Button } from '../../components/Button/Button';
import { Modal } from '../Modal/Modal';
import { fetchGallery } from '../../services/galleryApi';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const App = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [gallery, setGallery] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [url, setUrl] = useState('');
  const [tags, setTags] = useState('');

  useEffect(() => {
    if (!search) return;

    setStatus(Status.PENDING);

    fetchGallery(search, page)
      .then(gallery => {
        if (gallery.length === 0) {
          setStatus(Status.REJECTED);
          toast('Вибачте, немає зображень за Вашим запитом :(');
          return;
        }

        if (gallery.length > 0) {
          const galleryArray = gallery.map(
            ({ id, webformatURL, largeImageURL, tags }) => {
              return { id, webformatURL, largeImageURL, tags };
            }
          );

          setGallery(prevState => [...prevState, ...galleryArray]);

          setStatus(Status.RESOLVED);
        }
      })
      .catch(error => {
        setStatus(Status.REJECTED);
        toast(error);
      });
  }, [search, page]);

  const handleSearchbar = ({ search }, action) => {
    setSearch(search.trim());
    setPage(1);
    setGallery([]);
    setStatus(Status.IDLE);

    action.resetForm();
  };

  const handlePageChange = () => {
    setPage(prevState => prevState + 1);
  };

  const openModal = (url, tags) => {
    setIsModalOpen(true);
    setUrl(url);
    setTags(tags);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      pb={4}
    >
      <GlobalStyle />
      <Searchbar handleSearchbar={handleSearchbar} />
      {gallery.length > 0 && (
        <ImageGallery gallery={gallery} openModal={openModal} />
      )}
      {status === 'pending' && <Loader />}
      {status === 'resolved' && gallery.length % 12 === 0 && (
        <Button handlePageChange={handlePageChange} />
      )}
      {isModalOpen && <Modal closeModal={closeModal} tags={tags} url={url} />}
      <ToastContainer />
    </Box>
  );
};
