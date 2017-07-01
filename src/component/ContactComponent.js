import React, { Component } from 'react';
import { Link  } from 'react-router-dom';

class ContactComponent extends React.Component {

    render() {

        return (

            <div>
                <Link to="/contactus">
                    Contact us |
                </Link>
                <a href="#">Privacy Policy | </a>
                <a href="#">
                    Terms & Conditions</a>
            </div>

        )

    }

}

export {ContactComponent}