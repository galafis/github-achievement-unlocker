/**
 * Tests for achievement template generation and package info display
 */
import { jest } from '@jest/globals';
import {
  generateTemplate,
  displayInfo,
  displayAchievements,
  ACHIEVEMENTS
} from '../src/index.js';
import logger from '../src/logger.js';

describe('generateTemplate', () => {
  let loggerInfoSpy;

  beforeEach(() => {
    loggerInfoSpy = jest.spyOn(logger, 'info').mockImplementation(() => {});
  });

  afterEach(() => {
    loggerInfoSpy.mockRestore();
  });

  test('should generate template with achievement tracker', () => {
    generateTemplate();
    
    expect(loggerInfoSpy).toHaveBeenCalled();
    
    // Check if template contains key sections
    const templateCall = loggerInfoSpy.mock.calls.find(call => 
      String(call[0]).includes('GitHub Achievement Tracker')
    );
    expect(templateCall).toBeDefined();
  });

  test('should include all achievement categories in template', () => {
    generateTemplate();
    
    const allCalls = loggerInfoSpy.mock.calls.map(call => String(call[0])).join(' ');
    
    expect(allCalls).toContain('Repository Achievements');
    expect(allCalls).toContain('Contribution Achievements');
    expect(allCalls).toContain('Package Publishing');
  });

  test('should display success message', () => {
    generateTemplate();
    
    expect(loggerInfoSpy).toHaveBeenCalledWith(
      expect.stringContaining('Template generated successfully!')
    );
  });
});

describe('displayInfo', () => {
  let loggerInfoSpy;

  beforeEach(() => {
    loggerInfoSpy = jest.spyOn(logger, 'info').mockImplementation(() => {});
  });

  afterEach(() => {
    loggerInfoSpy.mockRestore();
  });

  test('should display package information', () => {
    displayInfo();
    
    expect(loggerInfoSpy).toHaveBeenCalled();
    expect(loggerInfoSpy).toHaveBeenCalledWith(
      expect.stringContaining('GitHub Achievement Unlocker')
    );
  });

  test('should display version information', () => {
    displayInfo();
    
    const versionCall = loggerInfoSpy.mock.calls.find(call =>
      String(call[0]).includes('Version:')
    );
    expect(versionCall).toBeDefined();
  });

  test('should display author information', () => {
    displayInfo();
    
    const authorCall = loggerInfoSpy.mock.calls.find(call =>
      String(call[0]).includes('Author:')
    );
    expect(authorCall).toBeDefined();
  });

  test('should display license information', () => {
    displayInfo();
    
    const licenseCall = loggerInfoSpy.mock.calls.find(call =>
      String(call[0]).includes('License:')
    );
    expect(licenseCall).toBeDefined();
  });
});

describe('ACHIEVEMENTS structure', () => {
  test('should have repository category', () => {
    expect(ACHIEVEMENTS.repository).toBeDefined();
    expect(typeof ACHIEVEMENTS.repository).toBe('object');
  });

  test('should have contributions category', () => {
    expect(ACHIEVEMENTS.contributions).toBeDefined();
    expect(typeof ACHIEVEMENTS.contributions).toBe('object');
  });

  test('should have packages category', () => {
    expect(ACHIEVEMENTS.packages).toBeDefined();
    expect(typeof ACHIEVEMENTS.packages).toBe('object');
  });

  test('should have special category', () => {
    expect(ACHIEVEMENTS.special).toBeDefined();
    expect(typeof ACHIEVEMENTS.special).toBe('object');
  });

  test('each achievement should have required properties', () => {
    Object.values(ACHIEVEMENTS).forEach(category => {
      Object.values(category).forEach(achievement => {
        expect(achievement).toHaveProperty('description');
        expect(achievement).toHaveProperty('requirements');
        expect(achievement).toHaveProperty('badge');
        expect(typeof achievement.description).toBe('string');
        expect(typeof achievement.requirements).toBe('string');
        expect(typeof achievement.badge).toBe('string');
      });
    });
  });

  test('should include new achievements', () => {
    // Check for newly added achievements
    expect(ACHIEVEMENTS.contributions['YOLO']).toBeDefined();
    expect(ACHIEVEMENTS.contributions['Pair Extraordinaire']).toBeDefined();
    expect(ACHIEVEMENTS.special['Starstruck']).toBeDefined();
    expect(ACHIEVEMENTS.special['Pull Shark']).toBeDefined();
    expect(ACHIEVEMENTS.special['Galaxy Brain']).toBeDefined();
    expect(ACHIEVEMENTS.special['Heart On Your Sleeve']).toBeDefined();
  });

  test('new achievements should have correct structure', () => {
    const yolo = ACHIEVEMENTS.contributions['YOLO'];
    expect(yolo.badge).toBe('🎲');
    expect(yolo.description).toContain('Merged');
    expect(yolo.requirements).toContain('Merge');

    const starstruck = ACHIEVEMENTS.special['Starstruck'];
    expect(starstruck.badge).toBe('🤩');
    expect(starstruck.description).toContain('stars');
  });
});

describe('displayAchievements', () => {
  let loggerInfoSpy;

  beforeEach(() => {
    loggerInfoSpy = jest.spyOn(logger, 'info').mockImplementation(() => {});
  });

  afterEach(() => {
    loggerInfoSpy.mockRestore();
  });

  test('should display all achievements', () => {
    displayAchievements();
    
    expect(loggerInfoSpy).toHaveBeenCalled();
    expect(loggerInfoSpy).toHaveBeenCalledWith(
      expect.stringContaining('GitHub Achievement Unlocker')
    );
  });

  test('should display all achievement categories', () => {
    displayAchievements();
    
    const allCalls = loggerInfoSpy.mock.calls.map(call => String(call[0])).join(' ');
    
    expect(allCalls).toContain('REPOSITORY');
    expect(allCalls).toContain('CONTRIBUTIONS');
    expect(allCalls).toContain('PACKAGES');
    expect(allCalls).toContain('SPECIAL');
  });
});
