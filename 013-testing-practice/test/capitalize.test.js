import {capitalize} from '../function/capitalize';

it('Default', () =>
    expect(capitalize('hello')).toBe('Hello'))

it('Already Capitalize', () =>
    expect(capitalize('Hello')).toBe('Hello'))

it('Single letter word', () =>
    expect(capitalize('a')).toBe('A'))

it('Sentence', () =>
    expect(capitalize('this is a testing sentence')).toBe('This is a testing sentence'))

it('Empty input', () =>
    expect(capitalize('')).toBe(''))

it('No letter first char', () =>
    expect(capitalize('5 items')).toBe('5 items'))
