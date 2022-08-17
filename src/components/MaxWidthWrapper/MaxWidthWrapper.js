import styled from "styled-components";

const MaxWidthWrapper = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
    padding: 32px var(--min-pad);
    max-width: calc(var(--max-width) + var(--min-pad) * 2);
`;

export default MaxWidthWrapper;
