import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const HeadBanner = () => (
  <div className="banner">
    <div className="title-container">
      <h1>O'Resto</h1>
      <Link href="/reservation" to="/reservation"><Button className="btn">Réservez votre table</Button>{' '}</Link>
    </div>
    <a className="fas fa-angle-down mx-auto" href="#presentation"><p></p></a>
  </div>
);


export default HeadBanner;
