
var steamButton = document.querySelector('.steam');
		var epicButton = document.querySelector('.epic');
		var steamWindow = null;
		var epicWindow = null;
		
		steamButton.addEventListener('click', function(e) {
			e.preventDefault();
			if (steamWindow === null || steamWindow.closed) {
				steamWindow = window.open('https://store.steampowered.com/login/', 'SteamWindow', 'width=800,height=600');
			} else {
				steamWindow.focus();
			}
		});
		
		epicButton.addEventListener('click', function(e) {
			e.preventDefault();
			if (epicWindow === null || epicWindow.closed) {
				epicWindow = window.open('https://www.epicgames.com/id/login', 'EpicWindow', 'width=800,height=600');
			} else {
				epicWindow.focus();
			}
		});
	const gameCards = document.querySelectorAll('.game-card');
    const modal = document.getElementById('modal');
    const modalImage = modal.querySelector('img');
    const modalDescription = modal.querySelector('.description');
    const modalCost = modal.querySelector('.cost');
    const closeButton = modal.querySelector('.close-button');
    
    gameCards.forEach(card => {
      const readMoreButton = card.querySelector('.read-more-button');
      
      readMoreButton.addEventListener('click', () => {
        const imageSrc = card.querySelector('img').src;
        const description = card.dataset.description;
        const cost = card.dataset.cost;
        
        modalImage.src = imageSrc;
        modalDescription.textContent = description;
        modalCost.textContent = `Cost: ${cost}`;
        
        modal.classList.add('open');
      });
    });
    
    closeButton.addEventListener('click', () => {
      modal.classList.remove('open');
    });