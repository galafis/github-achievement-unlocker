# Basic Usage Examples

This guide covers the basic commands and usage patterns for the GitHub Achievement Unlocker CLI tool.

## Prerequisites

Make sure you have installed the package:

```bash
npm install -g @galafis/github-achievement-unlocker
# OR use it locally
npm install
```

## Command Reference

### 1. List All Achievements

Display a comprehensive list of all known GitHub achievements:

```bash
npm start list
```

**Output:**
```
🏆 GitHub Achievement Unlocker

Available GitHub achievements and badges:

📂 REPOSITORY:
  🏠 First Repository
     📋 Created your first repository
     ✅ Requirements: Create a public repository

  🌍 Public Repository
     📋 Made a repository public
     ✅ Requirements: Have a public repository
...
```

### 2. Check User Achievements

Simulate checking achievements for a specific GitHub username:

```bash
npm start check <username>

# Examples:
npm start check galafis
npm start check octocat
npm start check your-username
```

**Output for `npm start check octocat`:**
```
Simulating achievement check for user: octocat
Simulated achievement check completed!

🎉 Achievements for octocat:
  📂 REPOSITORY:
    🏠 First Repository
    🌍 Public Repository
    ⭐ Starred Repository
  📂 CONTRIBUTIONS:
    📝 First Commit
    🔄 First Pull Request
    ✅ Pull Request Merged
    ⚡ Quickdraw
...
```

### 3. Generate Achievement Tracker Template

Create a Markdown template to manually track your achievement progress:

```bash
npm start template
```

This generates a checklist you can copy to your own repository to track progress.

**Output:**
```markdown
# GitHub Achievement Tracker

## 🏆 Achievement Progress

### Repository Achievements
- [ ] First Repository
- [ ] Public Repository  
- [ ] Starred Repository

### Contribution Achievements
- [ ] First Commit
- [ ] First Pull Request
- [ ] Pull Request Merged
- [ ] Quickdraw
...
```

### 4. Display Package Information

Show version and package details:

```bash
npm start info
```

**Output:**
```
📦 GitHub Achievement Unlocker

Version: 1.1.1
Author: Gabriel Demetrios Lafis
License: MIT
Repository: https://github.com/galafis/github-achievement-unlocker

🎯 Automated tool for unlocking GitHub achievements and badges
through legitimate contributions and activities.
```

## Common Use Cases

### Creating a Personal Achievement Tracker

1. Generate the template:
   ```bash
   npm start template > MY_ACHIEVEMENTS.md
   ```

2. Edit the file and check off achievements as you unlock them

3. Commit it to your profile repository for tracking

### Checking Multiple Users

```bash
# Check achievements for multiple users
for user in octocat galafis torvalds; do
  echo "=== Checking $user ==="
  npm start check $user
  echo ""
done
```

### Integrating in CI/CD

You can use this tool in your CI/CD pipeline to check achievements:

```yaml
# .github/workflows/check-achievements.yml
name: Check Achievements
on:
  schedule:
    - cron: '0 0 * * 0' # Weekly
  workflow_dispatch:

jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install -g @galafis/github-achievement-unlocker
      - run: github-achievement-unlocker check ${{ github.actor }}
```

## Tips and Best Practices

1. **Regular Checks**: Run `npm start check your-username` periodically to track progress
2. **Template Updates**: Regenerate your tracking template when new achievements are added
3. **Combine Commands**: Use shell scripting to automate multiple checks
4. **Documentation**: Keep your achievement tracker in your profile README for visibility

## Troubleshooting

### Command not found
If you get "command not found", ensure you've installed the package correctly:
```bash
npm install
# OR
npm install -g @galafis/github-achievement-unlocker
```

### No output
Make sure you're in the correct directory:
```bash
cd /path/to/github-achievement-unlocker
npm start list
```

## Next Steps

- Learn about [Achievement Tracking](./achievement-tracking.md)
- Explore [Custom Scripts](./custom-scripts/)
- Check the [main documentation](../README.md)
