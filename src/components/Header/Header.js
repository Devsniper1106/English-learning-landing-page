import styled from "styled-components";
import Button from "../Button";

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
    flex-wrap: wrap;
    gap: 16px;
    width: 100%;
    justify-content: space-between;
    padding: 24px var(--min-pad);
    max-width: calc(var(--max-width) + var(--min-pad) * 2);
    margin: auto;
`;

export default Header;
