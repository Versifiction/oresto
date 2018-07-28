import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Avis extends Component {
    state = {
        avis: [],
    }

    componentDidMount() {
        fetch("/avis")
            .then(res => res.json())
            .then(avis => this.setState({ avis }));
    }

    render() {
        return (
            <div className="text-center container">
                <h2>Avis des clients</h2>
                {this.state.avis.map(opinion =>
                    <div>
                        <p>{opinion.name}</p>
                        <p>{opinion.avis}</p>
                    </div>
                )}
            </div>
        );
    }
}




export default Avis;
