// const DOG_URL = "https://dog.ceo/api/breeds/image/random";

// const doggos = document.querySelector(".doggos");
// let load = `<div class="loader"></div>`
// function addNewDoggo() {

//     var toggle = false;
    



        
    
//   const promise = fetch(DOG_URL);
//   promise
//     .then(function(response) {
//       const processingPromise = response.json();
//       return processingPromise;
//     })
//     .then(function(processedResponse) {
//       const img = document.createElement("img");
//       img.src = processedResponse.message;
//       img.alt = "Cute doggo";
//       img.className="imagegen"
//       doggos.appendChild(img);
//     });
// }


// if (toggle === false){
//     document.getElementById('kukky').innerHTML = load
//     }
    
// else{

// document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);
// }

// // const movieApiMovies = () => {
// // let loader = `<div class="boxLoading"></div>`;
// // document.getElementById('movieResult').innerHTML = loader;
// // fetch(movieApi_url + "movies/")
// //     .then(response => response.json())
// //     .then(function (data) {
// //         let result = `<h2> Movies I've watched! </h2>`;
// //         data.forEach((movie) => {
// //             const {id, name, year, note_imdb, genre, duration} = movie;
// //             result +=
// //                 `<div>
// //                     <h5> Movie ID: ${id} </h5>
// //                     <ul>
// //                         <li>Movie name: ${name}</li>
// //                         <li>Movie year: ${year}</li>
// //                         <li>Movie note on IMDB: ${note_imdb}</li>
// //                         <li>Movie Genre: ${genre}</li>
// //                         <li>Movie duration: ${duration}</li>
// //                     </ul>
// //                 </div>`;
// //             document.getElementById('movieResult').innerHTML = result;
// //         })
// //     })
// // };

// // const DOG_URL = "https://dog.ceo/api/breeds/image/random";

// // const doggos = document.querySelector(".doggos");

// // function addNewDoggo() {
// //   const promise = fetch(DOG_URL);
// //   promise
// //     .then(function(response) {
// //       const processingPromise = response.json();
// //       return processingPromise;
// //     })
// //     .then(function(processedResponse) {
// //       const img = document.createElement("img");
// //       img.src = processedResponse.message;
// //       img.alt = "Cute doggo";
// //       doggos.appendChild(img);
// //     });
// // }

// // document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);


  
const main = document.getElementById("kukky");
const loader = document.getElementById("loader");
const bt = document.getElementById("btn");

async function getImg (){

  const randomRes = await fetch("https://dog.ceo/api/breeds/image/random");
  const randomResJson = await randomRes.json();

  main.src = randomResJson.message;

  // add event listeners
  bt.addEventListener("click", handleBreedChange);

  main.addEventListener("load", function() {
    main.classList.add("show");
    loader.classList.remove("show");
  });


async function handleBreedChange() {

  main.src=""
  loader.classList.add("show");

  const res = await fetch(`https://dog.ceo/api/breeds/image/random`);
  const resJson = await res.json();

  main.src = resJson.message;
}

}

getImg();