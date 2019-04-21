import React from 'react';

class VideosList extends React.Component {

  renderVideos (){
    return this.props.videos.map(video => {
        console.log(video);
        return <div className="ui list" key={video.etag}>
                  <img src={video.snippet.thumbnails.default.url} alt='' />
                </div>
    });
  }
  render(){
    return (
            <div className="ui celled list">
              <div className="item">
                {this.renderVideos()}
              </div>
        </div>
    )

  }
}

export default VideosList;
