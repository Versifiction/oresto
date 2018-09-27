import React from 'react';
import presentationImage from '../../images/presentation-image.jpeg';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Presentation extends React.Component {
  render() {
    return (
      <div id="presentation" className="presentation container text-center">
        <p>O'resto est un restaurant gastronomique situé en plein coeur de Paris. Composé de 3 salons, il vous propose trois univers
          différents pour passer un moment agréable autour des mets préparés par les chefs-cuisiniers et leur équipe.</p> 
        <div className="position-relative">
          <img className="presentation-image" href="/" src={ presentationImage } alt="presentation"/>
          <Link href="/menus" to="/menus"><Button className="btn presentation-btn position-absolute">Découvrez les menus</Button>{' '}</Link>
        </div>        
      </div>
    );
  }
}


export default Presentation;