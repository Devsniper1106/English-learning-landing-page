import styled from "styled-components";
import Button from "../Button";

const STYLES = {};

const Footer = () => {
    return (
        <Wrapper>
            <Content>
                <Logo alt="skilled logo" src="assets/images/logo-light.svg" />
                <Button variant={"secondary"}>Get Started</Button>
            </Content>
        </Wrapper>
    );
};

const Logo = styled.img`
    object-fit: contain;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 32px 0;
    max-width: var(--max-width);
    margin: auto;
`;

const Wrapper = styled.footer`
    background-color: var(--color-darkest-blue);
`;

export default Footer;
