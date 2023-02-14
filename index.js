const API_KEY = "X8BOPDwAi7OHkqiUjoE2G2fPv1UZzsA1zYxO9TWeA21JOxZ3m9h31Wa7"

// let getPhotos;
// fetch("https://dog.ceo/api/breeds/image/random")
//   .then((response) => response.json())
//   .then((data) => {
//     getPhotos = data.dogs;
//     console.log(getPhoto)
//     let picture_data = "";
//     getPhotos.map((dog) => {
//       console.log(dog);
//       picture_data += `<div>
//      <img src= ${dog} alt="">
//       <p class="">${dog}</p>
//       </div>`;
//     });

// document.getElementById("dogs").innerHTML = picture_data;
//   })


// 
let getPhotos;
   fetch ("https://dog.ceo/api/breed/hound/images")
 
  .then ((response) => response.json())
  .then ((data) => {
    getPhotos = data.message;
    console.log(getPhotos)
    let picture_data = "";
        getPhotos.map((dogs) => {
          console.log(dogs);
          picture_data += `<div>
         <img src= ${dogs} alt="">
          
          </div>`;
    
  })

  document.getElementById("dog").innerHTML = picture_data

  })