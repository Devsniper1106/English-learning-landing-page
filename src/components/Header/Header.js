import styled from "styled-components";
import Button from "../Button";

const STYLES = {};

const Header = () => {
    return (
        <Wrapper>
            <Logo alt="skilled logo" src="assets/images/logo-dark.svg" />
            <Button>Get Started</Button>
        </Wrapper>
    );
};

const Logo = styled.img`
    object-fit: contain;
`;

const Wrapper = styled.header`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 24px 0;
    max-width: var(--max-width);
    margin: auto;
`;

export default Header;
