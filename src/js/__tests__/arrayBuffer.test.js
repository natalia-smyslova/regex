import ArrayBufferConverter from '../arrayBuffer';


test('testing buffer converter', () => {
  function getBuffer() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    return ((input) => {
      const buffer = new ArrayBuffer(data.length * 2);
      const bufferView = new Uint16Array(buffer);
      for (let i = 0; i < input.length; i + 1) {
        bufferView[i] = input.charCodeAt(i);
      }
      return buffer;
    })(data);
  }

  const converter = new ArrayBufferConverter();
  const buffer = getBuffer();
  const result = converter.load(buffer);
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(result).toBe(data);
});
