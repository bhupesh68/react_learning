import {useState, useEffect} from 'react';

export default () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
      window.navigator.geolocation.getCurrentPosition(
        position => setLat(position.coords.latitude),
        err => setErrorMessage(err.message) //no {} needed unlike setState
      );
    },[]);//since we didnt use componentDidUpdate, so empty is enough and componentDidUpdate
    // only causes infinite loop
  return {lat:lat, errorMessage:errorMessage} //the convention is to return array but object is better esp e.g. in future if you
  //also wanna return longitude
}
