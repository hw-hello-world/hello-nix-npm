import foo from '@hw/core';

const bar = () => {
    const coreMsg = foo();
    return `this is component wrap of` +
    `\t${coreMsg}` +
    `end.`;
}
export default bar;
