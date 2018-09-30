fetch('http://api.citybik.es/v2/networks/bicloo').then(function(res) {
	return res.json().then(function(data) {

    var stations = data.network.stations;

    //Récupération de la balise html dans laquelle on va bosser
    liste = document.querySelector('ul');

    for (i = 0; i < stations.length; i++) {
      //Calcul de la proportion de vélos dispo
      var proportion = (stations[i].free_bikes/stations[i].extra.slots);

      //Création des balises à ajouter au html
      var currentLi = document.createElement('li');
			var currentBr = document.createElement('br');

			//Mise en avant si peu ou pas de vélos dispo
			if (proportion < 0.5) {
      	currentLi.classList.add('prop');

				//Ecriture du contenu de la puce
				currentLi.textContent = stations[i].name +
				' // Places libres : ' +
				stations[i].empty_slots +
				' // Vélo(s) libre(s) : ' +
				stations[i].free_bikes;

      } else if (stations[i].extra.status === "CLOSED") {
      	currentLi.classList.add('closed');

				//Ecriture du contenu de la puce
				currentLi.textContent = stations[i].name +
				'		EST FERMEE'
      } else {
				//Ecriture du contenu de la puce
				currentLi.textContent = stations[i].name +
	      ' // Places libres : ' +
	      stations[i].empty_slots +
	      ' // Vélo(s) libre(s) : ' +
	      stations[i].free_bikes;
      }
    	
      //Ajout de la puce et du passage à la ligne à la page html
    	liste.appendChild(currentLi);
			liste.appendChild(currentBr);
    }

	});
});
