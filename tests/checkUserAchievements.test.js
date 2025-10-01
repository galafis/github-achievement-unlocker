import { jest } from '@jest/globals';
import { checkUserAchievements, ACHIEVEMENTS } from '../src/index.js';
import logger from '../src/logger.js';

describe('checkUserAchievements', () => {
  let consoleSpy;
  let loggerInfoSpy;
  let loggerErrorSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    loggerInfoSpy = jest.spyOn(logger, 'info').mockImplementation(() => {});
    loggerErrorSpy = jest.spyOn(logger, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
    loggerInfoSpy.mockRestore();
    loggerErrorSpy.mockRestore();
  });

  test('should log an error if no username is provided', async () => {
    await checkUserAchievements();
    expect(loggerErrorSpy).toHaveBeenCalledWith('Username is required for checking achievements');
    expect(consoleSpy).not.toHaveBeenCalled();
  });

  test('should simulate achievements for galafis', async () => {
    await checkUserAchievements('galafis');
    expect(loggerInfoSpy).toHaveBeenCalledWith('Simulating achievement check for user: galafis');
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Achievements for galafis'));
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('First Repository'));
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('First Commit'));
  });

  test('should simulate all achievements for octocat', async () => {
    await checkUserAchievements('octocat');
    expect(loggerInfoSpy).toHaveBeenCalledWith('Simulating achievement check for user: octocat');
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Achievements for octocat'));
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Arctic Code Vault Contributor'));
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('GitHub Sponsor'));
  });

  test('should show no achievements for an unknown user', async () => {
    await checkUserAchievements('unknownuser');
    expect(loggerInfoSpy).toHaveBeenCalledWith('Simulating achievement check for user: unknownuser');
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('No achievements found for this user (simulated).'));
  });
});

