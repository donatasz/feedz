/**
 * Helper function to prefix number with leading zero
 * @param number
 * @returns {string}
 */
export const pad = (number) => {
    return number < 10 ? '0' + number : number;
};
