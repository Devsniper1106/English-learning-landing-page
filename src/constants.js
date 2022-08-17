export const BREAKPOINTS = {
    phone: 653,
    tablet: 768,
};

export const QUERIES = {
    tabletAndDown: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
    phoneAndDown: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
};
