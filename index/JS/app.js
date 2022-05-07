import ReactDOM from 'react-dom';
import React, {Component} from "react";
import Singinform from './singin';



function App()
{
    return(
        <div className="form">
        <Singinform/>
              </div>
    )
}


ReactDOM.render(<App/>, document.getElementById("app"))