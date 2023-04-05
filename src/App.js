import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Container, Nav} from "react-bootstrap";
import "./App.css";
import { useState } from "react";
import { data } from "./data/data";
import Card from "./components/Card";

function App() {
  const [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>DETAIL</Nav.Link>
            <Nav.Link>Features</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          {/* <Card shoes={shoes[0]} i = {1} />
          <Card shoes={shoes[1]} i = {2} />
          <Card shoes={shoes[2]} i = {3} /> */}
          {shoes.map((a,i) => {
            return <Card shoes={shoes[i]} i = {i}/>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
