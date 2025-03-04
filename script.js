function navigateTo(section) {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `<h2>Vous êtes dans la section ${section}</h2><p>Contenu à venir...</p>`;
}