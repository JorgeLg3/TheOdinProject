import {calculator} from '../function/calculator';

it('Add', () =>
    expect(calculator.add(1,1)).toBe(2))

it('Sub', () =>
    expect(calculator.sub(1,1)).toBe(0))

it('Multiply', () =>
    expect(calculator.mul(2,3)).toBe(6))

it('Divide', () =>
    expect(calculator.div(10,5)).toBe(2))