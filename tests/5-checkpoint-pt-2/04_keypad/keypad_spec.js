/* eslint-disable no-unused-vars */
/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('presses', () => {
    it('is a function', () => {
        expect(typeof presses).toBe('function');
    });

    it('returns the amount of presses for a single character', () => {
        expect(presses('z')).toBe(4);
        expect(presses('a')).toBe(1);
        expect(presses('n')).toBe(2);
    });

    it('returns the amount of presses for a single word', () => {
        /* NOTE: treat upper and lower case characters the same */
        expect(presses('one')).toBe(7);
        expect(presses('example')).toBe(12);
        expect(presses('HeLlO')).toBe(13);
    });

    it('returns the amount of presses for a phrase', () => {
        expect(presses('good morning')).toBe(24);
        expect(presses('I am traveling to Chicago and staying on 1st street')).toBe(96);
    });
});