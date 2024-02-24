const subtract = require('./subtract')

test('properly subtracts two numbers', () => {
    expect(subtract(2,1)).toBe(1)
})