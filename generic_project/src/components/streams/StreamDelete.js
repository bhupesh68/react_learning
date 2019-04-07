import React from 'react';
import Modal from '../Modal';
import history from '../../history';

const StreamDelete = props => {
  const actions = ( //react.fragment avoid extra div which helps render properly
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button className="ui button">cancel</button>
    </React.Fragment>
  )
  return (
      <div>
        StreamDelete
        <Modal
          title="Delete Stream"
          content="Are you sure?"
          actions={actions}
          onDismiss={()=>history.push('/')}
        />
      </div>
    );
}

export default StreamDelete;
