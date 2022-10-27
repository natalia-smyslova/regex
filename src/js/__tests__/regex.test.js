import Validator from '../regex';

const validator = new Validator();

// Протестировать количество символов (больше 10)
test('testing symbols amount > 10', () => {
  expect(() => validator.validateUsername('abcdefghigklmnop')).toThrow('Слишком много символов');
});

// Протестировать количество символов (меньше 3)
test('testing symbols amount < 3', () => {
  expect(() => validator.validateUsername('ab')).toThrow('Недостаточно символов');
});


// неправильное количество цифр (цифры подряд)
test('testing wrong digits', () => {
  expect(() => validator.validateUsername('ab4444cd')).toThrow('Неверно заданы символы');
});

// правильное количество цифр (цифры не подряд)

test('testing variant order of digits', () => {
  expect(validator.validateUsername('ab4cd4c')).toEqual(null);
});

// цифры в начале
test('testing digits in the start', () => {
  expect(() => validator.validateUsername('44abcd')).toThrow('Неверно заданы символы');
});

// цифры в конце
test('testing digits in the end', () => {
  expect(() => validator.validateUsername('abcd44')).toThrow('Неверно заданы символы');
});

// дефисы в начале
test('testing hyphen in the start', () => {
  expect(() => validator.validateUsername('-abc')).toThrow('Неверно заданы символы');
});

// дефисы в конце
test('testing hyphen in the end', () => {
  expect(() => validator.validateUsername('abc-')).toThrow('Неверно заданы символы');
});

// подчеркивания в начале
test('testing underline in the start', () => {
  expect(() => validator.validateUsername('_abc')).toThrow('Неверно заданы символы');
});

// подчеркивания в конце
test('testing underline in the end', () => {
  expect(() => validator.validateUsername('abc_')).toThrow('Неверно заданы символы');
});

// правильный результат
test('right result', () => {
  expect(validator.validateUsername('mad-7lynx')).toEqual(null);
});
