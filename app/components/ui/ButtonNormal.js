import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  css: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  name: PropTypes.string
};

const defaultProps = {
  name: 'Button'
};

const ButtonNormal = props => (
  <button className={props.css} onClick={props.action}>
    {props.name}
  </button>
);

ButtonNormal.propTypes = propTypes;
ButtonNormal.defaultProps = defaultProps;

export default ButtonNormal;
