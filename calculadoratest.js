const calculadora = require('./calculadora')
describe('Testando a calculadora', () =>{
    test('1+2 = 3', () => {
        expect(calculadora.somar(1,2)).toBe(3)
    })
   /* test('5*2 = 10', () => {
        expect(calculadora.multiplicar(5,2)).toEqual(10)
    })*/
    test('2-5 <> 3', () => {
        expect(calculadora.subtrair(2,5)).not.toBe(3)
    })
    test('5/3 ≃ 1.7', () => {
        expect(calculadora.divisao(5,3)).toBeCloseTo(1.7, 1)
    })
})                      