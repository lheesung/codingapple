import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import { useEffect, useState } from "react";
import { data } from "./data/data";
import Card from "./components/Card";
import Detail from "./routes/Detail"
import About from "./routes/About"
import { Route, Routes, Link, useNavigate, Outlet } from "react-router-dom";

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();
  useEffect(() => {
        console.log("dfghj");
  },data)
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>HOME</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>DETAIL</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg"></div>
            <div className="container">
              <div className="row">
                {shoes.map((a, i) => {
                  return <Card shoes={shoes[i]} i={i} />
                })}
              </div>
            </div>
          </>
        } />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} /> // url pramita
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;


{  
  /* 
  Nested Route
  <Route path="/about" element={<About />} >
    <Route path="member" element={<div>멤버들</div>} />
    <Route path="location" element={<div>회사위치</div>} />
  </Route> */}