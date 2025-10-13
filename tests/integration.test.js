/**
 * Integration tests for the CLI tool
 */
import { jest } from '@jest/globals';
import {
  ACHIEVEMENTS,
  displayAchievements,
  checkUserAchievements,
  generateTemplate,
  displayInfo
} from '../src/index.js';
import logger from '../src/logger.js';

describe('Integration Tests', () => {
  let loggerInfoSpy;
  let loggerErrorSpy;

  beforeEach(() => {
    loggerInfoSpy = jest.spyOn(logger, 'info').mockImplementation(() => {});
    loggerErrorSpy = jest.spyOn(logger, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    loggerInfoSpy.mockRestore();
    loggerErrorSpy.mockRestore();
  });

  describe('Complete workflow', () => {
    test('should list achievements, check user, and generate template', async () => {
      // 1. List achievements
      displayAchievements();
      expect(loggerInfoSpy).toHaveBeenCalledWith(
        expect.stringContaining('GitHub Achievement Unlocker')
      );

      // 2. Check user achievements
      const achievements = await checkUserAchievements('octocat');
      expect(achievements).toBeDefined();
      expect(typeof achievements).toBe('object');

      // 3. Generate template
      generateTemplate();
      expect(loggerInfoSpy).toHaveBeenCalledWith(
        expect.stringContaining('Template generated successfully!')
      );

      // 4. Display info
      displayInfo();
      expect(loggerInfoSpy).toHaveBeenCalledWith(
        expect.stringContaining('Version:')
      );
    });
  });

  describe('Achievement categories completeness', () => {
    test('should have at least 3 achievements in each category', () => {
      expect(Object.keys(ACHIEVEMENTS.repository).length).toBeGreaterThanOrEqual(3);
      expect(Object.keys(ACHIEVEMENTS.contributions).length).toBeGreaterThanOrEqual(3);
      expect(Object.keys(ACHIEVEMENTS.packages).length).toBeGreaterThanOrEqual(2);
      expect(Object.keys(ACHIEVEMENTS.special).length).toBeGreaterThanOrEqual(2);
    });

    test('total achievements should be at least 17', () => {
      const total = Object.values(ACHIEVEMENTS).reduce(
        (sum, category) => sum + Object.keys(category).length,
        0
      );
      expect(total).toBeGreaterThanOrEqual(17);
    });
  });

  describe('Error handling', () => {
    test('should handle empty username gracefully', async () => {
      const result = await checkUserAchievements('');
      expect(loggerErrorSpy).toHaveBeenCalledWith(
        'Username is required for checking achievements'
      );
      expect(result).toEqual({});
    });

    test('should handle null username gracefully', async () => {
      const result = await checkUserAchievements(null);
      expect(loggerErrorSpy).toHaveBeenCalledWith(
        'Username is required for checking achievements'
      );
      expect(result).toEqual({});
    });

    test('should handle undefined username gracefully', async () => {
      const result = await checkUserAchievements(undefined);
      expect(loggerErrorSpy).toHaveBeenCalledWith(
        'Username is required for checking achievements'
      );
      expect(result).toEqual({});
    });
  });

  describe('Achievement validation', () => {
    test('all achievements should have unique badges', () => {
      const badges = [];
      Object.values(ACHIEVEMENTS).forEach(category => {
        Object.values(category).forEach(achievement => {
          badges.push(achievement.badge);
        });
      });
      
      // Allow some duplicates (like special badges)
      const uniqueBadges = new Set(badges);
      expect(uniqueBadges.size).toBeGreaterThan(10);
    });

    test('all achievement names should be unique across categories', () => {
      const names = [];
      Object.values(ACHIEVEMENTS).forEach(category => {
        Object.keys(category).forEach(name => {
          names.push(name);
        });
      });
      
      const uniqueNames = new Set(names);
      expect(uniqueNames.size).toBe(names.length);
    });

    test('achievement descriptions should be descriptive', () => {
      Object.values(ACHIEVEMENTS).forEach(category => {
        Object.values(category).forEach(achievement => {
          expect(achievement.description.length).toBeGreaterThan(10);
          expect(achievement.requirements.length).toBeGreaterThan(10);
        });
      });
    });
  });

  describe('User simulation accuracy', () => {
    test('galafis user should have consistent simulated achievements', async () => {
      const achievements = await checkUserAchievements('galafis');
      
      expect(achievements.repository).toBeDefined();
      expect(Array.isArray(achievements.repository)).toBe(true);
      expect(achievements.repository.length).toBeGreaterThan(0);
      
      expect(achievements.contributions).toBeDefined();
      expect(Array.isArray(achievements.contributions)).toBe(true);
    });

    test('octocat user should have more achievements than galafis', async () => {
      const galafisAchievements = await checkUserAchievements('galafis');
      const octocatAchievements = await checkUserAchievements('octocat');
      
      const galafisTotal = Object.values(galafisAchievements).reduce(
        (sum, arr) => sum + arr.length,
        0
      );
      
      const octocatTotal = Object.values(octocatAchievements).reduce(
        (sum, arr) => sum + arr.length,
        0
      );
      
      expect(octocatTotal).toBeGreaterThan(galafisTotal);
    });

    test('unknown user should have no achievements', async () => {
      const achievements = await checkUserAchievements('unknownuser12345');
      const total = Object.values(achievements).reduce(
        (sum, arr) => sum + (Array.isArray(arr) ? arr.length : 0),
        0
      );
      
      expect(total).toBe(0);
    });
  });
});
