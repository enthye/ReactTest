import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {Header} from "./components/header";
import {Home} from "./components/home"

class App extends Component {
    render() {
        var user = {
            name: "A name",
            hobbies: ["Sports"]
        };

        return (
            <div className="container">
            
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <Header/>
                </div>  
            </div>
            
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <Home name={"Alt Name"} age={12} user={user}>
                        <p>THIS is NOT a PaRaGrApH?!</p>
                    </Home>
                </div>  
            </div>
                
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));