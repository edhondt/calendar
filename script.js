document.addEventListener('DOMContentLoaded', () => {
    // Déterminer la date d'aujourd'hui
    const today = new Date(); 
    const currentMonth = today.getMonth(); // Décembre est 11
    let currentDay = 0; 

    // Vérifier si nous sommes en Décembre
    if (currentMonth === 11) {
        currentDay = today.getDate();
    }
    
    // Parcourir les 24 cases
    for (let day = 1; day <= 24; day++) {
        const dayElement = document.getElementById(`day-${day}`);
        
        // Débloquer si le jour est inférieur ou égal à la date actuelle
        if (day <= currentDay) {
            dayElement.classList.add('unlocked');
        }

        // Ajouter l'événement de clic
        dayElement.addEventListener('click', () => {
            if (dayElement.classList.contains('unlocked')) {
                // CAS 1 : Cliquable (Date passée ou date du jour)
                window.location.href = `days/day${day}.html`;
            } else {
                // CAS 2 : Non cliquable (Date future)
                alert('Pas encore !');
            }
        });
    }
});
