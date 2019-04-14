import React from 'react';

class SearchBar extends React.Component {
  state={term:''};

  onFormSubmit(event){
    event.preventDefault();
    this.props.onSSubmit(this.state.term); //difference bw function vs class props
  }

  render() {
    return (
      <div>
          <form onSubmit={e => this.onFormSubmit(e)} className="formgroup">
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
    );
  }
}
//value = state is controlled input
export default SearchBar;
