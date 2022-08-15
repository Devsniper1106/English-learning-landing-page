import styled from "styled-components";

const Button = ({ children, variant }) => {
    const bgColor =
        variant === "primary"
            ? "var(--primary-gradient)"
            : variant === "secondary"
            ? "var(--secondary-gradient)"
            : "var(--color-darkest-blue)";

    return <Wrapper style={{ "--bgColor": bgColor }}>{children}</Wrapper>;
};

const Wrapper = styled.button`
    border-radius: 5000px;
    background: var(--bgColor);
    border: none;
    color: var(--color-white);
    padding: 8px 24px;
    font-weight: 700;
    line-height: 28px;
`;

export default Button;
