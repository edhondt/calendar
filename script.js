document.addEventListener('DOMContentLoaded', () => {
    // --- MODE PRODUCTION : VÉRIFICATION DE LA DATE ACTIVÉE ---

    // 1. Déterminer la date d'aujourd'hui
    const today = new Date(); 
    // Attention : Le mois est basé sur 0, donc Décembre est 11.
    const currentMonth = today.getMonth();
    let currentDay = 0; 

    // Si nous sommes en Décembre, on utilise le jour actuel. Sinon, currentDay reste 0.
    if (currentMonth === 11) {
        currentDay = today.getDate();
        // Optionnel : Pour tester le 24 décembre n'importe quand, vous pouvez forcer :
        // currentDay = 24; 
    }
    
    // 2. Parcourir les 24 cases et gérer les interactions
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
                // Redirige vers la page secrète du jour
                window.location.href = `days/day${day}.html`;
            } else {
                // CAS 2 : Non cliquable (Date future)
                alert('Pas encore !');
            }
        });
    }
});
