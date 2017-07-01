import React, { Component } from 'react';


class HeaderComponent extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div>
                <div className="logo">Shell Anti-Counterfeit System</div>
                <div id="btn" className="btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div id="navbar" className="navbar">
                    <ul className="layer_clcik">
                        <li><a href="#">Understand label features</a></li>
                    </ul>
                </div>
            </div>

        )

    }
}

export {HeaderComponent};