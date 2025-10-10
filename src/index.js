/**
 * GitHub Achievement Unlocker
 * 
 * 🎯 Automated tool and strategies to unlock GitHub achievements and badges
 * through legitimate contributions and activities.
 * 
 * @description This package provides utilities and guidance for unlocking
 * GitHub achievements and badges through proper development practices.
 * 
 * @author Gabriel Demetrios Lafis <gabriel@example.com>
 * @version 1.1.0
 * @license MIT
 */
'use strict';

// Import required dependencies
import chalk from 'chalk';
import { Command } from 'commander';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import logger from './logger.js'; // Import the centralized logger

// Get current file directory (ESM compatible)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read configuration file
const config = JSON.parse(
  readFileSync(join(__dirname, '..', 'config', 'default.json'), 'utf8')
);

/**
 * GitHub Achievements and Badges Information
 */
const ACHIEVEMENTS = {
  // Repository Achievements
  repository: {
    'First Repository': {
      description: 'Created your first repository',
      requirements: 'Create a public repository',
      badge: '🏠'
    },
    'Public Repository': {
      description: 'Made a repository public',
      requirements: 'Have a public repository',
      badge: '🌍'
    },
    'Starred Repository': {
      description: 'Starred a repository',
      requirements: 'Star any repository',
      badge: '⭐'
    }
  },
  
  // Contribution Achievements
  contributions: {
    'First Commit': {
      description: 'Made your first commit',
      requirements: 'Make a commit to any repository',
      badge: '📝'
    },
    'First Pull Request': {
      description: 'Created your first pull request',
      requirements: 'Open a pull request',
      badge: '🔄'
    },
    'Pull Request Merged': {
      description: 'Had a pull request merged',
      requirements: 'Get a pull request merged',
      badge: '✅'
    },
    'Quickdraw': {
      description: 'Closed an issue or pull request quickly',
      requirements: 'Close an issue/PR within 5 minutes',
      badge: '⚡'
    }
  },
  
  // Package Publishing Achievements
  packages: {
    'First Package': {
      description: 'Published your first package',
      requirements: 'Publish a package to npm or GitHub Packages',
      badge: '📦'
    },
    'Package Publisher': {
      description: 'Regular package publisher',
      requirements: 'Publish multiple packages',
      badge: '🚀'
    }
  },
  
  // Special Achievements
  special: {
    'Arctic Code Vault Contributor': {
      description: 'Contributed to the 2020 GitHub Archive Program',
      requirements: 'Had code archived in Arctic Code Vault',
      badge: '🏔️'
    },
    'GitHub Sponsor': {
      description: 'Sponsored another developer',
      requirements: 'Sponsor someone on GitHub Sponsors',
      badge: '💖'
    }
  }
};

/**
 * Display achievements information
 */
function displayAchievements() {
  logger.info(chalk.bold.blue("\n🏆 GitHub Achievement Unlocker\n"));
  logger.info(chalk.cyan("Available GitHub achievements and badges:\n"));
  
  Object.entries(ACHIEVEMENTS).forEach(([category, achievements]) => {
    logger.info(chalk.bold.yellow(`📂 ${category.toUpperCase()}:`));
    
    Object.entries(achievements).forEach(([name, info]) => {
      logger.info(`  ${info.badge} ${chalk.bold(name)}`);
      logger.info(`     📋 ${info.description}`);
      logger.info(`     ✅ Requirements: ${info.requirements}`);
      logger.info("");
    });
  });
}

/**
 * Simulate checking GitHub API for user achievements
 * @param {string} username - GitHub username
 */
async function checkUserAchievements(username) {
  if (!username) {
    logger.error("Username is required for checking achievements");
    return {}; // Return empty object if no username
  }
  
  logger.info(`Simulating achievement check for user: ${username}`);
  
  const userAchievements = {};
  // Simulate some achievements being unlocked
  if (username === "galafis") {
    userAchievements.repository = ["First Repository", "Public Repository"];
    userAchievements.contributions = ["First Commit", "First Pull Request"];
  } else if (username === "octocat") {
    userAchievements.repository = ["First Repository", "Public Repository", "Starred Repository"];
    userAchievements.contributions = ["First Commit", "First Pull Request", "Pull Request Merged", "Quickdraw"];
    userAchievements.packages = ["First Package", "Package Publisher"];
    userAchievements.special = ["Arctic Code Vault Contributor", "GitHub Sponsor"];
  }

  logger.info("Simulated achievement check completed!");

  if (Object.keys(userAchievements).length > 0) {
    logger.info(chalk.bold.green(`\n🎉 Achievements for ${username}:`));
    Object.entries(userAchievements).forEach(([category, achievements]) => {
      logger.info(chalk.bold.yellow(`  📂 ${category.toUpperCase()}:`));
      achievements.forEach(achievementName => {
        const achievementInfo = ACHIEVEMENTS[category][achievementName];
        if (achievementInfo) {
          logger.info(`    ${achievementInfo.badge} ${chalk.bold(achievementName)}`);
        } else {
          logger.info(`    ${chalk.bold(achievementName)}`);
        }
      });
    });
  } else {
    logger.info(chalk.yellow("No achievements found for this user (simulated)."));
  }
  return userAchievements;
}

/**
 * Generate achievement tracking template
 */
function generateTemplate() {
  const template = `# GitHub Achievement Tracker\n\n## 🏆 Achievement Progress\n\n### Repository Achievements\n- [ ] First Repository\n- [ ] Public Repository  \n- [ ] Starred Repository\n\n### Contribution Achievements\n- [ ] First Commit\n- [ ] First Pull Request\n- [ ] Pull Request Merged\n- [ ] Quickdraw\n\n### Package Publishing Achievements\n- [ ] First Package\n- [ ] Package Publisher\n\n### Special Achievements\n- [ ] Arctic Code Vault Contributor\n- [ ] GitHub Sponsor\n\n## 📝 Notes\nAdd your achievement unlocking strategy and progress notes here.\n\n## 🔗 Useful Links\n- [GitHub Profile](https://github.com/YOUR_USERNAME)\n- [GitHub Packages](https://github.com/YOUR_USERNAME?tab=packages)\n- [GitHub Sponsors](https://github.com/sponsors/YOUR_USERNAME)\n\n---\nGenerated by github-achievement-unlocker v${config.app.version}\n`;

  logger.info(chalk.green("\n📄 Achievement Tracker Template:\n"));
  logger.info(template);
  logger.info("Template generated successfully!");
}

/**
 * Display package information
 */
function displayInfo() {
  logger.info(chalk.bold.blue("\n📦 GitHub Achievement Unlocker\n"));
  logger.info(`Version: ${chalk.green(config.app.version)}`);
  logger.info(`Author: ${chalk.cyan(config.app.author)}`);
  logger.info(`License: ${chalk.yellow(config.app.license)}`);
  logger.info(`Repository: ${chalk.blue(config.app.repository)}`);
  logger.info("");
  logger.info(chalk.italic("🎯 Automated tool for unlocking GitHub achievements and badges"));
  logger.info(chalk.italic("through legitimate contributions and activities."));
}

/**
 * Main CLI function
 */
function main() {
  const program = new Command();
  
  program
    .name(config.app.name)
    .description('🎯 Tool for unlocking GitHub achievements and badges')
    .version(config.app.version);
  
  program
    .command('list')
    .description('List all available GitHub achievements and badges')
    .action(displayAchievements);
  
  program
    .command('check <username>')
    .description('Check achievements for a GitHub user')
    .action(checkUserAchievements);
  
  program
    .command('template')
    .description('Generate achievement tracking template')
    .action(generateTemplate);
  
  program
    .command('info')
    .description('Display package information')
    .action(displayInfo);
  
  // Default action - show achievements if no command specified
  if (!process.argv.slice(2).length) {
    displayAchievements();
    throw new Error('No command specified, showing help');
  }
  
  program.parse();
}

/**
 * Export main functions for module usage
 */
export {
  ACHIEVEMENTS,
  displayAchievements,
  checkUserAchievements,
  generateTemplate,
  displayInfo
};

// Run CLI if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

// Default export
export default {
  ACHIEVEMENTS,
  displayAchievements,
  checkUserAchievements,
  generateTemplate,
  displayInfo,
  main
};
