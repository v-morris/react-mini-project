import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    secrets: state.secrets
  }
}

const List = props => (
  <div>
  list
  <ul key={props.secrets._id}>
    {props.secrets.map(s => <li>{s.title}</li>)}
  </ul>
  </div>
)

export default connect(mapStateToProps)(List);