import React, { Component } from "react";

// Components
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";

class AuthorList extends Component {
  state = {
    authors: this.props.authors
  };

  filterAuthors = query => {
    const filterAuthors = this.props.authors.filter(author =>
      `${author.first_name} ${author.last_name}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );
    this.setState({ authors: filterAuthors });
  };

  render() {
    const authorCards = this.state.authors.map(author => (
      <AuthorCard
        key={author.first_name + author.last_name}
        author={author}
        selectAuthor={this.props.selectAuthor}
      />
    ));

    return (
      <div className="authors">
        <h3>Authors</h3>
        <SearchBar filter={this.filterAuthors} />
        <div className="row">{authorCards}</div>
      </div>
    );
  }
}
export default AuthorList;
