
describe('Volume', () => {
  const main = require('../assets/scripts/main');

  test('Volume 3', () => {
    expect(main(80)).toMatch(`./assets/media/icons/volume-level-3.svg`);
  });
  test('Volume 2', () => {
    expect(main(50)).toMatch(`./assets/media/icons/volume-level-2.svg`);
  });
  test('Volume 1', () => {
    expect(main(25)).toMatch(`./assets/media/icons/volume-level-1.svg`);
  });
  test('Volume 0', () => {
    expect(main(0)).toMatch(`./assets/media/icons/volume-level-0.svg`);
  });
});