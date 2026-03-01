
import React from 'react'
import Link from '../link/link';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

class Header extends React.Component{
    constructor(){
        super();
        console.log("From constructor");
        this.state={
            name:"Esraa",
            job:"chemist"
        };
    }

    componentDidMount(){
        console.log("From componentDidMount");
    }
    
    componentDidUpdate(){
        console.log("From ComponentDidUpdate");
    }

    // componentWillUnmount(){
    //     console.log("From ComponentWillUnmount");
    // }
    
    changeNameAndJob = ()=>{
        this.setState({name:"Shams", job:"teacher"})
    }
    render(){
        console.log("From render");
        
        return (
            // <div>
            //     <h3 className='text-2xl'>Hello I'm a navbar class component</h3>
            //     <p>My name is {this.state.name} and I'm a/an {this.state.job}</p>
            //     <button class="bg-emerald-500 hover:bg-lime-300 focus:bg-lime-500 rounded-xl p-3 my-2 ..." onClick={()=>{this.changeNameAndJob()}}>Change Name and Job</button>
            //     <br /><br />
            //     <Link site="Google" href="https://www.google.com" name="Ahmed" job="Test Automation Engineer"/ >
            //     <Link site="Facebook" href="https://www.facebook.com" name="Ibrahim" job="Chemist"/>
            //     <Link site="Youtube" href="https://www.youtube.com" name="Mohammmed" job="Supervisor"/>
            //     <Link site="Twitter" href="https://www.twitter.com" name="Ismail" job="Frontend Development Engineer"/>
            // </div>


        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        );    
    }
}

export default Header;