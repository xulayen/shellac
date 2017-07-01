import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BannerComponent} from '../BannerComponent';


class Cnt1RightComponent extends React.Component {
    //onclick="location.href='suc_result.html'"


   constructor(props){
       super(props);
   }



    render() {

        return (

            <input type="Submit" value="Submit" className="sub"/>


        )

    }

}

export { Cnt1RightComponent }