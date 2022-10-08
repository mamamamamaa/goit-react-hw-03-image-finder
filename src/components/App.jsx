import { Component } from 'react';

import { InfinitySpin } from 'react-loader-spinner';

import { imageSearch } from 'components/API/API';

import { Searchbar } from './Searchbar/Searchbar';

import { Imagegallery } from './ImageGalley/ImageGallery';

import { LoadMore } from './LoadMore/LoadMore.styled';

import { Modal } from './Modal/Modal';

import { Modalpic } from './ModalPic/ModalPic';

import { Loader, MyLoader } from './Loader/Loader';

export class App extends Component {
  state = {
    data: [],
    page: 1,
    largeImg: '',
    query: '',
    isLoaded: false,
  };

  formData = query => {
    if (this.state.query !== query) {
      this.setState({ data: [], page: 1, query: query });
    }
  };

  componentDidUpdate = async (_, prevState) => {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.setState({ isLoaded: true });

      const responce = await imageSearch(this.state.query, this.state.page);

      this.setState(prevState => ({
        data: [...prevState.data, ...responce],
        isLoaded: false,
      }));
    }
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  setLargeImg = img => {
    this.setState({ largeImg: img });
  };

  onModalClose = () => {
    this.setState({ largeImg: '' });
  };

  render() {
    return (
      <section>
        <Searchbar formData={this.formData} />
        {this.state.query && (
          <Imagegallery data={this.state.data} setLargeImg={this.setLargeImg} />
        )}
        {this.state.data.length > 0 && (
          <LoadMore type="button" onClick={this.loadMore}>
            Load more
          </LoadMore>
        )}

        {this.state.largeImg && (
          <Modal onClose={this.onModalClose}>
            <Modalpic path={this.state.largeImg} tag={this.state.query} />
          </Modal>
        )}

        {this.state.isLoaded && (
          <Loader>
            <InfinitySpin width="200" color="#4366c0" />
          </Loader>
          // <MyLoader />
        )}
      </section>
    );
  }
}
