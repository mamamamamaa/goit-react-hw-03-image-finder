import { Component } from 'react';

import { imageSearch } from 'components/API/API';

import { ImageGallery, GalleryItem } from './ImageGallery.styled';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class Imagegallery extends Component {
  state = {
    data: [],
    page: 1,
    largeImg: '',
  };

  componentDidMount = async () => {
    const responce = await imageSearch(this.props.query);
    this.setState({ data: responce });
  };

  componentDidUpdate = async (_, prevState) => {
    const responce = await imageSearch(this.props.query);
    if (prevState.data !== responce) {
      this.setState({ data: responce });
    }
  };

  render() {
    const { data } = this.state;
    return (
      <ImageGallery>
        {data.length > 0 &&
          data.map(({ webformatURL, tags, id }) => (
            <GalleryItem key={id}>
              <ImageGalleryItem path={webformatURL} tag={tags} id={id} />
            </GalleryItem>
          ))}
      </ImageGallery>
    );
  }
}
