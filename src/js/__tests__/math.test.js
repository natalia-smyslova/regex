import Daemon from '../Daemon';
import Magician from '../Magician';

test('testing get stoned method', () => {
  const magician = new Magician();
  magician.stoned = [3, 60];
  expect(48).toBe(magician.attackValue);
});

test('testing get attack method', () => {
  const daemon = new Daemon();
  daemon.attack = [2, 100];
  expect(85).toBe(daemon.attackValue);
});
