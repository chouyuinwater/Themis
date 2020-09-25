export const isEmpty = value => (value === undefined || value === null || value === '');

export const callMessage = message => {
    console.log("message =" + message);
    return message;
};

export const mathDeal = (a, b) => Math.abs(a) + Math.abs(b);

const common = {
    isEmpty: isEmpty,

    callMessage: callMessage,

    mathDeal: mathDeal
}

export default common;