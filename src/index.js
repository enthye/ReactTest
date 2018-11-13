import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {Header} from "./components/header";
import {Home} from "./components/home"

class App extends Component {
    render() {
        return (
            <div className="container">
            
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <Header homeLink="Home"/>
                </div>  
            </div>
            
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <Home name={"Alt Name"} initialAge={12}>
                    </Home>
                </div>  
            </div>
                
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));