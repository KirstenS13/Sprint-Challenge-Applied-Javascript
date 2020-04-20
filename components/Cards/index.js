// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.


//My Code
//pseudocode

//send GET request
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    });

//create function to create a card for each article
//Create markup
//create div element
//give div element class 'card'

//create div element
//give div element class 'headline'
//give 'headline' div textContent

//create div element
//give div element class 'author'

//create div element
//give div element class 'img-container'

//create img element
//give img element src attribute

//create span element
//give span element textContent

//append img element to 'img-container' div
//append 'img-container' div to 'author' div
//append span element to 'author' div
//append 'headline' div to 'card' div
//append 'author' div to 'card' div