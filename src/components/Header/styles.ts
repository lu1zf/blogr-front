import styled from 'styled-components';
import imgHeader from '../../assets/bg-pattern-intro-desktop.svg';
import imgArrow from '../../assets/icon-arrow-light.svg';

export const Container = styled.header`
  background: rgb(255,143,112);
  background: linear-gradient(130deg, rgba(255,143,112,1) 20%, rgba(255,61,84,1) 65%);
  background-image: url(${imgHeader}), linear-gradient(130deg, rgba(255,143,112,1) 20%, rgba(255,61,84,1) 65%);
  height: 600px;
  background-position: 26% 52%; 
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: 230%; /* Resize the background image to cover the entire */
  border-radius: 0 0 0 5rem;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  height: 600px;
`;

export const Navbar = styled.nav`
  padding: 60px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    margin-right: 60px;
  }

  div.left-items {
    display: flex;
    align-items: center;

    div.menu-links a {
      color: var(--text);
      text-decoration: none;
      font-family: 'Ubuntu', sans-serif;
      font-weight: 700;
      margin-right: 30px;
      transition: text-decoration .2s;

      &:hover {
        text-decoration: underline;
      }
    }
    div.menu-links a:after {
      content: url(${imgArrow});
      margin-left: 0.8rem;
    }

  }

  div.right-items {
    button {
      font-size: 1rem;
      font-weight: 600;
      color: white;
      border: 0;
      background: transparent;
      padding: 1rem 2.5rem;
    }

    button:nth-child(2) {
      background-color: white;
      color: var(--cta-color);
      border-radius: 2rem;
    }
  }
`;

export const Headline = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  margin-top: 4rem;

  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 3rem;
    font-size: 1.2rem;
  }

  div.action-buttons {
    button {
      font-size: 1rem;
      font-weight: 600;
      color: white;
      border: 0;
      background: transparent;
      padding: 1rem 1.5rem;
      border-radius: 2rem;
    }

    button:nth-child(1) {
      background-color: white;
      margin-right: 1rem;
      color: var(--cta-color);
    }

    button:nth-child(2) {
      border: 1px solid #fff;
    }
  }
`;