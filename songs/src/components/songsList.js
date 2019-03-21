import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions';


class SongsList extends React.Component {
  renderList(){
    return this.props.songs.map((song) => {
      return (
        <div key={song.title}>
          <div className="bg-info clearfix" >{song.title}
            <button type="button" className="btn btn-secondary float-right">Select
            </button>
          </div>
          <div ClassName="content">
          .
          </div>
        </div>);
    });
  }
  render (){
      return <div className="SongsList">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return {songs:state.songs};
}

export default connect(mapStateToProps, {selectSong})(SongsList);
