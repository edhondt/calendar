document.addEventListener('DOMContentLoaded', () => {
    // 1. Déterminer la date d'aujourd'hui
    // Note : Le mois est basé sur 0, donc Décembre est 11.
    // Pour les tests avant Décembre, vous pouvez remplacer 'new Date()' par 'new Date(2025, 11, 5)' par exemple.
    const today = new Date(); 
    
    // Si nous ne sommes pas en Décembre, on peut tricher pour tester :
    // const today = new Date(2025, 11, 5); // Simule le 5 décembre 
    
    // Si le mois n'est pas décembre (mois 11), on bloque tout, sauf si on simule.
    const currentMonth = today.getMonth();
    
    // Le jour actuel (1 à 31)
    let currentDay = 0; 

    if (currentMonth === 11) {
        currentDay = today.getDate();
    } else if (currentMonth > 11 || currentMonth < 11) {
        // Optionnel : si on est en janvier ou octobre, on met 0 pour bloquer
        // Sauf si vous voulez des tests avant le 1er déc.
        currentDay = 0;
    }
    
    // 2. Parcourir les 24 cases
    for (let day = 1; day <= 24; day++) {
        const dayElement = document.getElementById(`day-${day}`);
        
        // Débloquer si le jour est inférieur ou égal à la date actuelle
        if (day <= currentDay) {
            dayElement.classList.add('unlocked');
        }

        // 3. Ajouter l'événement de clic
        dayElement.addEventListener('click', () => {
            if (dayElement.classList.contains('unlocked')) {
                // CAS 1 : Cliquable (Date passée ou date du jour)
                
                // Redirige vers la page secrète du jour (Ex: day1.html, day2.html, etc.)
                window.location.href = `days/day${day}.html`;
                
            } else {
                // CAS 2 : Non cliquable (Date future)
                
                // Afficher le message d'erreur souhaité
                alert('Pas encore !');
            }
        });
    }
});
