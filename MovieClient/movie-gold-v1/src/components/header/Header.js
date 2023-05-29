import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Button } from "react-bootstrap/Button";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {

    return(
    <Navbar bg="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/" style={{"color": 'gold'}}>
                <FontAwesomeIcon icon = {faVideoSlash}/>Gold

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll"/>
            <Navbar.Collapse id="mavbarScroll">
                <Nav className="me-auto my-2 my-lg-0"
                style={{maxHeight: '100px'}}>
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/watchList">Watch List</NavLink> 
                </Nav>
                <Button variant='outline-info' className='me-2'>Login</Button>
                <Button variant='outline-info' className='me-2'>Registration</Button>

            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default Header