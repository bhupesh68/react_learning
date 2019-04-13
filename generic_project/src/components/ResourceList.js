import React from 'react';
import useResources from './useResources';

const ResourceList = ({resource}) => {
  //[] avoids infinite calls to API by calling inner function
  //only when value in second arguement with in useEffect changes
  //cant use async directly insise the inner functionm
  const resources = useResources(resource);
  return <div>
            <ul>
              {resources.map(record =>
                <li>
                {record.title}
                </li>)
              }
            </ul>
        </div>;
}
export default ResourceList;
  //componentDidMount(){
  //await always needs async function
  //componentDidMount called only once when the ResourceList component Did Mount
    //this.props.fetchResource();
    //axios always returns a response with a data property included
  //componentDidUpdate(prevProps){
  //   if(prevProps.resource !== this.props.resource){
  //     this.props.fetchResource();
  //   }
  // }
// const fetchResource = async (this.props.resource) => {
//   const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
// }
