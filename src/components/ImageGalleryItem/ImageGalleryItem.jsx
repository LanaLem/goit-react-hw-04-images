import { Item, Image } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ src, url, tags, openModal }) => {
  return (
    <Item>
      <Image src={src} alt={tags} onClick={() => openModal(url, tags)} />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
