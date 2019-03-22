import React from 'react';
import {connect} from 'react-redux';


{/*1. props = selected song
//2. destructure the entire props object and only use selectedsong component
and its its keys -.title and song.duration*/}
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

{/*in the below {} object, key - "selectedsong" is the prop that the connect
function will pass into the SongDetail function above as a prop  */}
const mapStateToProps = state => {
  return {selectedSong: state.selectedSong}; //must match with the combine reducer
}
{/*for connect, no need for class based component. Functional component is OK.
  2. no need to pass an action as SongDetail is rendering only when state updates*/}
export default connect(mapStateToProps)(SongDetail);
