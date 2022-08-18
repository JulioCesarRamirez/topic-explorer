import '@testing-library/jest-dom';
import { capitalize } from '../../helpers/capitalize';

describe('Test capitalize helper', () => {
    it('should capitalize word', async () => {
        const unCapitalizeWord = 'react';
        expect(capitalize(unCapitalizeWord)).toEqual('React');
    });
});