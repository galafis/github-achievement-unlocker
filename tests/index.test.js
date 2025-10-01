/**
 * Basic tests for GitHub Achievement Unlocker
 * Simple tests without mocks to avoid Jest configuration issues
 */
import {
  ACHIEVEMENTS,
  displayAchievements
} from '../src/index.js';

describe('GitHub Achievement Unlocker - Basic Tests', () => {
  test('ACHIEVEMENTS should be an object', () => {
    expect(ACHIEVEMENTS).toBeDefined();
    expect(typeof ACHIEVEMENTS).toBe('object');
  });

  test('displayAchievements should be a function', () => {
    expect(displayAchievements).toBeDefined();
    expect(typeof displayAchievements).toBe('function');
  });
});
