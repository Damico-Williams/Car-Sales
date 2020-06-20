import React from 'react';
import { connect } from 'react-redux';
import {removeFeature} from '../actions';

const AddedFeature = props => {

  const handleChange = e => {
    e.preventDefault()
    props.removeFeature(props.feature)
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={handleChange} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

// const mapStateToProps = state => {
//   return {
//     name: state.car
//   }
// }
// getting state from AddedFeatures

export default connect(null, {removeFeature})(AddedFeature);
