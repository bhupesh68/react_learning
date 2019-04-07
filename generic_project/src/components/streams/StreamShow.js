import React from 'react';
import Thunk from 'redux-thunk';
import {connect} from 'react-redux';

import {fetchStream} from '../../actions';

const StreamShow = id => {
  return <div>StreamShow</div>
}

// const mapStateToProps = state => {
//   return {}
// }
//
// export default connect(mapStateToProps, {fetchStream})(StreamShow);
export default StreamShow;
