# GitHub Achievement Unlocker

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/galafis/github-achievement-unlocker/main.yml?branch=main) ![GitHub license](https://img.shields.io/github/license/galafis/github-achievement-unlocker) ![npm version](https://img.shields.io/npm/v/@galafis/github-achievement-unlocker) ![GitHub contributors](https://img.shields.io/github/contributors/galafis/github-achievement-unlocker)

An automated tool and strategies to unlock GitHub achievements and badges through legitimate contributions and activities.

[English Version](README.md) | [Versão em Português](docs/README_pt-br.md)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Architecture](#architecture)
- [Installation](#installation)
- [Usage](#usage)
- [Achievements List](#achievements-list)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## Introduction

This project provides a command-line interface (CLI) tool designed to help developers understand and track their progress towards unlocking various GitHub achievements and badges. While GitHub does not provide a public API for achievements, this tool offers a simulated environment to explore the types of achievements available and track personal progress based on defined criteria. It encourages legitimate contributions and activities on GitHub, fostering a deeper engagement with the platform's features.

## Features

- **List Achievements:** Display a comprehensive list of known GitHub achievements and their requirements.
- **Simulated Achievement Check:** Simulate checking achievements for a given GitHub username (based on predefined logic).
- **Achievement Tracker Template:** Generate a Markdown template to manually track achievement progress.
- **Professional Structure:** Organized codebase with clear separation of concerns (src/, tests/, docs/, config/, public/).
- **Unit Tests:** Ensures code reliability and functionality.

## Architecture

The `github-achievement-unlocker` is structured as a Node.js CLI application. Its architecture is designed for modularity and ease of maintenance:

```mermaid
graph TD
    A[User] -->|Executes CLI commands| B(CLI Application)
    B -->|Uses| C{Commander.js}
    B -->|Logs output| D(Winston Logger)
    B -->|Reads configuration| E[config/default.json]
    B -->|Interacts with (simulated)| F[GitHub API (Future/Simulated)]
    B -->|Generates| G[Markdown Templates]
    C -->|Defines commands| B
    D -->|Outputs to| H[Console]
    E -->|Provides app settings| B
    F -->|Provides achievement data| B
    G -->|Displayed to| A
```

**Components:**

- **CLI Application (src/index.js):** The core of the tool, handling command parsing and execution using `commander.js`.
- **Logger (src/logger.js):** Centralized logging utility using `winston` for consistent output and error handling.
- **Configuration (config/default.json):** Stores application settings, such as GitHub API endpoints and application metadata.
- **GitHub API (Simulated):** Currently, achievement checking is simulated due to the lack of a public GitHub API for achievements. This section is designed for future integration if an API becomes available.
- **Markdown Templates:** Used for generating achievement tracking templates.

## Installation

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm (v8.0.0 or higher)
- Git

### Clone the repository

```bash
git clone https://github.com/galafis/github-achievement-unlocker.git
cd github-achievement-unlocker
```

### Install dependencies

```bash
npm install
```

## Usage

### List all available achievements

```bash
npm start list
```

### Check achievements for a GitHub user (simulated)

```bash
npm start check <username>
# Example:
npm start check galafis
npm start check octocat
```

### Generate an achievement tracking Markdown template

```bash
npm start template
```

### Display package information

```bash
npm start info
```

## Achievements List

The following achievements are tracked and simulated by this tool:

| Category              | Achievement Name               | Description                                            | Requirements                                        | Badge |
| :-------------------- | :----------------------------- | :----------------------------------------------------- | :-------------------------------------------------- | :---- |
| **Repository**        | First Repository               | Created your first repository                          | Create a public repository                          | 🏠    |
|                       | Public Repository              | Made a repository public                               | Have a public repository                            | 🌍    |
|                       | Starred Repository             | Starred a repository                                   | Star any repository                                 | ⭐    |
| **Contributions**     | First Commit                   | Made your first commit                                 | Make a commit to any repository                     | 📝    |
|                       | First Pull Request             | Created your first pull request                        | Open a pull request                                 | 🔄    |
|                       | Pull Request Merged            | Had a pull request merged                              | Get a pull request merged                           | ✅    |
|                       | Quickdraw                      | Closed an issue or pull request quickly                | Close an issue/PR within 5 minutes                  | ⚡    |
| **Package Publishing**| First Package                  | Published your first package                           | Publish a package to npm or GitHub Packages         | 📦    |
|                       | Package Publisher              | Regular package publisher                              | Publish multiple packages                           | 🚀    |
| **Special**           | Arctic Code Vault Contributor  | Contributed to the 2020 GitHub Archive Program         | Had code archived in Arctic Code Vault              | 🏔️    |
|                       | GitHub Sponsor                 | Sponsored another developer                            | Sponsor someone on GitHub Sponsors                  | 💖    |

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

Please refer to [`CONTRIBUTING.md`](docs/CONTRIBUTING.md) for more details.

## License

Distributed under the MIT License. See [`LICENSE`](docs/LICENSE) for more information.

## Author

**Gabriel Demetrios Lafis** - [GitHub Profile](https://github.com/galafis)

---

*This README.md was generated and enhanced by Gabriel Demetrios Lafis.*
