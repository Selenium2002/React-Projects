
import React from 'react'

class Navbar extends React.Component{
    constructor(){
        super();
        console.log("From constructor");
    }

    componentDidMount(){
        console.log("From componentDidMount");
    }
    
    componentDidUpdate(){
        console.log("From ComponentDidUpdate");
    }

    componentWillUnmount(){
        console.log("From ComponentWillUnmount");
    }
    
    render(){
        console.log("From render");
        
        return (
            <div>
                <h3>Hello I'm a navbar class component</h3>

            </div>
        );    
    }

}

export default Navbar;