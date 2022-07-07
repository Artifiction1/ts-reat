import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = ()=>{
    return (<Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://www.svgrepo.com/show/9708/rocket-ship.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        React Bootstrap
      </Navbar.Brand>
    </Container>
  </Navbar>)
}

export default NavBar