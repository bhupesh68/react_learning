import React from 'react';

class SearchBar extends React.Component {
  state={term:''};

  onFormSubmit(event){
    event.preventDefault();
    this.props.onSSubmit(this.state.term); //difference bw function vs class props
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <form onSubmit={e => this.onFormSubmit(e)} className="form-group">
            <label>Image Search</label>
            <input
              type="text" className="form-control"
              id="SearchInput"
              value={this.state.term}
              onChange={e => this.setState({term:e.target.value})}
              >
            </input>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
