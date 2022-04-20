import {reverseString} from '../function/reverseString';

it('Default', () =>
    expect(reverseString('hello')).toBe('olleh'))

it('Single letter word', () =>
    expect(reverseString('a')).toBe('a'))

it('Sentence', () =>
    expect(reverseString('this is a testing sentence')).toBe('ecnetnes gnitset a si siht'))

it('Empty input', () =>
    expect(reverseString('')).toBe(''))
