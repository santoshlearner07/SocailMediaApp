import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";
import { Button } from "react-bootstrap";

function NavbarFile() {
  const { signInWithGithub, signOut, user } = useAuth();

  const userName = user?.user_metadata.user_name || user?.email;

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          Social <span style={{ color: "peru" }}>App</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to={"/"}>
              Home
            </Link>
            <Link className="nav-link" to={"/create"}>
              Create post
            </Link>
            <Link className="nav-link" to={"/communities"}>
              Communities
            </Link>
            <Link className="nav-link" to={"/comunity/create"}>
              Create Community
            </Link>
          </Nav>
          <div>
            {user ? (
              <div>
                {user.user_metadata.avatar_url &&(
                    <img src={user.user_metadata.avatar_url} alt="User Image" 
                    className="w-8 h-8 rounded_full object-cover"
                    />
                ) }
                <span>{userName}</span>
              <Button onClick={signOut} variant="danger">SignOut</Button>
              </div>
            ) : (
              <button onClick={signInWithGithub}>Sign In with github</button>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarFile;
