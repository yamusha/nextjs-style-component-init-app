import styled from "styled-components";
import Link from "next/link";

const Nav = styled.nav`
  background-color: #000;
  height: 80px;
  color: #fff;
  display:flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledLink = styled.a`
  font-weight: bold;
  padding: 0 2rem;
  text-transform: uppercase;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Nav>
      <div>
        <Link href="/">
          <StyledLink>Next App</StyledLink>
        </Link>
      </div>
      <div>
        <Link href="/">
          <StyledLink>Home</StyledLink>
        </Link>
        <Link href="/about">
          <StyledLink>About</StyledLink>
        </Link>
        <Link href="/contact">
          <StyledLink>Contact</StyledLink>
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar;
