import React from 'react';
import {connect} from 'react-redux';


//destructure the props.song property into song.title and song.duration
const SongDetail = ({selectedSong}) => {
  if (!selectedSong) {
    return <div><strong>select a song</ strong></div>;
  }
  return (
        <div>
             Title: {selectedSong.title}<br />
             Duration: {selectedSong.duration}
        </div>
  );
}

const mapStateToProps = state => {
  return {selectedSong: state.selectedSong};
}
export default connect(mapStateToProps)(SongDetail);
