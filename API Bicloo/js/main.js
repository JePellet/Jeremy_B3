fetch('https://api.citybik.es/v2/networks/bicloo').then(function(res) {
	return res.json().then(function(data) {
    var stations = data.network.stations;

    //Récupération de la balise html dans laquelle on va bosser
    liste = document.querySelector('div');

    for (i = 0; i < stations.length; i++) {
      //Calcul de la proportion de vélos dispo
			// En évitant la division par 0
			if (stations[i].extra.slots !== 0) {
					var proportion = (stations[i].free_bikes/stations[i].extra.slots);
			}

			//Création des balises à ajouter au html
      var currentDiv = document.createElement('div');
			currentDiv.classList.add('display');

			var currentDivName = document.createElement('div');
			currentDivName.classList.add('name');

			var currentDivEmptySlots = document.createElement('div');
			currentDivName.classList.add('emptySlots');

			var currentDivFreeBikes = document.createElement('div');
			currentDivFreeBikes.classList.add('freeBikes');


			//Assignation de classes pour les stations qui ont moins de 50% des vélos dispo
      if (stations[i].free_bikes === 0) {
      	currentDiv.classList.add('noBikes');
      } else if (proportion < 0.5) {
      	currentDiv.classList.add('prop');
			}

      //Ecriture du contenu du div
    	currentDivName.textContent = stations[i].name;
      currentDivEmptySlots.textContent = 'Places libres : ' + stations[i].empty_slots;
      currentDivFreeBikes.textContent = 'Vélo(s) libre(s) : ' + stations[i].free_bikes;

      //Ajout de la puce et du passage à la ligne à la page html
      liste.appendChild(currentDiv);
			currentDiv.appendChild(currentDivName);
			currentDiv.appendChild(currentDivEmptySlots);
			currentDiv.appendChild(currentDivFreeBikes);
    }

	});
});
