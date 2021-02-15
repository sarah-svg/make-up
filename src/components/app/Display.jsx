import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Display = ({ red, amber, green, onClick }) => (
  <div className="black-box" onClick={onClick}>
    <div className={`light ${red ? 'red' : 'inactive'}`} />
    <div className={`light ${amber ? 'amber' : 'inactive'}`} />
    <div className={`light ${green ? 'green' : 'inactive'}`} />
  </div>

);


Display.propTypes = {
  red: PropTypes.bool.isRequired,
  amber: PropTypes.bool.isRequired,
  green: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Display;
