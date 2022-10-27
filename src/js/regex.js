export default class Validator {
  validateUsername(name) {
    const regexMatch = name.match(/[^a-zA-Z-_0-9]+|[0-9]{4,}|^[0-9-_]|[0-9-_]$/gi);
    if (name.length < 3) {
      throw new Error('Недостаточно символов');
    }
    if (name.length > 10) {
      throw new Error('Слишком много символов');
    }
    if (regexMatch === null) {
      return regexMatch;
    }
    throw new Error('Неверно заданы символы');
  }
}
