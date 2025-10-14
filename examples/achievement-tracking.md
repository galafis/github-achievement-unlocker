# Achievement Tracking Guide

This guide provides strategies for tracking your progress towards unlocking GitHub achievements.

## Understanding GitHub Achievements

GitHub achievements are badges displayed on your profile that recognize various contributions and milestones.

### Achievement Categories

1. **Repository** - Creating and managing repositories
2. **Contributions** - Making commits, PRs, and reviews  
3. **Packages** - Publishing packages to registries
4. **Special** - Unique achievements for special contributions

## Achievement Strategies

### Repository Achievements

**First Repository** 🏠
- Requirements: Create a public repository
- Strategy: Create a new project or make an existing one public
- Time: 5 minutes

**Starred Repository** ⭐
- Requirements: Star any repository
- Strategy: Star interesting projects you find useful
- Time: 1 minute

### Contribution Achievements

**Quickdraw** ⚡
- Requirements: Close an issue/PR within 5 minutes
- Strategy:
  1. Create a small, well-defined issue
  2. Prepare the fix beforehand
  3. Open issue and immediately commit fix
  4. Close within 5 minutes
- Time: 5 minutes (prepared)

**YOLO** 🎲
- Requirements: Merge a PR without review on default branch
- Strategy: In your own repository, merge a small change directly
- Note: Only do this in personal projects
- Time: 10 minutes

**Pair Extraordinaire** 👥
- Requirements: Coauthor a commit that gets merged
- Strategy:
  ```bash
  git commit -m "Your message
  
  Co-authored-by: Name <email@example.com>"
  ```
- Time: 15 minutes

**Pull Shark** 🦈
- Requirements: Open 2+ pull requests (tiers at 2, 16, 128, 1024)
- Strategy: 
  1. Find open-source projects needing help
  2. Check "good first issue" labels
  3. Submit quality PRs consistently
- Time: Ongoing

### Package Publishing

**First Package** 📦
- Requirements: Publish a package to npm or GitHub Packages
- Strategy:
  1. Create a small, useful utility
  2. Set up package.json properly
  3. Publish to npm:
  ```bash
  npm login
  npm publish
  ```
- Time: 1-2 hours

### Special Achievements

**Starstruck** 🤩
- Requirements: Repository with 16+ stars (tiers at 16, 128, 512, 4096)
- Strategy:
  1. Create valuable, useful projects
  2. Write excellent documentation
  3. Share on social media, Reddit, HN
  4. Solve real problems
- Time: Months to years

**Galaxy Brain** 🧠
- Requirements: 2+ accepted answers in discussions
- Strategy: Participate in GitHub Discussions with helpful answers
- Time: Ongoing

**GitHub Sponsor** 💖
- Requirements: Sponsor someone on GitHub Sponsors
- Strategy: Support maintainers of projects you use
- Time: 5 minutes

## Progress Tracking Template

Create a file in your profile repository to track progress:

```markdown
# My GitHub Achievements Progress

Last Updated: 2025-10-13

## 🏆 Current Achievements: 8/17

### Repository (3/3) ✅
- [x] 🏠 First Repository - *Unlocked: 2023-01-15*
- [x] 🌍 Public Repository - *Unlocked: 2023-01-15*
- [x] ⭐ Starred Repository - *Unlocked: 2023-01-20*

### Contributions (3/6) 🔄
- [x] 📝 First Commit - *Unlocked: 2023-01-15*
- [x] 🔄 First Pull Request - *Unlocked: 2023-02-01*
- [x] ✅ Pull Request Merged - *Unlocked: 2023-02-03*
- [ ] ⚡ Quickdraw - *Target: This month*
- [ ] 🎲 YOLO - *Planning*
- [ ] 👥 Pair Extraordinaire - *In progress*

### Packages (0/2) 📦
- [ ] 📦 First Package - *Planning phase*
- [ ] 🚀 Package Publisher - *Long-term goal*

### Special (2/6) ⭐
- [x] 💖 GitHub Sponsor - *Unlocked: 2024-05-10*
- [x] ❤️ Heart On Your Sleeve - *Unlocked: 2024-01-01*
- [ ] 🤩 Starstruck - *Goal: 16 stars*
- [ ] 🦈 Pull Shark - *5/16 PRs*
- [ ] 🧠 Galaxy Brain - *0/2 answers*
- [ ] 🏔️ Arctic Code Vault - *Historical*
```

## Automation

### Weekly Achievement Check Script

```bash
#!/bin/bash
# check-achievements.sh

echo "=== Weekly Achievement Check ==="
echo "Date: $(date)"
npm start check YOUR_USERNAME
echo "Keep up the great work! 🚀"
```

### GitHub Action Reminder

```yaml
# .github/workflows/achievement-reminder.yml
name: Achievement Reminder
on:
  schedule:
    - cron: '0 9 * * 1' # Every Monday at 9 AM

jobs:
  remind:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm start check ${{ github.actor }}
```

## Tips for Success

1. **Be Consistent**: Small, regular contributions are better
2. **Quality Over Quantity**: Focus on meaningful contributions
3. **Learn and Grow**: Use achievements as motivation
4. **Help Others**: Many achievements come from being helpful
5. **Document Progress**: Keep your tracker updated
6. **Celebrate Milestones**: Share your achievements

## Resources

- [GitHub Official Achievements](https://github.com/github/achievements)
- [Open Source Guide](https://opensource.guide/)
- [npm Publishing Guide](https://docs.npmjs.com/cli/v9/commands/npm-publish)

## Next Steps

- Review the [Basic Usage Guide](./basic-usage.md)
- Start tracking your achievements today!
