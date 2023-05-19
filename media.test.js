const calculo = require('./media')
test('Testando a media artmética', () => {
    expect(calculo.media (7,4)).toBe(5.5)
})