import {useState, useEffect} from 'react';
import axios from 'axios';

const useResources = resource => {

  const [resources, setResources] = useState([]);

  useEffect(
    () => {//effect same as componentDidMount/componentDidUpdate
      (async resource => {
          const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

          setResources(response.data);
        }
      )(resource);
  },[resource])
  //[] avoids infinite calls to API by calling inner function
  //only when value in second arguement with in useEffect changes
  //cant use async directly insise the inner functionm
  return resources;

}

export default useResources;
