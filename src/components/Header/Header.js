import styled from "styled-components";
import Button from "../Button";

const STYLES = {};

const Header = () => {
    return (
        <Wrapper>
            <img alt="skilled logo" src="assets/images/logo-dark.svg" />
            <Button>Get Started</Button>
        </Wrapper>
    );
};

const Wrapper = styled.header`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export default Header;
