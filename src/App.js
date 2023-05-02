import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import { useEffect, useState } from "react";
import { data } from "./data/data";
import Card from "./components/Card";
import Detail from "./routes/Detail"
import About from "./routes/About"
import { Route, Routes, Link, useNavigate, Outlet } from "react-router-dom";
import axios from "axios";
import Cart from "./routes/Cart";

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  useEffect(() => { // useEffect 는 랜더링이 다 끝난 후 실행됨.
    let t = setTimeout(() => {
      setAlert(false)
      console.log("uef")
    }, 2000)
    return () => { // unmount 시 실행.(mount 될 때는 안함)
      console.log("before execution")
      // 대게 기존 clean up function 을 작성
      clearTimeout(t);
    }
  }, [count]) // dependency: [] 안에 있는게 바뀔 떄 마다 실행됨. dependency 없으면 처음 한 번만(컴포넌트가 마운트 될 때)
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <button onClick={() => {
          axios.get('https://codingapple1.github.io/shop/data2.json').then((result) => {
            // console.log(result.data)
            let c = [...shoes,...result.data];
            setShoes(c);
          })
            .catch(() => {
              console.log('failed')
            })
        }}>누르시오</button>
        <Container>
          <Navbar.Brand>SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>HOME</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>DETAIL</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {count}
      {alert && <div>2초뒤에 없어져!!!!!</div>}
      <button onClick={() => { setCount(count + 1) }}>버튼</button>
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
        <Route path="/cart" element={<Cart></Cart>} />
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

  // axios.post('URL', {name : 'kim'}) -> post 요청
  // Promise.all( [axios.get('URL1'), axios.get('URL2')] ) -> url1, url2로 동시에 get 요청해줌.ㄴ