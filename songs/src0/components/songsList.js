import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions';


class SongsList extends React.Component {
  renderList(){
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}><br />
          <div className="clearfix">{song.title}
            <button type="button" className="btn btn-primary float-right"
              onClick={() => this.props.selectSong(song)}>Select
            </button>
          </div>
        </div>);
    });
  }
  render (){
    //  console.log(this.props)
      return <div className="SongsList">{this.renderList()}</div>;
  }
}

//map all our data to properties and show inside the SongsList method above
const mapStateToProps = state => {
  return {songs:state.songs};
}

//connect is used to fetch data from the store/provider
export default connect(mapStateToProps, {selectSong})(SongsList);
