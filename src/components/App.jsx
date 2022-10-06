import { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    query: null,
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const query = evt.target.searchQuery.value;
    this.setState({ query });
  };

  render() {
    return (
      <section>
        <Searchbar onSubmit={this.handleSubmit} />
      </section>
    );
  }
}
