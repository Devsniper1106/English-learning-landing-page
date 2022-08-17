import styled from "styled-components";
import Button from "../Button";

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

    @media ${QUERIES.tabletAndDown} {
        width: 89px;
    }
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 32px var(--min-pad);
    max-width: calc(var(--max-width) + var(--min-pad) * 2);
    margin: auto;
    flex-wrap: wrap;
    gap: 16px;
`;

const Wrapper = styled.footer`
    background-color: var(--color-darkest-blue);
`;

export default Footer;
