import {caesarCipher} from '../function/caesarCipher'
it('Default', () =>
    expect(caesarCipher('hello')).toBe('ifmmp'))
it('Wrapping', () =>
    expect(caesarCipher('azAZ')).toBe('baBA'))
it('Punctuation', () =>{
    expect(caesarCipher('Hello!?.')).toBe('Ifmmp!?.')
})