import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../actions';

const AdditionalFeature = props => {

  const handleChanges = e => {
    e.preventDefault();
    props.addFeature(props.feature)
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={handleChanges} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// const mapStateToProps = state => {
//   return {
//     f
//   }
// } getting state from AddedFeatures

export default connect(null, {addFeature})(AdditionalFeature);
