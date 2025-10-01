import logger from '../src/logger.js';

describe('Logger', () => {
  test('logger should be defined', () => {
    expect(logger).toBeDefined();
  });

  test('logger should have info, warn, error methods', () => {
    expect(typeof logger.info).toBe('function');
    expect(typeof logger.warn).toBe('function');
    expect(typeof logger.error).toBe('function');
  });
});

