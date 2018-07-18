import React from 'react';
import { Button } from 'reactstrap';

const HeadBanner = () => (
  <div className="banner">
    <div className="title-container">
      <h1>O'Resto</h1>
      <Button className="btn">Réservez votre table</Button>{' '}
    </div>
    <a className="fas fa-angle-down mx-auto" href="#presentation"><p></p></a>
  </div>
);


export default HeadBanner;
