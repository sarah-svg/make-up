/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Display = ({ red, amber, green, onClick }) => (
  <div className="black-box" onClick={onClick} date-testid="  Red, Green, yellow">
    {/* <title>Light</title> */}
    <div className={`light ${red ? 'red' : 'inactive'}`} />
    <div className={`light ${amber ? 'amber' : 'inactive'}`} />
    <div className={`light ${green ? 'green' : 'inactive'}`} />
  Red

  </div>

);


Display.propTypes = {
  red: PropTypes.bool.isRequired,
  amber: PropTypes.bool.isRequired,
  green: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Display;
