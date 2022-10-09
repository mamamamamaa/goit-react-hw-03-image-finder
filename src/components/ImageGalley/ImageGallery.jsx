import PropTypes from 'prop-types';
import { ImageGallery, GalleryItem } from './ImageGallery.styled';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const Imagegallery = ({ data, setLargeImg }) => {
  return (
    <ImageGallery>
      {data.length > 0 &&
        data.map(({ webformatURL, tags, id, largeImageURL }) => (
          <GalleryItem key={id} onClick={() => setLargeImg(largeImageURL)}>
            <ImageGalleryItem path={webformatURL} tag={tags} id={id} />
          </GalleryItem>
        ))}
    </ImageGallery>
  );
};

ImageGallery.propTypes = {
  setLargeImg: PropTypes.func,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ),
};
