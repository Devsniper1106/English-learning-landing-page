import styled from "styled-components";
import { QUERIES } from "../../constants";

const Button = ({ children, variant }) => {
    const bgColor =
        variant === "primary"
            ? "var(--primary-gradient)"
            : variant === "secondary"
            ? "var(--secondary-gradient)"
            : "var(--color-darkest-blue)";

    return (
        <Wrapper style={{ "--bgColor": bgColor }}>
            {children}
            <Overlay>{children}</Overlay>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    border-radius: 5000px;
    background: var(--bgColor);
    color: var(--color-white);
    border: none;
    padding: 14px 32px;
    font-weight: 700;
    line-height: 28px;
    font-size: calc(1rem * (18 / 16));
    position: relative;
    overflow: hidden;

    @media ${QUERIES.tabletAndDown} {
        font-size: revert;
        padding: 9px 24px 11px;
    }
`;

const Overlay = styled.button`
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    pointer-events: inherit;
    cursor: pointer;
    color: transparent;

    &:hover {
        opacity: 0.3;
    }
`;

export default Button;
