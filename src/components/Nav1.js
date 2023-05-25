import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import cart from "../image/cart.png"
import { loginTemp } from '../store/userloginSlice';
import { removeAll } from '../store/cartSlice';

function Nav1() {
  const items = useSelector((state) => state.cart);
  const login=useSelector((state)=>state.loginTemp);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout =()=>{
      localStorage.clear()
      dispatch(loginTemp(false))
      dispatch(removeAll([]))
      // window.location.reload()
      navigate('/')

  }   
  console.log("loginvalue ",login)
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          > <Link className="navLink mt-1" to="/">
          Product
      </Link>
      <Link className="navLink mt-1" to="/cart">
          Cart
      </Link>
      <span className="cartCount mt-1"><span><img src={cart} style={{width:'60px',height:'30px'}}/ ></span>Cart items: {items.length}</span>
            {/* <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link> */}
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
            

          </Nav>
          <Form className="d-flex">
          {
                    login?.login?<>
                    <Link to='/Dashboard'  className="navLink"><button style={{border:'1px solid #47A992',borderRadius:'25px',width:'100px',color:'white',backgroundColor:'#47A992',fontWeight:'bold',padding:'5px'}}>Dashboard</button></Link>
                    <button className='mx-2' onClick={logout} style={{border:'1px solid #47A992',borderRadius:'25px',width:'100px',color:'white',backgroundColor:'#47A992',fontWeight:'bold',padding:'5px'}}>Logout</button>

                    </>:<>
                    <Link to='/signup'  className="navLink"><button style={{border:'1px solid #47A992',borderRadius:'25px',width:'100px',color:'white',backgroundColor:'#47A992',fontWeight:'bold',padding:'5px'}}>Signup</button></Link>
                <Link to='/login'  className="navLink"><button style={{border:'2px solid #47A992',borderRadius:'25px',width:'100px',color:'#47A992',backgroundColor:'white',fontWeight:'bold',padding:'5px'}}>Login</button></Link>


                
                    </>
                }
                 {/* <Link className="navLink mt-1" to="/">
                    Product
                </Link>
                <Link className="navLink mt-1" to="/cart">
                    Cart
                </Link>
                <span className="cartCount mt-1"><span><img src={cart} style={{width:'60px',height:'30px'}}/ ></span>Cart items: {items.length}</span> */}
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav1