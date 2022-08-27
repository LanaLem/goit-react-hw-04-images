import { Item, Image } from './ImageGalleryItem.styled';
import { Modal } from '../Modal/Modal';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { isModalOpen } = this.state;
    const { src, url, tags } = this.props;
    return (
      <Item>
        <Image src={src} alt={tags} onClick={this.openModal} />
        {isModalOpen && (
          <Modal closeModal={this.closeModal} url={url} tags={tags} />
        )}
      </Item>
    );
  }
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
