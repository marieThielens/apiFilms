var popular = document.getElementById("popular");

ajaxGet("https://api.themoviedb.org/3/movie/popular?api_key=040be6ed973ee07470f83d3d9cb13d36&language=en-US&page=1", function (reponse) {
    // Transforme la réponse en un tableau
    var popularMovie = JSON.parse(reponse);
    var resulat = popularMovie.results;
    resulat.forEach(function(element){
        createHtml(element);
        filmAlone(element);

    });
});

var createHtml = function(element) {
    let containerPopular = document.createElement("div");
    containerPopular.classList.add("containerPopular");
    containerPopular.classList.add("col-md-5");
    let gauche = document.createElement("div");
    gauche.classList.add("gauche");
    let image = document.createElement("img");
    image.classList.add("imageFilm");
    image.src = "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + element.poster_path;
    let droite = document.createElement("div");
    droite.classList.add("droite");   
    let titre = document.createElement("h2");
    titre.textContent = element.title;
    let annee = document.createElement("span");
    annee.textContent = element.release_date;
    let description = document.createElement("p");
    description.classList.add("description");
    description.textContent = element.overview;

    popular.appendChild(containerPopular);
    containerPopular.appendChild(gauche);
    containerPopular.appendChild(droite);
    gauche.appendChild(image);
    droite.appendChild(titre);
    droite.appendChild(annee);
    droite.appendChild(description);
}

var filmAlone = function(element) {
    var image = document.addEventListener("click", function() {
        document.getElementsByClassName("imageFilm");
        var id = element.id;
        console.log(id);
    });
}


// var articlesElt = document.getElementById("articles");
// ajaxGet("https://api.themoviedb.org/3/movie/popular?api_key=040be6ed973ee07470f83d3d9cb13d36&language=en-US&page=1", function (reponse) {
//     // Transforme la réponse en un tableau d'articles
//     var articles = JSON.parse(reponse);
//     articles.forEach(function (article) {
//         // Ajout du titre et du contenu de chaque article
//         var titreElt = document.createElement("h2");
//         titreElt.textContent = article.titre;
//         var contenuElt = document.createElement("p");
//         contenuElt.textContent = article.contenu;
//         articlesElt.appendChild(titreElt);
//         articlesElt.appendChild(contenuElt);
//     });
// });


//     var becode = document.getElementById("becode");
// // Accès aux informations publiques sur le Premier Ministre
// ajaxGet("https://project-622bb.firebaseio.com/BeCode.json", function (reponse) {
//     var apiBertrand = JSON.parse(reponse);  

//     for (var i=0; i< apiBertrand.length; i++) {
//         for( var objet in apiBertrand){
//            // console.log(apiBertrand[objet].history)
//             var titre = document.createElement("h2");
//                 titre.textContent = apiBertrand[objet].profile.firstname + " " + apiBertrand[objet].profile.lastname;
//                 becode.appendChild(titre);
            
//         }
//     }
// });

// function genreFilm() {
//     var formulaire = document.getElementById("search");
//     formulaire.addEventListener('submit', function(e){
        
//         e.preventDefault();
//         ajaxGet("https://api.themoviedb.org/3/genre/movie/list?api_key=040be6ed973ee07470f83d3d9cb13d36&language=en-US", function (reponse) {
//             var genreFilms = JSON.parse(reponse);
//             console.log(genreFilms)
//             for (var objet in genreFilms) {
//              //console.log(genreFilms[genres][0].name)
//              console.log(genreFilms[objet])
//                         for(var i=0; i < genreFilms[objet].length; i++) {
//                         console.log(genreFilms)
              
//                     }
//                 }


    
//         })

//     })
// }



// var genre = encodeURIComponent(genre);
// // Méthode GET
// // var essai = new XMLHttpRequest();
// //     essai.open("GET", "file:///home/becode/Documents/becodeCorrig%C3%A9Exercice/api/index.html?name=" + genre);
// //     essai.send();
// // Méthode POST
// var post = new XMLHttpRequest();
//     post.open('POST', 'file:///home/becode/Documents/becodeCorrig%C3%A9Exercice/api/index.html');
//     post.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//     post.send('genre=' + genre)

    // xhr.open('POST', 'http://mon_site_web.com/ajax.php');
    // xhr.send('param1=' + value1 + '&param2=' + value2);





// https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=autruche


//https://api.themoviedb.org/3/genre/movie/list?api_key=040be6ed973ee07470f83d3d9cb13d36&language=en-US


//      console.log(apiBertrand)
//     Ajout de la description et du logo dans la page web
//     var titre = document.createElement("h2");
//         titre.textContent = apiBertrand[0].profile.firstname + " " + apiBertrand[0].profile.lastname;
//     var descriptionElt = document.createElement("p");
//          descriptionElt.textContent = apiBertrand[0].history;
//     // var logoElt = document.createElement("img");
//     becode.appendChild(titre);
//     becode.appendChild(descriptionElt);
//     becode.appendChild(logoElt);
// // }
// });

// var trouve = document.getElementById("search").value;
// function search() {
    
//     ajaxGet("https://api.themoviedb.org/3/genre/movie/list?api_key=040be6ed973ee07470f83d3d9cb13d36&language=en-US ", function (reponse) {
//         var apiWiki = JSON.parse(reponse);
       
//         var reponse = document.createElement("p");
//             reponse.textContent = apiWiki;

//     })
// }