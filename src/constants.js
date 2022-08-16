export const BREAKPOINTS = {
    phone: 653,
    tablet: 768,
};

export const QUERIES = {
    tabletAndDown: `@media(max-width: ${BREAKPOINTS.tablet / 16} rem)`,
    phoneAndDown: `@media(max-width: ${BREAKPOINTS.phone / 16} rem)`,
};
