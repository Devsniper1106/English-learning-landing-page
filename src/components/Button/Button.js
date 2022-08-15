import styled from "styled-components";

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
            <Overlay />
        </Wrapper>
    );
};

const Wrapper = styled.button`
    border-radius: 5000px;
    background: var(--bgColor);
    border: none;
    color: var(--color-white);
    padding: 8px 24px;
    font-weight: 700;
    line-height: 28px;
    position: relative;
    overflow: hidden;
`;

const Overlay = styled.div`
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    pointer-events: inherit;
    cursor: pointer;

    &:hover {
        opacity: 0.3;
    }
`;

export default Button;
