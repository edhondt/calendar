document.addEventListener('DOMContentLoaded', () => {
    // --- MODE TEST ACTIF : TOUTES LES CASES SONT CLICABLES ---

    // 1. Parcourir les 24 cases
    for (let day = 1; day <= 24; day++) {
        const dayElement = document.getElementById(`day-${day}`);
        
        // FORCER la classe 'unlocked' sur toutes les cases pour le test
        dayElement.classList.add('unlocked');

        // 2. Ajouter l'événement de clic
        dayElement.addEventListener('click', () => {
            // Puisque tout est 'unlocked' en mode test, cette redirection fonctionnera toujours.
            
            // Redirige vers la page secrète du jour (Ex: days/day1.html, days/day2.html, etc.)
            window.location.href = `days/day${day}.html`;
        });
    }

    // --- RAPPEL : Pour le 1er décembre, vous devrez revenir au code original ---
    // Je vous le fournirai de nouveau quand vous en aurez besoin.
});
