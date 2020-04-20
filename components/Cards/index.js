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
/* axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        console.log(response);
        //cardConstructor(response);
    })
    .catch((error) => {
        console.log(error)
    }); */

//create function to create a card for each article
//commented out so I can try something else
/* function cardConstructor(articleInfoObj) {
   // for (let key in articleInfoObj.data.articles) {
        //checking to see that the keys are grabbing the correct things
        //console.log(key);
        articleInfoObj.data.articles.forEach((articleObj) => {
            //create div element
            const card = document.createElement('div');
            //give div element class 'card'
            card.classList.add('card');

            //create div element
            const headline = document.createElement('div');
            //give div element class 'headline'
            headline.classList.add('headline');
            //give 'headline' div textContent
            headline.textContent = articleObj.headline;

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
            authorImg.src = articleObj.authorPhoto;

            //create span element
            const authorName = document.createElement('span');
            //give span element textContent
            authorName.textContent = `By ${articleObj.authorName}`;

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
        })
   // }   
} */


//Retake

//function that accepts the object containing the headline, authorName, and authorPhoto keys
function cardConstructor(articleInfoObj) {
    /* //create div element
    const card = document.createElement('div');
    //give div element class 'card'
    card.classList.add('card');

    //create div element
    const headline = document.createElement('div');
    //give div element class 'headline'
    headline.classList.add('headline');
    //give 'headline' div textContent
    headline.textContent = articleInfoObj.headline;

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
    authorImg.src = articleInfoObj.authorPhoto;

    //create span element
    const authorName = document.createElement('span');
    //give span element textContent
    authorName.textContent = `By ${articleInfoObj.authorName}`;

    //append img element to 'img-container' div
    imgContainer.appendChild(authorImg);
    //append 'img-container' div to 'author' div
    author.appendChild(imgContainer);
    //append span element to 'author' div
    author.appendChild(authorName);
    //append 'headline' div to 'card' div
    card.appendChild(headline);
    //append 'author' div to 'card' div
    card.appendChild(author); */

    //check that the function is receiving the correct data
    console.log(articleInfoObj.headline, articleInfoObj.authorName, articleInfoObj.authorPhoto)
}

//my for loop to loop over the objects in the topic arrays
/* for (i = 0; i < response.data.articles.key.length; i++) {
    cardConstructor(response.data.articles.key[i]);
} */

//test that I am accessing the correct data
//it worked, so I will comment it out
/* axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        console.log(response);
        for (i = 0; i < response.data.articles.bootstrap.length; i++) {
            cardConstructor(response.data.articles.bootstrap[i]);
        }
    })
    .catch((error) => {
        console.log(error)
    }); */

//testing the loop with .forEach()
//it didn't work so I'm commenting it out
/* axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        console.log(response);
        response.data.articles.bootstrap.forEach(() => {
            cardConstructor(response.data.articles.bootstrap[i]);
        })
    })
    .catch((error) => {
        console.log(error)
    }); */

//create an array of the keys in the articles object
//const articleTopics = Object.keys(response.data.articles);

//test that this creates an array correctly
//it worked so I will comment it out
/* axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        console.log(response);
        const articleTopics = Object.keys(response.data.articles);
        console.log(articleTopics);
    })
    .catch((error) => {
        console.log(error)
    }); */


//Just testing that the array and the loop work at the same time
//they do, so I will comment it out
/* axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        console.log(response);
        const articleTopics = Object.keys(response.data.articles);
        console.log(articleTopics);
        for (i = 0; i < response.data.articles.bootstrap.length; i++) {
            cardConstructor(response.data.articles.bootstrap[i]);
        }
    })
    .catch((error) => {
        console.log(error)
    }); */


//loop through articleTopics array, so I can access the keys and loop through their arrays
/* articleTopics.forEach((topicKey) => {
    for (i = 0; i < response.data.articles.topicKey.length; i++) {
        cardConstructor(response.data.articles.topicKey[i]);
    }
}) */

//testing whether or not that loop inside forEach worked
//got it to work
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        console.log(response);
        const articleTopics = Object.keys(response.data.articles);
        console.log(articleTopics);
        articleTopics.forEach((key) => {
            console.log(key);
            for (i = 0; i < response.data.articles[key].length; i++) {
                cardConstructor(response.data.articles[key][i]);
            }
        })
    })
    .catch((error) => {
        console.log(error)
    });