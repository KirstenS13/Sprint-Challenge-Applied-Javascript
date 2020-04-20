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
function cardConstructor(articleInfoObj) {
    //create div element
    const card = document.createElement('div');
    //give div element class 'card'
    card.classList.add('card');

    //create div element
    const headline = document.createElement('div');
    //give div element class 'headline'
    headline.classList.add('headline');
    //give 'headline' div textContent
    headline.textContent = 'headline of article';

    //create div element
    const author = document.createElement('div');
    //give div element class 'author'
    author.classList.add('author');

    //create div element
    const imgContainer = document.createElement('div');
    //give div element class 'img-container'
    imgContainer.classList.add('img-container');

    //create img element
    const authorImg = document.createElement('img');
    //give img element src attribute
    //authorImg.src = 'url of author img';

    //create span element
    const authorName = document.createElement('span');
    //give span element textContent
    authorName.textContent = 'By (author name)';

    //append img element to 'img-container' div
    imgContainer.appendChild(authorImg);
    //append 'img-container' div to 'author' div
    author.appendChild(imgContainer);
    //append span element to 'author' div
    author.appendChild(authorName);
    //append 'headline' div to 'card' div
    card.appendChild(headline);
    //append 'author' div to 'card' div
    card.appendChild(author);
}
