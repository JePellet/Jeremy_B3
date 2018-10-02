fetch('http://api.citybik.es/v2/networks/bicloo').then(function(res) {
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


			//Assignation de classes pour les stations qui ont moins de 50% des vélos dispo
      if (stations[i].free_bikes === 0) {
      	currentDiv.classList.add('noBikes');
      } else if (proportion < 0.5) {
      	currentDiv.classList.add('prop');
			}

      //Ecriture du contenu du div
    	currentDiv.textContent = stations[i].name +
      ' // Places libres : ' + stations[i].empty_slots +
      ' // Vélo(s) libre(s) : ' + stations[i].free_bikes;

      //Ajout de la puce et du passage à la ligne à la page html
    	liste.appendChild(currentDiv);
    }

	});
});
