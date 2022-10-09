import { Component } from 'react';

import { InfinitySpin } from 'react-loader-spinner';

import InfiniteScroll from 'react-infinite-scroll-component';

import { imageSearch } from 'components/API/API';

import { Searchbar } from './Searchbar/Searchbar';

import { Imagegallery } from './ImageGalley/ImageGallery';

// import { LoadMore } from './LoadMore/LoadMore.styled';

import { Modal } from './Modal/Modal';

import { Modalpic } from './ModalPic/ModalPic';

import { Loader } from './Loader/Loader';

// import { MyLoader } from './Loader/Loader';

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

        {/* case with button "load more"  */}

        {/* {this.state.query && (
          <Imagegallery data={this.state.data} setLargeImg={this.setLargeImg} />
        )}

        {this.state.data.length > 0 && (
          <LoadMore type="button" onClick={this.loadMore}>
            Load more
          </LoadMore>
        )} */}

        {/* case with infinite scroll */}

        {this.state.query && (
          <InfiniteScroll
            dataLength={this.state.data.length}
            next={this.loadMore}
            hasMore={true}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <Imagegallery
              data={this.state.data}
              setLargeImg={this.setLargeImg}
            />
          </InfiniteScroll>
        )}

        {this.state.largeImg && (
          <Modal onClose={this.onModalClose}>
            <Modalpic path={this.state.largeImg} tag={this.state.query} />
          </Modal>
        )}

        {this.state.isLoaded && (
          // spinner
          <Loader>
            <InfinitySpin width="200" color="#4366c0" />
          </Loader>

          // sceleton
          // <MyLoader />
        )}
      </section>
    );
  }
}
