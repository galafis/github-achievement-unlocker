import { ACHIEVEMENTS, checkUserAchievements } from '../src/index.js';

document.addEventListener('DOMContentLoaded', () => {
    const achievementsDisplay = document.getElementById('achievementsDisplay');
    const usernameInput = document.getElementById('usernameInput');
    const checkAchievementsBtn = document.getElementById('checkAchievementsBtn');
    const userAchievementsResult = document.getElementById('userAchievementsResult');

    // Display all achievements
    function renderAllAchievements() {
        achievementsDisplay.innerHTML = '';
        Object.entries(ACHIEVEMENTS).forEach(([category, achievements]) => {
            Object.entries(achievements).forEach(([name, info]) => {
                const card = document.createElement('div');
                card.classList.add('achievement-card');
                card.innerHTML = `
                    <span class="badge">${info.badge}</span>
                    <h3>${name}</h3>
                    <p>${info.description}</p>
                    <p><strong>Requisitos:</strong> ${info.requirements}</p>
                `;
                achievementsDisplay.appendChild(card);
            });
        });
    }

    // Handle achievement check button click
    checkAchievementsBtn.addEventListener('click', async () => {
        const username = usernameInput.value.trim();
        userAchievementsResult.innerHTML = '';

        if (!username) {
            userAchievementsResult.innerHTML = '<p style="color: red;">Por favor, digite um nome de usuário do GitHub.</p>';
            return;
        }

        // Simulate checkUserAchievements output
        const simulatedOutput = await getSimulatedAchievements(username);
        renderUserAchievements(username, simulatedOutput);
    });

    async function getSimulatedAchievements(username) {
        // This function mimics the logic in src/index.js checkUserAchievements
        const userAchievements = {};
        if (username === 'galafis') {
            userAchievements.repository = ['First Repository', 'Public Repository'];
            userAchievements.contributions = ['First Commit', 'First Pull Request'];
        } else if (username === 'octocat') {
            userAchievements.repository = ['First Repository', 'Public Repository', 'Starred Repository'];
            userAchievements.contributions = ['First Commit', 'First Pull Request', 'Pull Request Merged', 'Quickdraw'];
            userAchievements.packages = ['First Package', 'Package Publisher'];
            userAchievements.special = ['Arctic Code Vault Contributor', 'GitHub Sponsor'];
        }
        return userAchievements;
    }

    function renderUserAchievements(username, achievements) {
        userAchievementsResult.innerHTML = `<h2>Conquistas de ${username}:</h2>`;
        if (Object.keys(achievements).length === 0) {
            userAchievementsResult.innerHTML += '<p>Nenhuma conquista encontrada para este usuário (simulado).</p>';
        } else {
            Object.entries(achievements).forEach(([category, achievementNames]) => {
                userAchievementsResult.innerHTML += `<h3>${category.toUpperCase()}:</h3>`;
                achievementNames.forEach(achievementName => {
                    const categoryAchievements = ACHIEVEMENTS[category.toLowerCase()];
                    const info = categoryAchievements ? categoryAchievements[achievementName] : null;
                    if (info) {
                        userAchievementsResult.innerHTML += `
                            <p><span class="badge">${info.badge}</span> <strong>${achievementName}</strong>: ${info.description}</p>
                        `;
                    }
                });
            });
        }
    }

    renderAllAchievements();
});

