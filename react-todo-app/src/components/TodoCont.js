import { render } from "express/lib/response";
import React from "react";
class TodoCont extends React.Component {
    render(){
        return(
            <div>
                <h1>Hello from Create React App</h1>
                <p>I am in a React Component</p>
            </div>
        )
    }
};

export default TodoCont;