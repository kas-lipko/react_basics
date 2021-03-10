import React from 'react';

class SearchBar extends React.Component {
  //controlled input
  state = { term: ''};

  onFormSubmit = event => {
    event.preventDefault();   //prevent form from automatically refresh the page

    //TODO: callback from parent component
    this.props.onFormSubmit(this.state.term)
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              //change the input into a controlled input
              value={this.state.term}
              onChange={event => this.setState({ term: event.target.value })}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
