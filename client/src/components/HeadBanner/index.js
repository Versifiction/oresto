import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const HeadBanner = () => (
  <div className="banner">
    <div className="title-container">
      <h1>O'Resto</h1>
      <Button className="btn">Réservez votre table</Button>{' '}
    </div>
    <p><a className="fas fa-angle-down mx-auto" href="#presentation"></a></p>
  </div>
);

HeadBanner.propTypes = {};

export default HeadBanner;
