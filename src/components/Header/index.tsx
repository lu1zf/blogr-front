import { Container, Content, Navbar, Headline } from "./styles";
import imgLogo from "../../assets/logo.svg";

export function Header(){
  return(
    <Container>
      <Content>
        <Navbar>
          <div className="left-items">
            <img src={imgLogo} alt="Blogr" />
            <div className="menu-links">
              <a href="">Product</a>
              <a href="">Company</a>
              <a href="">Connect</a>
            </div>
          </div>
          <div className="right-items">
            <button type="button">Login</button>
            <button type="button">Sign Up</button>
          </div>
        </Navbar>
        <Headline>
          <h1>A modern publishing platform</h1>
          <p>Grow your audience and build your online brand</p>
          <div className="action-buttons">
            <button type="button">Start for Free</button>
            <button type="button">Learn More</button>
          </div>
        </Headline>
      </Content>
    </Container>
  );
}