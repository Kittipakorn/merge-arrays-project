/**
 * Note: These test cases were generated with the assistance of AI
 * to ensure comprehensive test coverage, including edge cases such as
 * empty arrays, duplicate values, imbalanced lengths, and large gaps.
 * The core merge logic was verified against all these scenarios.
 */

import { describe, it, expect } from '@jest/globals';
import { merge } from '../src/merge';

describe('merge function', () => {

    it('should merge and sort three arrays correctly', () => {
        const collection_1 = [1, 3, 5];
        const collection_2 = [2, 4, 6];
        const collection_3 = [9, 8, 7, 0];
        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should handle empty arrays gracefully', () => {
        expect(merge([], [], [])).toEqual([]);
        expect(merge([1, 2, 3], [], [])).toEqual([1, 2, 3]);
        expect(merge([], [], [3, 2, 1])).toEqual([1, 2, 3]);
        expect(merge([], [5, 6], [4, 0])).toEqual([0, 4, 5, 6]);
    });

    it('should handle duplicate numbers across all collections', () => {
        const col1 = [1, 1, 1];
        const col2 = [1, 1, 2];
        const col3 = [2, 1, 1, 0];
        const result = merge(col1, col2, col3);
        expect(result).toEqual([0, 1, 1, 1, 1, 1, 1, 1, 2, 2]);
    });


    it('should handle arrays of vastly different lengths', () => {
        const col1 = [1];
        const col2 = [2, 4, 6, 8, 10, 12];
        const col3 = [11, 9, 7, 5, 3, 0];
        const result = merge(col1, col2, col3);
        expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    });


    it('should handle case where collection_3 contains the absolute smallest numbers', () => {
        const col1 = [10, 20];
        const col2 = [15, 25];
        const col3 = [5, 2, 0];
        const result = merge(col1, col2, col3);
        expect(result).toEqual([0, 2, 5, 10, 15, 20, 25]);
    });


    it('should handle large gaps between numbers', () => {
        const col1 = [0, 1000];
        const col2 = [5, 500];
        const col3 = [999, 1];
        const result = merge(col1, col2, col3);
        expect(result).toEqual([0, 1, 5, 500, 999, 1000]);
    });
});