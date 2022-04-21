import { analyzeArray } from "../function/analyzeArray";

it('Default', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({average: 4, min: 1, max: 8, length: 6})
})