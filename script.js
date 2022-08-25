// 👉 Vous allez commencer par comptabiliser le nombre de mots présents dans la zone de texte. Pensez à utiliser la méthode split().

// 👉 Grâce à votre script, faites en sorte d'afficher le nombre de mots présents dans le texte, en dessous du champ input, comme ceci: Il y a <nombre> mots dans le texte ci-dessus.

// 👉 Déclenchez l’affichage du compteur au clic sur le bouton recherche

var button = document.getElementById("button");
var input = document.getElementById("input");
var result = document.getElementById("result");

// Ajouter un évènement d'ecoute sur le boutton

button.addEventListener("click", function () {
  var textarea = document.getElementById("textarea").value;
  // bonus trim : enlève les espaces répétés inutiles
  var words = textarea.trim().split(' ');

  if (!input.value) {
    result.textContent =
      "Il y a " + words.length + " mots dans le texte ci-dessus.";
  } else {
    var count = 0;
    for (var i = 0; i < words.length; i++) {
      // bonus : mettre words[i] et input.value en lowerCase pour rendre la recherche insensible à la casse
      if (words[i] == input.value) {
        count++;
      }
    }
    // if (count === 0) {
    //   result.textContent = 'Le mot "' + input.value + '" n\'a pas été trouvé dans le texte ci-dessus.';
    // } else {
    result.textContent =
      'Le mot "' +
      input.value +
      '" est présent ' +
      count +
      " fois dans le texte ci-dessus.";
    // };
    // bonus : vider le champs input après validation d'une recherche
    input.value = "";
  }
});