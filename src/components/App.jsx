import { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';

import { Imagegallery } from './ImageGalley/ImageGallery';

export class App extends Component {
  state = {
    query: null,
  };

  formData = query => {
    if (this.state.query !== query) {
      this.setState({ query: query });
    }
  };

  render() {
    return (
      <section>
        <Searchbar formData={this.formData} />
        {this.state.query && <Imagegallery query={this.state.query} />}
      </section>
    );
  }
}
