import ReactDOM from 'react-dom';
import React, {Component} from "react";
import Singupform from './singup';



function App()
{
    return(
        <div className="form">
        <Singupform/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"))