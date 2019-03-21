import React from 'react';
import ReactDOM from 'react-dom';
import './seasonv.css'

const seasonConfig = {
  summer: {
    text:"Drink chilled lassi",
    iconName:'sun'
  },
  winter: {
    text:"Hot Chocolate",
    iconName:'snowflake'
  }
};

const getSeason = (lat,month) => {
  if(month>2 && month<9) {
    return lat > 0? 'summer':'winter';
  }
  else {
    return lat > 0? 'winter':'summer';
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth())
  const {text, iconName} = seasonConfig[season];
  return (
      <div className={`season-display ${season}`}>
          <i className={`left-icon ${iconName} massive icon`}></i>
          <h1>{text}</h1>
          <i className={`right-icon ${iconName} massive icon`}></i>
      </div>
  );
};

export default SeasonDisplay;
