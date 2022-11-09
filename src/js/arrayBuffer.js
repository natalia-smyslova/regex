// У вас есть функция getBuffer(), которая эмулирует создание объекта типа ArrayBuffer

//   Вам необходимо реализовать класс ArrayBufferConverter
export default class ArrayBufferConverter {
  // с методом load(), который может загружать данные (сигнатура load(buffer)),
  // и методом toString, который умеет переводить содержимое загруженного ArrayBuffer в строку.
  load(buffer) {
    // const buffer = buffer;
    return String.fromCharCode.apply(null, new Uint16Array(buffer));
  }
}
