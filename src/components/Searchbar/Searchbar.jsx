import { Component } from 'react';
import PropTypes from 'prop-types';
import { BiSearch } from 'react-icons/bi';

import {
  SearchBar,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    input: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const query = evt.target.searchQuery.value;
    this.props.formData(query);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ input: '' });
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };
  render() {
    return (
      <SearchBar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <BiSearch size={25} />
          </SearchFormButton>

          <SearchFormInput
            type="text"
            name="searchQuery"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.input}
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchBar>
    );
  }
}

SearchBar.propTypes = {
  formData: PropTypes.func,
};
