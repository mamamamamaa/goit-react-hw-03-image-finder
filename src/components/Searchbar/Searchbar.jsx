import { BiSearch } from 'react-icons/bi';

import {
  SearchBar,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchBar>
      <SearchForm onSubmit={onSubmit}>
        <SearchFormButton type="submit">
          <BiSearch size={25} />
        </SearchFormButton>

        <SearchFormInput
          type="text"
          name="searchQuery"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchBar>
  );
};
