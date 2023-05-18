
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
		var accountWindow = document.getElementById('accountWindow');
        var accountMenu = document.getElementById('accountMenu');

        accountWindow.addEventListener('click', function() {
            accountMenu.classList.toggle('active');
        });